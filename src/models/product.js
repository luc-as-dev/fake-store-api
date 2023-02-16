
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        require:true
    }
});

export const Product = mongoose.model("products",productSchema);