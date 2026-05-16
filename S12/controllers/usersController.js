import User from "../models/User.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config()

import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET
const maxAge = 24 * 60 * 60 * 1000
function createToken(data){
    return jwt.sign({email: data}, JWT_SECRET, {
        expiresIn: "1h"
    })
}

async function createUser(req, res){
    try{
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        if(!savedUser) return res.status(500).json({message: "Something went wrong"});
        const token = createToken(savedUser.email)
        res.cookie("jwt", token, {
            httpOnly: true, 
            maxAge 
        })
        console.log("User created");
        return res.status(201).json(savedUser);
        
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

async function loginUser(req, res){
    try {
        const {email, password} = req.body
        const foundUser = await User.findOne({email})
        if(foundUser){
            const auth = await bcrypt.compare(password, foundUser.password)
            if(auth) {
                const token = createToken(email)
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge
                })
                return res.render("pages/profile", {user: foundUser})
            }
            return res.status(403).json({message: "Password is wrong"})
        }else{
            return res.status(404).json({message: "User not found"})
        }
    } catch (error) {
        console.error(error);
    }
}

export {
    createUser,
    getUserByEmail,
    loginUser
}