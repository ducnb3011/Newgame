var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (400 < currentScrollPos) {
    document.getElementById("leftpart").style.opacity = "1";
    document.getElementById("centerpart").style.opacity = "1";  
  }
  if (1200 < currentScrollPos) {
    document.getElementsByClassName("left2")[0].style.marginLeft = "-20px";
    document.getElementsByClassName("right2")[0].style.marginLeft = "-200px";
  }
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menubar").style.top = "0";
  } else {
    document.getElementById("menubar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
/*
var leftPart = document.getElementById("Reviews");
var rect = leftPart.getBoundingClientRect();
alert("Y: " + rect.y);
var currentScrollPos = window.pageYOffset;
alert(currentScrollPos);
*/

var intro = document.getElementsByClassName("intro")[0];
intro.volume = 0.1;
var btn = document.getElementsByClassName("myBtn")[0];
var introplay = true;
function playintro() {
    if (introplay == false) {
      intro.play();
      introplay = true;
      btn.innerHTML = "Pause Intro";
    } else {
      intro.pause();
      introplay = false;
      btn.innerHTML = "Play Intro";
    }
}

var imgwidth = document.getElementsByClassName("Gbox")[0].clientWidth;
var SlideGPage = document.getElementsByClassName("slide")[0];
var page = document.getElementsByClassName("page");
var Max = imgwidth * (page.length - 1);
var Length = 0;

function Next() {
  if(Length < Max) Length += imgwidth;
  else Length = 0;
  SlideGPage.style.marginLeft = '-' + Length + 'px'; 
}
function Back() {
  if (Length == 0) Length = Max;
  else Length -= imgwidth;
  SlideGPage.style.marginLeft = '-' + Length + 'px';
}

