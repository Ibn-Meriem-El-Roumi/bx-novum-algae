// GET POST DELETE PATCH / PUT

import SmallSweet from "../models/SmallSweets.js";

async function getAllSmallSweets(request, response) {
    const allSmallSweets = await SmallSweet.find({})
    if (allSmallSweets.length === 0) return response.status(404).json({message: "No Sweets are here"})
    return response.status(200).json({message: "Sweets found", sweets: allSmallSweets})
}

export {
    getAllSmallSweets
}