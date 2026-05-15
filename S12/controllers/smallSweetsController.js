// GET POST DELETE PATCH / PUT

import SmallSweet from "../models/SmallSweets.js";

async function getAllSmallSweets(request, response) {
    const allSmallSweets = await SmallSweet.find({})
    if (allSmallSweets.length === 0) return response.status(404).json({message: "No Sweets are here"})
    return response.status(200).json({message: "Sweets found", sweets: allSmallSweets})
}

async function createOneSmallSweet(req, res) {
  try{
    console.log(req.body.price);
    res.status(200).json({price: req.body.price})
  }catch(err) {
    console.error(err);
  } 
}

export {
    getAllSmallSweets,
    createOneSmallSweet
}