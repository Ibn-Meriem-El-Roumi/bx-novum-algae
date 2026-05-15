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
async function getTeaById(req, res){
    try{
        const oneTea = await Tea.findById(req.params.id)
        if(!oneTea) return res.status(404).json({message: "Tea not found"})
        return res.status(200).json(oneTea)
    }catch(err){
        console.error(err);
        
    }
}
// get all teas
async function getAllTeas(req, res){
    try{
        const allTeas = await Tea.find({})
        if(allTeas.length === 0) return res.status(404).json({message: "No Tea is available"})
        return res.status(200).json(allTeas)
    }catch(err){
        console.error(err);
        
    }
}
// update a tea
async function updateTea(req, res){
    try {
        const updatedtea = await Tea.findByIdAndUpdate(req.params.id, req.body)
        if(!updatedtea) return res.status(404).json({message: "No Tea is available"})
        return res.status(200).json({message: "Tea updated", updateTea})
    } catch (error) {
        console.error(error);
        
    }
}

async function updateTeaPrice(req, res){
    try {
        const {price} = req.body
        if(price) {
            const updatedtea = await Tea.findOneAndUpdate({_id: req.params.id}, {price: price})
            if(!updatedtea) return res.status(404).json({message: "No Tea is available"})
            return res.status(200).json({message: "Tea updated", updateTea})

        }else{
            return res.status(404).json({message: "New Price is not provided"})
        }
    } catch (error) {
        console.error(error);
        
    }
}
// delete a tea
async function deleteTea(req, res){
    try {
        const deletedTea = await Tea.findByIdAndDelete(req.params.id)
        if(!deletedTea) return res.status(400).json({message: "Element has not been deleted"})
        return res.status(204).json({message: "Tea deleted", deleteTea})
    } catch (error) {
        console.error(error);
        
    }
}

export {
    createTea,
    getAllTeas,
    getTeaById,
    updateTea,
    updateTeaPrice,
    deleteTea,
}