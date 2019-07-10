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
  $(".skills").click(function (event) {
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

const burger = document.querySelector(".navmobile")
const burger1 = document.querySelector(".mobile")

burger.addEventListener('click', function () {
  burger.classList.toggle("active")
  burger1.classList.toggle("active")

  contactBTN.classList.remove("active");
  skillsBTN.classList.remove("active");
  aboutBTN.classList.remove("active");
  homeBTN.classList.remove("active");
  projectBTN.classList.remove("active");

})
// const buttonMenu = document.querySelectorAll("a");

// buttonMenu.addEventListener('click', function () {
//   burger.classList.toggle("active")
//   burger1.classList.toggle("active")

// })

const homeBTN = document.querySelector(".mobile .home");
const aboutBTN = document.querySelector(".mobile .about");
const skillsBTN = document.querySelector(".mobile .skills");
const projectBTN = document.querySelector(".mobile .projects");
const contactBTN = document.querySelector(".mobile .contact");

homeBTN.addEventListener("click", function () {
  homeBTN.classList.toggle("active");
  aboutBTN.classList.remove("active");
  skillsBTN.classList.remove("active");
  projectBTN.classList.remove("active");
  contactBTN.classList.remove("active");
})
aboutBTN.addEventListener("click", function () {
  aboutBTN.classList.toggle("active");
  homeBTN.classList.remove("active");
  skillsBTN.classList.remove("active");
  projectBTN.classList.remove("active");
  contactBTN.classList.remove("active");

})

skillsBTN.addEventListener("click", function () {
  skillsBTN.classList.toggle("active");
  aboutBTN.classList.remove("active");
  homeBTN.classList.remove("active");
  projectBTN.classList.remove("active");
  contactBTN.classList.remove("active");
})
projectBTN.addEventListener("click", function () {
  projectBTN.classList.toggle("active");
  skillsBTN.classList.remove("active");
  aboutBTN.classList.remove("active");
  homeBTN.classList.remove("active");
  contactBTN.classList.remove("active");
})
contactBTN.addEventListener("click", function () {
  contactBTN.classList.toggle("active");
  skillsBTN.classList.remove("active");
  aboutBTN.classList.remove("active");
  homeBTN.classList.remove("active");
  projectBTN.classList.remove("active");

})

const homeBTND = document.querySelector(".navdesktop .home");
const aboutBTND = document.querySelector(".navdesktop .about");
const skillsBTND = document.querySelector(".navdesktop .skills");
const projectBTND = document.querySelector(".navdesktop .projects");
const contactBTND = document.querySelector(".navdesktop .contact");

homeBTND.addEventListener("click", function () {
  homeBTND.classList.add("active");
  aboutBTND.classList.remove("active");
  skillsBTND.classList.remove("active");
  projectBTND.classList.remove("active");
  contactBTND.classList.remove("active");
})
aboutBTND.addEventListener("click", function () {
  aboutBTND.classList.add("active");
  homeBTND.classList.remove("active");
  skillsBTND.classList.remove("active");
  projectBTND.classList.remove("active");
  contactBTND.classList.remove("active");

})

skillsBTND.addEventListener("click", function () {
  skillsBTND.classList.add("active");
  aboutBTND.classList.remove("active");
  homeBTND.classList.remove("active");
  projectBTND.classList.remove("active");
  contactBTND.classList.remove("active");
})
projectBTND.addEventListener("click", function () {
  projectBTND.classList.add("active");
  skillsBTND.classList.remove("active");
  aboutBTND.classList.remove("active");
  homeBTND.classList.remove("active");
  contactBTND.classList.remove("active");
})
contactBTND.addEventListener("click", function () {
  contactBTND.classList.add("active");
  skillsBTND.classList.remove("active");
  aboutBTND.classList.remove("active");
  homeBTND.classList.remove("active");
  projectBTND.classList.remove("active");

})