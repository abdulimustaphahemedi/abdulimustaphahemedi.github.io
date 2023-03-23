const move = document.querySelector("#move");
const body = document.querySelector("body");
const car = document.querySelector(".car");
const surface = document.querySelector(".surface");
const Stop = document.querySelector("#stop");
const Flashlight = document.querySelector("flashlight");
const image = document.querySelector(".car-image");


move.addEventListener("click", function(){
    car.style.animation = "suspension 1s linear infinite";
    surface.style.animation="moveright 6s linear infinite";
});

Stop.addEventListener("click", function(){
    car.style.animation = "stop 1s linear infinite";
    surface.style.animation="stop 6s linear infinite";
})

Flashlight.addEventListener("click", function(){
    image.style.src ="../assets/Img_06.png";
})