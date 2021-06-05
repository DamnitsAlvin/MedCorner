import mongoose from "mongoose"; 

const ProductSchema = new mongoose.Schema(
    {
        name:{type: String, required: true, unique:true}, 
        Distributor: {type:String, required:true, unique: true},
        price: {type: Number, required: true }, 
        description: {type:String, required:true}, 
        generic_name:{type:String, required:true},
        Date_of_Production:{type:String, required:true}, 
        Date_of_Expiry: {type:String, required:true}, 
        Category:{type: Array, required: true},  
        Purpose:{type: String , required: true},
        image: {type: String, required:true},
        countInStock:{type:String,required:true}
    },
    {
        timestamps: true,
    }
); 
const Product = mongoose.model("Product", ProductSchema);
export default Product; 