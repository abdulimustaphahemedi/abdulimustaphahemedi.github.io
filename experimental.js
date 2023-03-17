const language = document.querySelector("#language")
const languageItems = document.querySelector("#language-items")
const body = document.querySelector("main")
const languageType = document.querySelector(".list")

language.addEventListener("click", function(){
    if(languageItems.style.display==="flex"){
        languageItems.style.display = "none"
    }else{
        languageItems.style.display = "flex"
    }
});

body.addEventListener("mouseover", function(){
    languageItems.style.display="none"
});