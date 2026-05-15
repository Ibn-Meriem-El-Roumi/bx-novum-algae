function changePrice(req, res, next){
    if(req.body.price > 1000){
        console.log("It is too expesive")
        res.status(500).json({message: "A sahbi ahchem"})
    }else{
        next()
    }
}

export{
    changePrice
}