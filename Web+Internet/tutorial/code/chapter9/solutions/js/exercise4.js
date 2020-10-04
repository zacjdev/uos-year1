"use strict";

// functions

function clearCanvas(context) {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawRandomLine(context, colour) {
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

var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var clearButton = document.getElementById("clearbutton");
var redButton = document.getElementById("redbutton");
var greenButton = document.getElementById("greenbutton");
var blueButton = document.getElementById("bluebutton");

// With anonymous functions, the context can be passed as a parameter to each of the functions
clearButton.addEventListener("click", function() { clearCanvas(context) });
redButton.addEventListener("click", function() { drawRandomLine(context, "rgb(255,0,0)") });
greenButton.addEventListener("click", function() { drawRandomLine(context, "rgb(0,255,0)") });
blueButton.addEventListener("click", function() { drawRandomLine(context, "rgb(0,0,255)") });