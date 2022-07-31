const icon = document.querySelector(".share-icon");

const globe = document.querySelector(".globe")

icon.addEventListener("click", ()=>{
    globe.classList.toggle("show")
})