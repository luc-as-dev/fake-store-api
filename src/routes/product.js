
import express from "express";
import {z} from "zod";

export const router = new express.Router();

const products = [
    {id:1,name:"Phone",price:8990},
    {id:2,name:"Laptop",price:14990},
    {id:3,name:"Headphones",price:1490}
];

router.get("/products",(req,res)=>{
    res.send(products);
});

router.get("/products/:id",(req,res)=>{
    const product = products.find(p=>p.id==req.params.id);
    if(!product) {
        res.status(404).send(`could not find product`);
    } else {
        res.send(product);
    }
});

router.post("/product",(req,res)=>{
    console.log(req.body);
    const bodySchema = z.object({
        name:z.string(),
        price:z.number()
    });
    if(!bodySchema.safeParse(req.body).success){
        res.status(400).send("invalid keyvalue-pairs");
    } else {
        products.push(req.body);
        res.send("product added");
    }
});

router.delete("products/:id",(req,res)=>{

});