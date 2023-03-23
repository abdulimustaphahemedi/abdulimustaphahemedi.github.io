const about = document.querySelector("#about-text")
const aboutMenue = document.querySelector("#about-menue")
const aboutDiv = document.querySelector("#about");

about.addEventListener("mouseover", function(){
    aboutMenue.style.display="absolute";
    body.style.color = "red";
})

aboutDiv.addEventListener("mouseover", function(){
    aboutDiv.style.color="red";
    aboutMenue.style.display ="flex";
})

aboutMenue.addEventListener("mouseover", function(){
    aboutDiv.style.color = "blue";
})