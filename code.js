// btnAbout = document.querySelector('.about');
// line = document.querySelector('.line');
// btnAbout.addEventListener("click", function(){
//   line.style.animation = "line 1 2s .5s linear both"

// })

$('nav ul li a').on('click', function () {
  const goToSection = "." + $(this).attr('id');
  // console.log(goToSection);
  $('body, html').animate({
    scrollTop: $(goToSection).offset().top
  });
})
// $(document).ready(function () {

//   $(".about").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".second").offset().top + 'px'
//     }, 'slow');
//   })
//   $(".meetme").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".second").offset().top + 'px'
//     }, 'slow');
//   })
//   $(".skills").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".third").offset().top + 'px'
//     }, 'slow');
//   })
//   $(".projects").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".fourth").offset().top + 'px'
//     }, 'slow');
//   })
//   $(".contact").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".fifth").offset().top + 'px'
//     }, 'slow');
//   })
//   $(".home").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".first").offset().top + 'px'
//     }, 'slow');
//   })
//   $(".arrow").click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(".first").offset().top + 'px'
//     }, 'slow');
//   })


// });
let navBAR = document.querySelector('.navdesktop1');

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

const homeBTN = document.querySelector(".mobile .home");
const aboutBTN = document.querySelector(".mobile .about");
const skillsBTN = document.querySelector(".mobile .skills");
const projectBTN = document.querySelector(".mobile .projects");
const contactBTN = document.querySelector(".mobile .contact");

burger.addEventListener('click', function () {
  burger.classList.toggle("active")
  burger1.classList.toggle("active")

  contactBTN.classList.remove("active");
  skillsBTN.classList.remove("active");
  aboutBTN.classList.remove("active");
  homeBTN.classList.remove("active");
  projectBTN.classList.remove("active");

})
const buttonsMobile = [homeBTN, aboutBTN, skillsBTN, projectBTN, contactBTN];

buttonsMobile[0].addEventListener('click', function () {
  burger.classList.remove("active");
  burger1.classList.remove("active")
})
buttonsMobile[1].addEventListener('click', function () {
  burger.classList.remove("active");
  burger1.classList.remove("active")
})
buttonsMobile[2].addEventListener('click', function () {
  burger.classList.remove("active");
  burger1.classList.remove("active")
})
buttonsMobile[3].addEventListener('click', function () {
  burger.classList.remove("active");
  burger1.classList.remove("active")
})
buttonsMobile[4].addEventListener('click', function () {
  burger.classList.remove("active");
  burger1.classList.remove("active")
})
// const buttonMenu = document.querySelectorAll("a");

// buttonMenu.addEventListener('click', function () {
//   burger.classList.toggle("active")
//   burger1.classList.toggle("active")

// })



// homeBTN.addEventListener("click", function () {
//   homeBTN.classList.toggle("active");
//   aboutBTN.classList.remove("active");
//   skillsBTN.classList.remove("active");
//   projectBTN.classList.remove("active");
//   contactBTN.classList.remove("active");
// })
// aboutBTN.addEventListener("click", function () {
//   aboutBTN.classList.toggle("active");
//   homeBTN.classList.remove("active");
//   skillsBTN.classList.remove("active");
//   projectBTN.classList.remove("active");
//   contactBTN.classList.remove("active");

// })

// skillsBTN.addEventListener("click", function () {
//   skillsBTN.classList.toggle("active");
//   aboutBTN.classList.remove("active");
//   homeBTN.classList.remove("active");
//   projectBTN.classList.remove("active");
//   contactBTN.classList.remove("active");
// })
// projectBTN.addEventListener("click", function () {
//   projectBTN.classList.toggle("active");
//   skillsBTN.classList.remove("active");
//   aboutBTN.classList.remove("active");
//   homeBTN.classList.remove("active");
//   contactBTN.classList.remove("active");
// })
// contactBTN.addEventListener("click", function () {
//   contactBTN.classList.toggle("active");
//   skillsBTN.classList.remove("active");
//   aboutBTN.classList.remove("active");
//   homeBTN.classList.remove("active");
//   projectBTN.classList.remove("active");

// })

const homeBTND = document.querySelector(".navdesktop .home");
const aboutBTND = document.querySelector(".navdesktop .about");
const skillsBTND = document.querySelector(".navdesktop .skills");
const projectBTND = document.querySelector(".navdesktop .projects");
const contactBTND = document.querySelector(".navdesktop .contact");

// homeBTND.addEventListener("click", function () {
//   homeBTND.classList.add("active");
//   aboutBTND.classList.remove("active");
//   skillsBTND.classList.remove("active");
//   projectBTND.classList.remove("active");
//   contactBTND.classList.remove("active");
// })
// aboutBTND.addEventListener("click", function () {
//   aboutBTND.classList.add("active");
//   homeBTND.classList.remove("active");
//   skillsBTND.classList.remove("active");
//   projectBTND.classList.remove("active");
//   contactBTND.classList.remove("active");

// })

// skillsBTND.addEventListener("click", function () {
//   skillsBTND.classList.add("active");
//   aboutBTND.classList.remove("active");
//   homeBTND.classList.remove("active");
//   projectBTND.classList.remove("active");
//   contactBTND.classList.remove("active");
// })
// projectBTND.addEventListener("click", function () {
//   projectBTND.classList.add("active");
//   skillsBTND.classList.remove("active");
//   aboutBTND.classList.remove("active");
//   homeBTND.classList.remove("active");
//   contactBTND.classList.remove("active");
// })
// contactBTND.addEventListener("click", function () {
//   contactBTND.classList.add("active");
//   skillsBTND.classList.remove("active");
//   aboutBTND.classList.remove("active");
//   homeBTND.classList.remove("active");
//   projectBTND.classList.remove("active");

// })

const popup1 = document.querySelector('.modal-wrap-p1');
const buttonP1 = document.querySelector('.projectArea .project1 button');
const close1 = document.querySelector('.modal-wrap-p1 .close');
buttonP1.addEventListener('click', function () {
  popup1.classList.toggle("active");

  navBAR.style.display = "none";
  btnUP1.style.display = "none";

})
close1.addEventListener('click', function () {
  popup1.classList.toggle("active");
  navBAR.style.display = "block";
  btnUP1.style.display = "block";

})



const popup2 = document.querySelector('.modal-wrap-p2');
const buttonP2 = document.querySelector('.projectArea .project2 button');
const close2 = document.querySelector('.modal-wrap-p2 .close');
buttonP2.addEventListener('click', function () {
  popup2.classList.toggle("active");

  navBAR.style.display = "none";
  btnUP1.style.display = "none";

})
close2.addEventListener('click', function () {
  popup2.classList.toggle("active");
  navBAR.style.display = "block";
  btnUP1.style.display = "block";

})
const popup3 = document.querySelector('.modal-wrap-p3');
const buttonP3 = document.querySelector('.projectArea .project3 button');
const close3 = document.querySelector('.modal-wrap-p3 .close');
buttonP3.addEventListener('click', function () {
  popup3.classList.toggle("active");

  navBAR.style.display = "none";
  btnUP1.style.display = "none";
})
close3.addEventListener('click', function () {
  popup3.classList.toggle("active");
  navBAR.style.display = "block";
  btnUP1.style.display = "block";
})

// const line = document.querySelectorAll('.line');
// const fourth = document.querySelector('.fourth');
// document.addEventListener('scroll', function () {
//   if (document.scrollBy > fourth.offsetTop) {
//     for (var i = 0; i < line.length; i++)
//       line[i].classList.add("start");
//   } else {
//     for (var i = 0; i < line.length; i++)
//       line[i].classList.add("back");
//   }
// })
function startLine() {
  const line = document.querySelectorAll('.line');
  const first = document.querySelector('.first').clientHeight;
  const second = document.querySelector('.second').clientHeight;
  const third = document.querySelector('.third').clientHeight;
  const fourth = document.querySelector('.fourth').clientHeight;
  const fifth = document.querySelector('.fifth').clientHeight;
  const spaceBetweemSecondAndFirst = document.querySelector('.second').offsetTop;
  const spaceBetweemSecondAndSecond = document.querySelector('.third').offsetTop;
  const spaceBetweemSecondAndThird = document.querySelector('.fourth').offsetTop;
  const spaceBetweemSecondAndFourth = document.querySelector('.fifth').offsetTop;

  // const fourth = document.querySelector('.fourth');
  const scrollSize = window.scrollY;

  if (scrollSize >= first) {

    line[0].classList.add("start");
    line[0].classList.remove("back");
    //   homeBTND.classList.add("active");
    //   aboutBTND.classList.remove("active");
    //   skillsBTND.classList.remove("active");
    //   projectBTND.classList.remove("active");
    //   contactBTND.classList.remove("active");
  } else {
    line[0].classList.remove("start");
    line[0].classList.add("back");
  }
  if (scrollSize >= second + spaceBetweemSecondAndFirst) {
    line[1].classList.add("start");
    line[1].classList.remove("back");
  } else {
    line[1].classList.remove("start");
    line[1].classList.add("back");
  }
  if (scrollSize >= third + spaceBetweemSecondAndSecond) {
    line[2].classList.add("start");
    line[2].classList.remove("back");
  } else {
    line[2].classList.remove("start");
    line[2].classList.add("back");
  }
  if (scrollSize >= fourth + spaceBetweemSecondAndThird) {
    line[3].classList.add("start");
    line[3].classList.remove("back");
  } else {
    line[3].classList.remove("start");
    line[3].classList.add("back");
  }
  if (scrollSize >= fifth + spaceBetweemSecondAndFourth) {
    line[4].classList.add("start");
    line[4].classList.remove("back");
  } else {
    // line[4].classList.remove("start");
    // line[4].classList.add("back");
  }
  // console.log(fifth)

}


window.addEventListener('scroll', startLine)


function lightSection() {

  const first = document.querySelector('.first').clientHeight;
  const second = document.querySelector('.second').clientHeight;
  const third = document.querySelector('.third').clientHeight;
  const fourth = document.querySelector('.fourth').clientHeight;
  const fifth = document.querySelector('.fifth').clientHeight;

  const spaceBetweemSecondAndFirst = document.querySelector('.second').offsetTop;
  const spaceBetweemSecondAndSecond = document.querySelector('.third').offsetTop;
  const spaceBetweemSecondAndThird = document.querySelector('.fourth').offsetTop;
  const spaceBetweemSecondAndFourth = document.querySelector('.fifth').offsetTop;

  // const fourth = document.querySelector('.fourth');
  const scrollSize = window.scrollY;
  if (scrollSize < first) {

    homeBTND.classList.add("active");
    aboutBTND.classList.remove("active");
    aboutBTND.classList.remove("active");
    skillsBTND.classList.remove("active");
    projectBTND.classList.remove("active");
    contactBTND.classList.remove("active");

  } else if (scrollSize < second + spaceBetweemSecondAndFirst) {

    aboutBTND.classList.add("active");
    homeBTND.classList.remove("active");
    skillsBTND.classList.remove("active");

  } else if (scrollSize < third + spaceBetweemSecondAndSecond) {
    skillsBTND.classList.add("active");

    aboutBTND.classList.remove("active");
    homeBTND.classList.remove("active");
    projectBTND.classList.remove("active");
    contactBTND.classList.remove("active");

  } else if (scrollSize < (fourth + spaceBetweemSecondAndThird)) {

    projectBTND.classList.add("active");

    skillsBTND.classList.remove("active");
    aboutBTND.classList.remove("active");
    homeBTND.classList.remove("active");
    contactBTND.classList.remove("active");

  } else {
    contactBTND.classList.add("active");
    skillsBTND.classList.remove("active");
    aboutBTND.classList.remove("active");
    homeBTND.classList.remove("active");
    projectBTND.classList.remove("active");

  }
}

window.addEventListener('scroll', lightSection);


//mobile
function lightSectionMobile() {

  const first = document.querySelector('.first').clientHeight;
  const second = document.querySelector('.second').clientHeight;
  const third = document.querySelector('.third').clientHeight;
  const fourth = document.querySelector('.fourth').clientHeight;
  const fifth = document.querySelector('.fifth').clientHeight;

  const spaceBetweemSecondAndFirst = document.querySelector('.second').offsetTop;
  const spaceBetweemSecondAndSecond = document.querySelector('.third').offsetTop;
  const spaceBetweemSecondAndThird = document.querySelector('.fourth').offsetTop;
  const spaceBetweemSecondAndFourth = document.querySelector('.fifth').offsetTop;


  // const fourth = document.querySelector('.fourth');
  const scrollSize = window.scrollY;
  if (scrollSize < first) {

    homeBTN.classList.add("active");
    aboutBTN.classList.remove("active");
    aboutBTN.classList.remove("active");
    skillsBTN.classList.remove("active");
    projectBTN.classList.remove("active");
    contactBTN.classList.remove("active");


  } else if (scrollSize < second + spaceBetweemSecondAndFirst) {

    aboutBTN.classList.add("active");
    homeBTN.classList.remove("active");
    skillsBTN.classList.remove("active");


  } else if (scrollSize < third + spaceBetweemSecondAndSecond) {
    skillsBTN.classList.add("active");

    aboutBTN.classList.remove("active");
    homeBTN.classList.remove("active");
    projectBTN.classList.remove("active");
    contactBTN.classList.remove("active");

  } else if (scrollSize < fourth + spaceBetweemSecondAndThird) {
    projectBTN.classList.add("active");

    skillsBTN.classList.remove("active");
    aboutBTN.classList.remove("active");
    homeBTN.classList.remove("active");
    contactBTN.classList.remove("active");

  } else {
    contactBTN.classList.add("active");
    skillsBTN.classList.remove("active");
    aboutBTN.classList.remove("active");
    homeBTN.classList.remove("active");
    projectBTN.classList.remove("active");

  }
}

window.addEventListener('scroll', lightSectionMobile);

//animate data in section
function addData() {

  const first = document.querySelector('.first').clientHeight;
  const second = document.querySelector('.second').clientHeight;
  const third = document.querySelector('.third').clientHeight;
  const fourth = document.querySelector('.fourth').clientHeight;
  const fifth = document.querySelector('.fifth').clientHeight;
  const tech = document.querySelector('.tech');
  const project = document.querySelector('.projectArea');
  const contact = document.querySelector('.contactcontent');
  const spaceBetweemSecondAndFirst = document.querySelector('.second').offsetTop;
  const spaceBetweemSecondAndSecond = document.querySelector('.third').offsetTop;
  const spaceBetweemSecondAndThird = document.querySelector('.fourth').offsetTop;
  const spaceBetweemSecondAndFourth = document.querySelector('.fifth').offsetTop;

  // const fourth = document.querySelector('.fourth');
  const scrollSize = window.scrollY;
  if (scrollSize < first) {

    contact.classList.remove("active");
    tech.classList.remove("active");
    project.classList.remove("active");
  } else if (scrollSize < second / 2 + spaceBetweemSecondAndFirst) {


  } else if (scrollSize < third / 2 + spaceBetweemSecondAndSecond) {

    tech.classList.add("active");


  } else if (scrollSize < (fourth / 2 + spaceBetweemSecondAndThird)) {

    project.classList.add("active");

  } else {
    contact.classList.add("active");

  }
}

window.addEventListener('scroll', addData);


const languageButton = document.querySelector('.language');
let languageFlagPL = document.querySelector('.language img:nth-of-type(1)');
let languageFlagEN = document.querySelector('.language img:nth-of-type(2)');
let i = 0;

function changeLanguage() {
  languageFlagEN.classList.toggle("active");
  languageFlagPL.classList.toggle("active");
}




languageButton.addEventListener('click', changeLanguage);

// change language
const homeMenu = document.querySelector(' .home span:nth-of-type(2) ');
const aboutMenu = document.querySelector('.about span:nth-of-type(2)');
const skillsMenu = document.querySelector('.skills span:nth-of-type(2)');
const projectsMenu = document.querySelector('.projects span:nth-of-type(2)');
const contactMenu = document.querySelector('.contact span:nth-of-type(2)');
const welcome1 = document.querySelector('.welcome p');
const welcome2 = document.querySelector('.welcome p span');
const meetme = document.querySelector('.meetme');

function subText() {
  if (languageFlagEN.classList.contains("active") == true) {
    homeMenu.textContent = "Strona Główna";
    aboutMenu.textContent = "O mnie";
    skillsMenu.textContent = "Umiejętności";
    projectsMenu.textContent = "Projekty";
    contactMenu.textContent = "Kontakt";
    welcome1.textContent = "Witaj w moim";
    welcome2.textContent = "Świecie";
    meetme.textContent = "Poznaj mnie";
  } else {
    homeMenu.textContent = "Home";
    aboutMenu.textContent = "About me";
    skillsMenu.textContent = "Skills";
    projectsMenu.textContent = "Projects";
    contactMenu.textContent = "Contact";
    welcome1.textContent = "Welcome in my";
    welcome2.textContent = "WORLD";
    meetme.textContent = "Meet me"
  }
}
languageButton.addEventListener('click', subText);