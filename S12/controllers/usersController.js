import User from "../models/User.js";

async function createUser(req, res){
    try{
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
    }catch(error){
        console.error(error);
    }
}