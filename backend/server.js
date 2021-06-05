import express from "express";
import mongoose from "mongoose";
import UserRouter from "./Routers/userRouter.js";
import productRouter from "./Routers/productRouter.js";
import orderRouter from "./Routers/orderRouter.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express(); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

mongoose.connect(process.env.MONGODB_URL ||  "mongodb://localhost/medcorner", {
   useNewUrlParser: true, 
   useUnifiedTopology: true, 
   useCreateIndex:true,  
}); 

app.use("/api/users", UserRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req,res)=>{
    res.send("Server is ready");
})

app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 3000; 

app.listen(port, ()=>{
    console.log(`server at http://localhost/${port}`);
})
