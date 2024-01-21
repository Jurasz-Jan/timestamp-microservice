import express from "express";
import { PORT, mongoURI } from "./config.js";
import mongoose from "mongoose";
import { Antique } from "./models/antiqueModel.js";
import storeRoute from './routes/storeRoute.js';
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());

app.use('/store', storeRoute);



mongoose
    .connect(mongoURI)
    .then(()=>{
        console.log("WE'RE IN");
        app.listen(PORT,() => {
            console.log(`App is listening on the port: ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    });



