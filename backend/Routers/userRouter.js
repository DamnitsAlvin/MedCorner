import express from "express"; 
import expressAsyncHandler from "express-async-handler"; 
import bcrypt from "bcryptjs";
import User from "../Model/userModel.js"; 
import data from "../userdata.js";
import {generateToken} from "../utils.js";

const UserRouter = express.Router();

UserRouter.get(
    '/seed', 
    expressAsyncHandler(async(req,res)=>{
        await User.remove({});
        const createdUser = await User.insertMany(data.user);
        res.send({createdUser})
    })
);
UserRouter.post(
    '/signin', 
    expressAsyncHandler(async(req,res)=>{
       const user = await User.findOne({email: req.body.email}); 
       if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id, 
                name: user.name, 
                email: user.email, 
                isAdmin: user.isAdmin, 
                token: generateToken(user), 
            }); 
            return;
        }
        else{
            res.status(401).send({message: "Invalid Password"});
            return;
        }
        }
       
       res.status(401).send({message: "Invalid Email!"});
    })
)
UserRouter.post(
    "/register", 
    expressAsyncHandler(async(req,res)=>{
        const user = new User({
            name: req.body.name, 
            email: req.body.email, 
            password: bcrypt.hashSync(req.body.password, 8), 
            isAdmin: false
        }); 
        const createUser = await user.save();
        res.send({
            _id: createUser._id, 
            name: createUser.name, 
            email: createUser.email, 
            isAdmin: createUser.isAdmin, 
            token: generateToken(createUser),
        });
    })
)
export default UserRouter