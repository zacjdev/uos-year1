"use strict";

var circle = {
  x: 50,
  y: 50,
  r: 30,
  draw: function(context) {
    context.strokeStyle = "rgb(0,0,255)";
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
    context.stroke();
  }
};

var movement = {
  timePeriod: 500,  // 0.5 seconds
  startTime: 0,
  elapsedTime: 0,
  startPos: 0,
  endPos: 0
};

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

function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function update(circle, movement) {
  var gx = movement.endPos.x - movement.startPos.x;
  var gy = movement.endPos.y - movement.startPos.y;
  var t = movement.elapsedTime/movement.timePeriod;
  if (t>1) t=1;
  var x = movement.startPos.x + t*gx;
  var y = movement.startPos.y + t*gy;
  circle.x = x;
  circle.y = y;
}

function draw(circle) {
  clear();
  circle.draw(context);
}

// animation frames
function nextFrame(circle, movement) {
  var date = new Date();
  var now = date.getTime();
  movement.elapsedTime = now-movement.startTime;
  requestId = requestAnimationFrame(function() {
    nextFrame(circle, movement);
  });
  update(circle, movement);
  draw(circle);
  if (movement.elapsedTime > movement.timePeriod) {
    stop();
  }
}

function start(circle, movement) {
  draw(circle);
  nextFrame(circle, movement);
}

function stop() {
  if (requestId)
    cancelAnimationFrame(requestId);
}

function doSomething(evt, circle) {
  var date = new Date();
  movement.startTime = date.getTime();
  movement.startPos = {x: circle.x, y: circle.y};
  movement.endPos = getMouseXY(evt);
  start(circle, movement);
}

// main program body
// program makes use of the following global variables
var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
var requestId;

circle.draw(context);

canvas.addEventListener('click', function(evt) { doSomething(evt, circle); });