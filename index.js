
import express from "express";
import cors from "cors";
import {z} from "zod";

const PORT = 3000;

const app = express();
const products = [
    {id:1,name:"Phone",price:8990},
    {id:2,name:"Laptop",price:14990},
    {id:3,name:"Headphones",price:1490}
];

app.use(cors({origin:"*"}));
app.use(express.json());

app.get("/products",(req,res)=>{
    res.send(products);
});

app.get("/products/:id",(req,res)=>{
    const product = products.find(p=>p.id==req.params.id);
    if(!product) {
        res.status(404).send(`could not find product`);
    } else {
        res.send(product);
    }
});

app.post("/product",(req,res)=>{
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

app.listen(PORT);
console.log(`Started server on port: ${PORT}`);