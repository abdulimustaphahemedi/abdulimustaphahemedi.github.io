const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.body.prepend(canvas);

const game = {grid:40};
canvas.setAttribute('width', game.grid*15);
canvas.setAttribute('height', game.grid*10);

canvas.style.border = "4px solid black";