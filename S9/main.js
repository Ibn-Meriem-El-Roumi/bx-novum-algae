// const normalBtn = document.querySelector("[type='button']")

// const body = document.querySelector("body")

// body.addEventListener("click", function(e){
//     console.log(e);
    
// })

// console.log(document.getElementsByTagName("meta")[0]);
// const element = document.querySelector("meta")
// element.className = "className"
// element = "Hello World"
// console.log(element);

// Static stupid database
let USERS = []

const fullName = document.querySelector("#fullname")
const dateOfBirth = document.querySelector("#dateofbirth")
const phone = document.querySelector("#phonenumber")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmpassword")

const sumbitBtn = document.querySelector("[type='submit']")

console.log(USERS);

sumbitBtn.addEventListener("click", function(e){
    e.preventDefault()

    const newUser = {
        fullname: fullName.value,
        dateOfBirth: dateOfBirth.value,
        phone: phone.value,
        email: email.value,
        password: password.value
    }

    USERS.push(newUser)
    console.log(USERS);
    
})  

