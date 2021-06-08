import express from "express"; 
import expressAsyncHandler from "express-async-handler"; 
import bcrypt from "bcryptjs";
import User from "../Model/userModel.js"; 
import data from "../userdata.js";
import {isAuth, isAdmin, generateToken} from "../utils.js";
import mongoose from "mongoose";

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
UserRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

UserRouter.get(
    "/", 
    isAuth,
    isAdmin, 
    expressAsyncHandler(async(req,res)=>{
        const users = await User.find({});
        res.send(users);
    })
); 

UserRouter.delete(
    "/:id", 
    isAuth, 
    isAdmin, 
    expressAsyncHandler(async(req,res)=>{
        const user = await User.findById(req.params.id); 
        if(user){
            if(user.email === "sc@example.com"){
                res.status(400).send({message: "cannot delete admin user"}); 
                return;
            }
            const deleteUser = await user.remove(); 
            res.send({message: "User was deleted!", user:deleteUser});
        }else{
            res.status(404).send({message: "User not found"});
        }
    })
); 
UserRouter.put(
    "/:id", 
    isAuth, 
    isAdmin, 
    expressAsyncHandler(async(req,res)=>{
        const user = await User.findById(req.params.id); 
        if(user){
            user.name = req.body.name || user.name; 
            user.email = req.body.email || user.email;
            user.isAdmin = req.body.isAdmin || user.isAdmin;
            const updatedUser = await user.save();
            res.send({message: "User was updated", User:updatedUser});

        }else{
            res.status(405).send({message: "No user Found!"});
        }
    })
); 
UserRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        let id = mongoose.Types.ObjectId(req.user._id);
        console.log(req.user._id);
      const user = await User.findById(id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      }
    })
  );
export default UserRouter