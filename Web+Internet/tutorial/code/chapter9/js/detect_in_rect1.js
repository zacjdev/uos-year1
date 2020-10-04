"use strict";

// functions

function getMouseXY(e) {
  var canvas = document.getElementById('canvas_example');
  var boundingRect = canvas.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  var w = (boundingRect.width-canvas.width)/2;
  var h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  // use clientX and clientY as getBoundingClientRect is used above
  var mx = Math.round(e.clientX-offsetX);
  var my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
}

function displayResult(str) {
  var outputArea = document.getElementById('output_area');
  var myElement = document.createElement("p");
  var textNode = document.createTextNode(str);
  myElement.appendChild(textNode);
  if (outputArea.firstChild)
    outputArea.replaceChild(myElement, outputArea.firstChild);
  else
    outputArea.appendChild(myElement);
}

function drawRectangle(context, rectangle) {
  context.fillStyle = "rgb(0,0,255)";
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
  context.fill();
}

// this could be replaced to check containment in any shape, e.g. a circle
function checkContained(x,y, rectangle) {
  return ((x>=rectangle.x)
          && (x<=rectangle.x+rectangle.w)
          && (y>=rectangle.y)
          && (y<=rectangle.y+rectangle.h));
}

function doSomething(evt, rectangle) {
  var pos = getMouseXY(evt);
  var inside = checkContained(pos.x, pos.y, rectangle);
  console.log("inside: " + inside);
  var str = "x, y, inside: "+pos.x+", "+pos.y+", "+inside;
  displayResult(str);
}

// main program
var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var rectangle = {x: 50, y: 50, w: 30, h: 70};
console.log(rectangle);
drawRectangle(context, rectangle);

canvas.addEventListener('click', function(evt) { doSomething(evt, rectangle); });