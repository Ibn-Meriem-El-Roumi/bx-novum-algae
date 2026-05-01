import Tea from "../models/Tea.js";

// create a tea
async function createTea(req, res){
    try{
        const newTea = new Tea(req.body)
        const savedTea = await newTea.save()
        if(!savedTea) return res.status(500).json({message: "Ops"})
        res.status(201).json(savedTea)
    }catch(err){
        console.error(err);
    }
}
// get a tea by id
function getTeaById(req, res){
    console.log(`Tea ${req.params.id} has been found`);
    res.send(req.params.id)
}
// get all teas
function getAllTeas(req, res){
    res.send({message: "All Teas are here"})
}
// update a tea
function updateTea(req, res){
    console.log(`Tea ${req.params.id} has been updated`);
    res.send(req.params.id, req.body)
}
// delete a tea
function deleteTea(req, res){
    console.log(`Tea ${req.params.id} has been deleted`);
    res.send(req.params.id)
}

export {
    createTea,
    getAllTeas,
    getTeaById,
    updateTea,
    deleteTea
}