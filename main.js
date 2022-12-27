let rules = document.querySelector(".rules")
let info = document.querySelector(".rules--popup")
let overlay = document.querySelector(".overlay")

const openModal = () =>{
    // rules.classList.add("hidden")
    info.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

rules.addEventListener("click",openModal)

const closeModal = () =>{
    rules.classList.remove("hidden")
    info.classList.add("hidden")
    overlay.classList.add("hidden")
}

info.addEventListener("click",closeModal)