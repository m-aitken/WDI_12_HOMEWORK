var catImg = document.querySelector('img');
var startBtn = document.getElementById('startButton');
var fastBtn = document.getElementById('fastButton');
var stopBtn = document.getElementById('stopButton');
var resetBtn = document.getElementById('resetButton');

var movePixels = 20;

var walk = function () {
  intervalID = setInterval(trip, 200);
};

var fast = function () {
  intervalID = setInterval(trip, 80);
};

var stop = function () {
  clearInterval(intervalID);
};

var reset = function () {
  catImg.style.left = '0px';
};

  // var i = 0;
  // var direction = 1;
  
var trip = function () {
  var currentLeft = parseInt(catImg.style.left);
  var currentRight = parseInt(catImg.style.right);

//   if (i <= 0) {
//     direction = 1;
//     catImg.style.left = (currentLeft + movePixels) + 'px';
//   } else if (i >= (window.innerWidth - catImg.width)) {
//     direction = -1;
//     catImg.style.left = (currentLeft - movePixels) + 'px';
//   } 
// }; 
// i += direction;

  if (currentLeft < (window.innerWidth-catImg.width)) {
    catImg.style.left = (currentLeft + movePixels) + 'px';
  } else if (currentLeft > (window.innerWidth-catImg.width)) {
    catImg.style.left = (currentLeft - movePixels) + 'px';
  }
}; 


startBtn.addEventListener('click', walk);

fastBtn.addEventListener('click', fast);

stopBtn.addEventListener('click', stop); 

resetBtn.addEventListener('click', reset); 