
import {Product} from "../models/product.js";
import express from "express";
import {z} from "zod";

export const router = new express.Router();

router.get("/products",async(req,res)=>{
    const {sortBy, sortOrder} = req.query;
    const querySchema = z.object({
        sortBy:z.enum(["name","price"]),
        sortOrder:z.enum(["asc","desc"])
    });
    const sort = querySchema.safeParse({sortBy,sortOrder}) ? {[sortBy]:sortOrder} : {};

    try{
        const products = await Product.find({}).sort(sort);
        res.send(products);
    } catch(e){
        res.status(500).send();
    }
});

router.get("/products/:id",async(req,res)=>{
    const _id = req.params.id;

    try{
        const product = await Product.findById(_id);
        if(!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch(e){
        res.status(500).send(e);
    }
});

router.post("/product",async(req,res)=>{
    const product = new Product(req.body);
    try{
        await product.save();
        res.status(201).send(product);
    } catch(e){
        res.status(400).send();
}
});

router.delete("/products/:id",async(req,res)=>{
    const _id = req.params.id;

    try{
        const product = await Product.findByIdAndDelete(_id);
        if(!product){
            return res.status(404).send();
        }
        res.send(product);
    } catch(e){
        res.status(500).send();
    }
});