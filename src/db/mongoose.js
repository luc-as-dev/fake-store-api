
import mongoose from "mongoose";
import {config} from "dotenv";
config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URI);