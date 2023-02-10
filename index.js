
import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(cors({origin:"*"}));

app.listen(PORT);
console.log(`Started server on port: ${PORT}`);