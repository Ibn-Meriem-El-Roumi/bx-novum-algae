import jwt from "jsonwebtoken"
import User from "../models/User.js"
import dotenv from "dotenv"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET
function requireAuth(req, res, next){
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if(err){
                console.log(err);
                res.redirect("/login")
            }else{
                console.log(decodedToken);
                next()
            }
        })
    }else{
        res.redirect("/login")
    }
}

export {
    requireAuth
}