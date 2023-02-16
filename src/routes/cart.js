
import { Cart } from "../models/Cart.js";
import express from "express";

export const router = new express.Router();

router.get("/carts",async(req,res)=>{
    try{
        const carts = await Cart.find().populate("products.product");
        res.send(carts);
    } catch(e) {
        res.status(500).send();
    }
});

router.get("/carts/:id",async(req,res)=>{
    const _id = req.params.id;

    try{
        const cart = await Cart.findById(_id).populate("products.product");
        if(!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch(e){
        res.status(500).send(e);
    }
});

router.post("/cart",async(req,res)=>{
    try{
        const {products} = req.body;
        const cart = new Cart({products});
        await cart.save();
        res.status(201).send(cart);
    } catch(e){
        res.status(400).send();
}
});

router.delete("/carts/:id",async(req,res)=>{
    const _id = req.params.id;

    try{
        const cart = await Cart.findByIdAndDelete(_id);
        if(!cart){
            return res.status(404).send();
        }
        res.send(cart);
    } catch(e){
        res.status(500).send();
    }
});