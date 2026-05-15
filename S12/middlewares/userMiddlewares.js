import bcrypt from "bcrypt"

async function displayPassword(req, res, next){
    try {
        bcrypt.genSalt(10, (err, salt) => {
            if(err) next()
            bcrypt.hash(req.body.password, salt, (err, newPassword) => {
                req.body.password = newPassword
                next()
            })
        })
    } catch (error) {
        console.error(error);
    }
}

export {
    displayPassword
}