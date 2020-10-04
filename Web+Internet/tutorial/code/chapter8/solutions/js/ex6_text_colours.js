"use strict";

// Author: Steve Maddock

// functions

function makeRed() {
  var p = document.getElementById('paragraph');
  console.log(p);
  console.log("Before: "+p.className);
  p.className = "red";
  console.log("After: "+p.className);
}

function makeBlue() {
  var p = document.getElementById('paragraph');
  console.log(p);
  console.log("Before: "+p.className);
  p.className = "blue";
  console.log("After: "+p.className);
}


// main program body

var b = document.getElementById('button_red');
b.addEventListener('click', makeRed, false);
b = document.getElementById('button_blue');
b.addEventListener('click', makeBlue, false);
