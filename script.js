const slides = document.querySelectorAll('.slide');
const keys = document.querySelectorAll('.key');
let currentSlide = 1;
// script for image slider manual navigations
const manualNav = function (manual){
slides.forEach((slide) => {
    slide.classList.remove('active');} )  
    keys.forEach((key) => {
        key.classList.remove('active'); } )
    slides[manual].classList.add('active');
    keys[manual].classList.add('active');
}
keys.forEach((key, i) => { 
    key.addEventListener("click", () =>{
    manualNav(i);
    currentSlide = i;
} );
});    
// script for auto images slides
const repeat = function (activeClass){
    let active = document.getElementsByClassName('active')
    let i = 1

    const repeater = () => {
        setTimeout(function(){
        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
     });

            slides[i].classList.add('active')
            keys[i].classList.add('active')
            i++;
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 6100);
    }
    repeater();
}
repeat();

var elements = document.getElementsByClassName("child");
var i;
// Four images side by side
// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}
// Add active class to the current button (highlight it)
var top = document.getElementById("myHeader");
var press = top.getElementsByClassName("press");
for (var i = 0; i < btn.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


