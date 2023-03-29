const Home = document.querySelector(".global_contact");
const About = document.querySelector(".about-us");
const Global = document.querySelector(".globalStock");
const homeLine = document.querySelector(".home-line");
const aboutLine = document.querySelector(".about-line");
const globalLine = document.querySelector(".global-line");
const menue_icon = document.querySelector("#hero-menue-icon");
const menue     = document.querySelector(".menue");
const globalMenue = document.querySelector(".globalMenue");
const aboutMenue = document.querySelector(".aboutMenue");
const Glb_ct_menue = document.querySelector(".GlobalContactMenue");




var btm_nav_section = {Home:".home-line", About:".about-line", global:".global-line"};


/* global contact when mouse over and out of it*/
Home.addEventListener("mouseover", () => {
    homeLine.style.backgroundColor = "#D99F1F";
    Glb_ct_menue.style.transition =" display, 1s ease-in-out";
    Glb_ct_menue.style.display="block";
})

Home.addEventListener("mouseout", ()=>{
    homeLine.style.backgroundColor = "rgb(35 33 33)";
    Glb_ct_menue.style.display="none";
})



/* About when mouse over and out of it  */
About.addEventListener("mouseover", () => {
    aboutLine.style.backgroundColor = "#D99F1F";
    aboutMenue.style.display= "flex";
})

About.addEventListener("mouseout", ()=>{
    aboutLine.style.backgroundColor = "rgb(35 33 33)";
    aboutMenue.style.display= "none";
})

/* Global Stock when mouse is over and out of it  */

Global.addEventListener("mouseover", () => {
    globalLine.style.backgroundColor = "#D99F1F";
    globalMenue.style.display = "flex";
})

Global.addEventListener("mouseout", ()=>{
    globalLine.style.backgroundColor = "rgb(35 33 33)";
    globalMenue.style.display = "none";
})



/* toggle hero menue drop down */

menue_icon.addEventListener("click", function(){
    if (menue.getAttribute("data-expande") === "false"){
        menue.style.display = "block";
        menue.setAttribute("data-expande","true")
        menue_icon.setAttribute("src", "image/cancel-icon-01.png");
    }else{
        menue.style.display = "none";
        menue.setAttribute("data-expande","false")
        menue_icon.setAttribute("src", "image/menue-icon-hero-01.png");
    }
})