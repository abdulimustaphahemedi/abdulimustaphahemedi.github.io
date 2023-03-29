const Home = document.querySelector(".Home");
const About = document.querySelector(".about-us");
const Global = document.querySelector(".globalStock");
const homeLine = document.querySelector(".home-line");
const aboutLine = document.querySelector(".about-line");
const globalLine = document.querySelector(".global-line");



var btm_nav_section = {Home:".home-line", About:".about-line", global:".global-line"};


/* Home when mouse over and out of it*/
Home.addEventListener("mouseover", () => {
    homeLine.style.backgroundColor = "#D99F1F";
})

Home.addEventListener("mouseout", ()=>{
    homeLine.style.backgroundColor = "rgb(35 33 33)";
})



/* About when mouse over and out of it  */
About.addEventListener("mouseover", () => {
    aboutLine.style.backgroundColor = "#D99F1F";
})

About.addEventListener("mouseout", ()=>{
    aboutLine.style.backgroundColor = "rgb(35 33 33)";
})

/* Global Stock when mouse is over and out of it  */

Global.addEventListener("mouseover", () => {
    globalLine.style.backgroundColor = "#D99F1F";
})

Global.addEventListener("mouseout", ()=>{
    globalLine.style.backgroundColor = "rgb(35 33 33)";
})