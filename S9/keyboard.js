const key = document.querySelector("#key")
const aud = document.querySelector("audio")

document.addEventListener("keydown", (e) => {
    key.innerHTML = `<h1>${e.key}</h1>`
    const catSound = new Audio("catsound1.mp3")

    if(e.key === "k" || e.key === "K"){
        key.innerHTML = `<h1>${e.key} COOKIIIIIIE</h1>`
        // catSound.play()
        aud.play()
    }
})