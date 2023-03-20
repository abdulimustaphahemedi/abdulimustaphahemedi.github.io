const language = document.querySelector("#language")
const languageItems = document.querySelector("#language-items")
const body = document.querySelector("body")
const languageType = document.querySelector(".list")

const search= document.querySelector("#search")
const searchBar = document.querySelector("#searchText")
const cancell = document.querySelector("#cancell")

language.addEventListener("click", function(){
    if(languageItems.style.display==="flex"){
        languageItems.style.display = "none"
    }else{
        languageItems.style.display = "flex"
    }
});


search.addEventListener("click", function(){

        
        if(searchBar.style.display === "none"){
            searchBar.style.display = "flex";
            search.style.display = "none";
        }else{
            searchBar.style.display = "none";
        }


   
})

cancell.addEventListener("click", function(){
    searchBar.style.display = "none";
    search.style.display = "flex";
})
