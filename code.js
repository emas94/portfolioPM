// btnAbout = document.querySelector('.about');
// line = document.querySelector('.line');
// btnAbout.addEventListener("click", function(){
//   line.style.animation = "line 1 2s .5s linear both"

// })
$(document).ready(function () {

  $(".about").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".second").offset().top + 'px'
    }, 'slow');
  })
  $(".meetme").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".second").offset().top + 'px'
    }, 'slow');
  })
  $(".technologies").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".third").offset().top + 'px'
    }, 'slow');
  })
  $(".projects").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".fourth").offset().top + 'px'
    }, 'slow');
  })
  $(".contact").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".fifth").offset().top + 'px'
    }, 'slow');
  })
  $(".home").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".first").offset().top + 'px'
    }, 'slow');
  })
  $(".arrow").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".first").offset().top + 'px'
    }, 'slow');
  })


});
let navBAR = document.querySelector('nav');

window.addEventListener("scroll", function () {
  if (window.scrollY != 0) {
    navBAR.style.backgroundColor = "#000";
    navBAR.style.width = 100 + "vw";
    navBAR.style.opacity = 0.8
  } else {
    navBAR.style.backgroundColor = "transparent";
  }
  // navBAR.style.fontSize = 5 + "px";
})
let btnUP = document.querySelector('.meetme');
btnUP.addEventListener("click", function () {
  // Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  // return scrollTop;
  // return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // document.body.pageYOffset = 0;
  // window.scrollY = 100 + "vh" ;
})

let btnUP1 = document.querySelector('.arrow');

// btnUP1.addEventListener('click', function () {

//   document.documentElement.scrollTop = 0;
// })
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    btnUP1.style.opacity = 0;

  } else {
    btnUP1.style.opacity = 1;

  }
})

// let imgGabilift = document.querySelector('.gabiga');


// imgGabilift.addEventListener("mouseover", function () {
//   if ("mouseover") {
//     document.querySelector(".lala").style.opacity = 1;
//   } else {
//     document.querySelector(".lala").style.opacity = 0;
//   }
// })