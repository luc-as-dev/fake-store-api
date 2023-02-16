
import "./db/mongoose.js";
import { router as productRouter } from "./routes/product.js";
import { router as cartRouter } from "./routes/cart.js";
import express from "express";
import cors from "cors";
import {config} from "dotenv";

config();

const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(productRouter);
app.use(cartRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Started server on port: ${process.env.PORT}`);
});