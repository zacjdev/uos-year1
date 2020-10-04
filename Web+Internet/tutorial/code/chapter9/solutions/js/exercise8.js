"use strict";

function changeTextStr() {
  // use ==, since I know both oossible values of textStr are string primitives
  if (textStr=="Hello") textStr = "Goodbye";
  else textStr = "Hello";
}

function drawText() {
  context.fillStyle = "rgb(0,0,255)";
  context.font = "24px sans-serif";
  context.fillText(textStr, x,y);
}

function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function update() {
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;
    
  x += dx;
  y += dy;
}

function draw() {
  console.log("draw");
  clear();
  drawText();
}

// animation frames
function nextFrame() {
  requestId = requestAnimationFrame(nextFrame);
  update();
  draw();
}

function start() {
  draw();
  nextFrame();
}

function stop() {
  if (requestId)
    cancelAnimationFrame(requestId);
}

// main program body
// program makes use of the following global variables
var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
var requestId;
var x=50, y=50, dx=2, dy=3;
var textStr = "Hello";

canvas.addEventListener('click', changeTextStr);
start();