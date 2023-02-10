
import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();
const products = [
    {id:1,name:"Phone",price:8990},
    {id:2,name:"Laptop",price:14990},
    {id:3,name:"Headphones",price:1490}
];

app.use(cors({origin:"*"}));

app.get("/products",(req,res)=>{
    res.send(products);
});

app.get("/products/:id",(req,res)=>{
    const product = products.find(p=>p.id==req.params.id);
    if(!product) {
        res.status(404).send();
    } else {
        res.send(product)
    }

});

app.listen(PORT);
console.log(`Started server on port: ${PORT}`);