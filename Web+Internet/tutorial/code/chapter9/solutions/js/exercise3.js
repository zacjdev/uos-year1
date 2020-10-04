"use strict";

// functions

function draw(context, myImages) {
  var x = 0;
  var y = 0;
  for (var i=0; i<myImages.length; ++i) {
    context.drawImage(myImages[i], 0,0, myImages[i].width, myImages[i].height,
                      x+i*50, y+i*50, 50,50);
  }
}

function loadImages(context, filenames, callback) {
  var myImages = new Array(filenames.length);
  var imageCount = 0;
  for (var i=0; i<filenames.length; ++i) {
    myImages[i] = new Image();
    myImages[i].onload = function() {
      imageCount++; 
      if (imageCount==filenames.length) callback(context, myImages);
    }
    myImages[i].src = filenames[i];
  }
}

function initAndStart(context) {
  var names = ["images/image1.jpg", "images/image2.jpg", "images/steve.jpg",
               "images/tpot1.jpg", "images/balls.jpg"];
  loadImages(context, names, draw);
}
  
// main program body
// global variables
var canvas = document.getElementById("example");;
var context = canvas.getContext("2d");;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
// start
initAndStart(context);