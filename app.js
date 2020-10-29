var slideIndex = 1;
var time = 6000;
var click=0;

showSlide(slideIndex);


function plusSlides(n){
  click++;

showSlide(slideIndex += n);

}


function currentSlide(n) {
click++;
showSlide(slideIndex = n);

}


function showSlide(n){

var i;

var slides = document.getElementsByClassName("myslides");

var dots = document.getElementsByClassName("dots");

if (n > slides.length) { slideIndex = 1};

if (n < 1) { slideIndex = slides.length};

for (i=0;i<slides.length;i++) {

slides[i].style.display = "none";

};

for (i=0;i<dots.length;i++) {

dots[i].className = dots[i].className.replace(" active","");

};

slides[slideIndex-1].style.display = "block";

dots[slideIndex-1].className += " active";

if(click==0)
{
setTimeout('plusSlides(1)', time);
}

}


$(document).ready(function() {
var NavY = $('.panel_glowny').offset().top;

var stickyNav = function(){
var ScrollY = $(window).scrollTop();

if (ScrollY > NavY) {
  $('.panel_glowny').addClass('sticky');
} else {
  $('.panel_glowny').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
  stickyNav();
});
});
