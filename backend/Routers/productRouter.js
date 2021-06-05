import express from "express"; 
import expressAsyncHandler from "express-async-handler"; 
import Product from "../Model/productModel.js";
import Meddata from "../medicine.js";

const productRouter = express.Router(); 

productRouter.get("/", 
    expressAsyncHandler(async (req,res) => {
        const products = await Product.find({});
        res.send(products);
    })
);
productRouter.get("/seed",
    expressAsyncHandler(async(req,res)=>{  
        const createdProduct = await Product.insertMany(Meddata.medicines);
        res.send({createdProduct})
    })
);

productRouter.get("/:id", 
    expressAsyncHandler(async(req,res)=>{
        const product = await Product.findById(req.params.id); 
        if(product){
            res.send(product);
        }
        else{
            res.status(404).send({message:"Medicine not Found!"});
        }
    })
)

export default productRouter; 