const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var  c = canvas.getContext('2d');
c.fillStyle = "blue";
c.fillRect(100,100,100,100);

c.fillStyle = "red";
c.fillRect(300,300,50,60);

// line

c.beginPath();
c.moveTo(50,300);
c.lineTo(60,70);
c.strokeStyle= "orange";
c.lineTo(80,80);
c.strokeStyle ="black";
c.stroke();