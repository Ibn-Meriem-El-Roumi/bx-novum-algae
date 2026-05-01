// CRUD
// Create[POST] Read(All, one, some)[GET] Update[PUT, PATCH] Delete/Destroy[DELETE]

function createStudent(request, response){
    console.log(`Student ${request.body.name} added`);
    response.send({message: "All fine babyyyy"})
}

function getAllStudents(request, response){
    console.log(`All Students are here`);
    response.send({message: "All fine babyyyy"})
}

function getOneStudentById(request, response){
    console.log(`Student ${request.params.id} is here`);
    response.send({message: "All fine babyyyy"})
}

function updateStudent(request, response){
    console.log(`Student ${request.params.id} is here`);
    console.log(`Student ${request.body.name} is updated`);
    response.send({message: "All fine babyyyy"})
}

function deleteStudent(request, response){
    console.log(`Student ${request.params.id} is deleted`);
    response.send({message: "All fine babyyyy"})
}

export {
    createStudent,
    getAllStudents,
    getOneStudentById,
    updateStudent,
    deleteStudent
}