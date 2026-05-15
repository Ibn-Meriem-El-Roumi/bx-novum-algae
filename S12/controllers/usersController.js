import User from "../models/User.js";
import bcrypt from "bcrypt"

async function createUser(req, res){
    try{
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        if(!savedUser) return res.status(500).json({message: "Something went wrong"});
        return res.status(201).json(savedUser);
        console.log("User created");
        
    }catch(error){
        console.error(error);
    }
}

async function getUserByEmail(req, res){
    try{
        const user = await User.find({email: req.body.email})
        console.log(user, req.body.password);
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            return res.status(200).json(user);
        })
        return res.status(404).json({message: "Not found"});
        
    }catch(error){
        console.error(error);
    }
}

export {
    createUser,
    getUserByEmail
}