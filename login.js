let register = document.querySelector(".register--info")
let  login = document.querySelector(".login--info")
let chooseLogin = document.querySelector(".choose-login")
let chooseRegister = document.querySelector(".choose-register")



const loginNow = () =>{
    register.classList.add("hidden")
    login.classList.remove("hidden")
}

chooseLogin.addEventListener("click",loginNow)


const registerNow = () =>{
    login.classList.add("hidden")
    register.classList.remove("hidden")
}
chooseRegister.addEventListener("click",registerNow)