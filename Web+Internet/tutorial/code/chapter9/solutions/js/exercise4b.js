"use strict";

// functions

function clearCanvas() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawRandomLine(colour) {
  context.strokeStyle = colour;
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
// In this example the context is treated as a global variable
// so does not need passing as a parameter to each function

var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var clearButton = document.getElementById("clearbutton");
var redButton = document.getElementById("redbutton");
var greenButton = document.getElementById("greenbutton");
var blueButton = document.getElementById("bluebutton");

clearButton.addEventListener("click", clearCanvas);
redButton.addEventListener("click", function() { drawRandomLine("rgb(255,0,0)") });
greenButton.addEventListener("click", function() { drawRandomLine("rgb(0,255,0)") });
blueButton.addEventListener("click", function() { drawRandomLine("rgb(0,0,255)") });