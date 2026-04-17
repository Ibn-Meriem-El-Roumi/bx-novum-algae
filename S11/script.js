/**
 * Create a CLi
 * Todo app that manages adding tasks
 * 
 * add listAll
 * Nodejs 
 */

import {appendFileSync, readFileSync, writeFileSync} from "fs"
const args = process.argv.splice(2)
const user = args[1]
const task = args[2]
const dueDate = args[3]
const sourceFile = "todos.tpo"
switch(args[0]){
    case "add":
        addTask(user, task, dueDate)
        break;
    case "list":
        listAll()
        break;
    default:
        console.log(`${args[0]} is not a command: Command not recognised`);
        break;
}

function addTask(user, task, dueDate){
    let newTask = `${user}: ${task} => ${dueDate}\n`
    appendFileSync(sourceFile, newTask)
    console.log(`Task added to ${user}`);
    
}

function listAll(){
    const content = readFileSync(sourceFile, {encoding: "utf-8"})
    const contentArray = content.split("\n")
    console.log(contentArray);
    
    return contentArray
    // console.log(contentArray);
    // console.log(typeof content);
    // console.log("Listing ALL todos");
}

function deleteList(id){
    const todos = listAll()
    const newArray = todos.filter((item, index) => index !== id).filter(item => item !== "")
    console.log(newArray);
    writeFileSync(sourceFile, "", {encoding: "utf-8"})
    newArray.forEach(item => {
        appendFileSync(sourceFile, `${item}\n`)
        console.log(item);
    })
}

deleteList(2)