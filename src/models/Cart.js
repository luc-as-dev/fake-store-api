
import {Product} from "./Product.js";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products:{
        type:[{
            product:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:Product,
                required:true
            },
            numberOfProducts:{
                type:Number,
                required:true,
                default:1,
                min:1
            }
        }]
    }
});

export const Cart = mongoose.model("Cart",cartSchema);