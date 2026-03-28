const nameInput = document.querySelector("#name")
// const ageInput = document.querySelector("#age")
// const fieldInput = document.querySelector("#field")

const changeBtn = document.querySelector("button")
const message = document.querySelector("#title")

// // changeBtn.onclick = function(){
// //     message.textContent = `Hello ${nameInput.value}`
// // }

changeBtn.addEventListener("click", function(){
    message.textContent = `Hello ${nameInput.value.toUpperCase()}`

})