import express from "express"; 
import expressAsyncHandler from "express-async-handler"; 
import Product from "../Model/productModel.js";
import Meddata from "../medicine.js";
import {isAdmin, isAuth, isSellerOrAdmin} from "../utils.js";


const productRouter = express.Router(); 

productRouter.get("/", 
    expressAsyncHandler(async (req,res) => {
        console.log("called!!!");
        const products = await Product.find({});
        res.send(products);
    })
);
productRouter.post("/", 
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
    const product = new Product({
        name:"sample name", 
        Distributor: "sample distributor",
        price: 0, 
        description: "sample description", 
        generic_name:"sample generic name ",
        Date_of_Production:"sample DOP", 
        Date_of_Expiry: "sample doe", 
        Category:["category", "category"],  
        Purpose:"sample purpose",
        image: "./images/covid_essentials.jpg",
        countInStock:50
    });
    const createdProduct = await product.save();
    res.send({ message: 'Product Created', product: createdProduct });
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
);

productRouter.put(
    '/:id',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (product) {
        product.name = req.body.name;
        product.Distributor = req.body.distributor;
        product.generic_name = req.body.generic_name;
        product.Date_of_Production = req.body.DOP; 
        product.Date_of_Expiry = req.body.DOE;
        product.Purpose = req.body.purpose;
        product.price = req.body.price;
        product.image = req.body.image;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        res.send({ message: 'Product Updated', product: updatedProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
  
  productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Product Deleted', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
  


export default productRouter; 