"use strict";

// functions

function clearCanvas(context) {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawTextAt(context, str, size) {
  console.log(str+", "+size);
  clearCanvas(context);
  context.fillStyle = "rgb(0,0,255)";
  context.font = size+"px sans-serif";
  context.fillText(str, 10,150);
}

function doSomething(context) {
  var str = "Hello";
  var size = 16;
  var str = document.getElementById('input_text').value;
  var size = document.getElementById('input_size').value;
  drawTextAt(context, str, size);
}

// main program body 

var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var displayButton = document.getElementById("displaybutton");
displayButton.addEventListener("click", function() { doSomething(context); });