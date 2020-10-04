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

function drawCircles(context, circles) {
  context.strokeStyle = "rgb(0,0,255)";
  for (var i=0; i<circles.length; ++i) {
    context.beginPath();
    context.arc(circles[i].x, circles[i].y, circles[i].r, 0, 2*Math.PI, true);
    context.stroke();
  }
}

// return index of circles or -1 if not contained
function contained(x,y, circles) {
  var result = -1;
  for (var i=0; i<circles.length; ++i) {
    var rx = x-circles[i].x;
    var ry = y-circles[i].y;
    var testR = rx*rx+ry*ry;  
    var rSquared = circles[i].r*circles[i].r;
    if (testR<rSquared) result=i;
  }
  return result;
}

function doSomething(evt, circles) {
  var pos = getMouseXY(evt);
  var inside = contained(pos.x, pos.y, circles);
  console.log("inside: " + inside);
  var str = "x, y, inside: "+pos.x+", "+pos.y+", "+inside;
  displayResult(str);
}

// main program
var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

var circles = new Array(3);
circles[0] = {x: 50, y: 50, r: 50};
circles[1] = {x: 200, y: 50, r: 50};
circles[2] = {x: 50, y: 200, r: 50};

drawCircles(context, circles);

canvas.addEventListener('click', function(evt) { doSomething(evt, circles); });