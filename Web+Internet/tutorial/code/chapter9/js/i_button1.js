"use strict";

// functions

function clearCanvas() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawRandomLine() {
  context.strokeStyle = "rgb(0,0,255)";
  var x1 = Math.random()*WIDTH;
  var y1 = Math.random()*HEIGHT;
  var x2 = Math.random()*WIDTH;
  var y2 = Math.random()*HEIGHT;
  context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
  context.stroke();
}

// main program body 

var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var clearButton = document.getElementById("clearbutton");
var drawButton = document.getElementById("drawbutton");

clearButton.addEventListener("click", clearCanvas);
drawButton.addEventListener("click", drawRandomLine);

