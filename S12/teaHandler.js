// create a tea
function createTea(req, res){
    console.log(`Tea ${req.body.id} has been added`);
    const newTea= {
        id: new Date(), ...req.body

    }
    res.send(newTea)
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