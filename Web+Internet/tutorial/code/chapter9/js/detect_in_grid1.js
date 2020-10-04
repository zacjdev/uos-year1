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

function drawGrid(context) {
  context.strokeStyle = "rgb(100,100,100)";
  context.lineWidth = "1";
  for (var x=0; x<CANVAS_WIDTH; x+=CELL_WIDTH) {
    context.beginPath();
    context.moveTo(x,0);
    context.lineTo(x,CANVAS_HEIGHT);
    context.stroke();
  }
  for (var y=0; y<CANVAS_HEIGHT; y+=CELL_HEIGHT) {
    context.beginPath();
    context.moveTo(0,y);
    context.lineTo(CANVAS_WIDTH, y);
    context.stroke();
  }
}

function whichGridCell(x, y) {
  if (x<0) x = 0;
  if (y<0) y = 0;
  if (x>=CANVAS_WIDTH) x = CANVAS_WIDTH-1;
  if (y>=CANVAS_HEIGHT) y = CANVAS_HEIGHT-1;
  var gx = Math.floor(x/CELL_WIDTH);
  var gy = Math.floor(y/CELL_HEIGHT);
  // need to be careful here
  // x, y on screen is j,i in grid
  return {j: gx, i: gy};
}

function doSomething(evt) {
  var pos = getMouseXY(evt);
  var str = "x, y: "+pos.x+", "+pos.y;
  var gridCell = whichGridCell(pos.x, pos.y);
  str += "  grid cell i, j: "+gridCell.i+", "+gridCell.j;
  displayResult(str);
}

// main program
var canvas = document.getElementById('canvas_example');
var context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

// divide canvas into 4x4 grid
const NUM_CELLS = 4;
const CELL_WIDTH = CANVAS_WIDTH/NUM_CELLS;
const CELL_HEIGHT = CANVAS_HEIGHT/NUM_CELLS;
drawGrid(context);

canvas.addEventListener('click', doSomething);