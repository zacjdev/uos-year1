"use strict";

// main program

var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");

context.strokeStyle = "rgb(0,0,255)";
context.lineWidth = "1";
context.beginPath();
  context.rect(50,50,50,50);
context.stroke();
context.beginPath();
  context.moveTo(50,50);
  context.lineTo(100,100);
  context.moveTo(100,50);
  context.lineTo(50,100);
context.stroke();