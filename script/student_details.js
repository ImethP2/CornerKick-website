var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;
 if (prevScrollpos == 0) {
   document.getElementById("navbar").style.top = "0";
 }else if (prevScrollpos > currentScrollPos) {
   document.getElementById("navbar").style.top = "0";
 } else {
   document.getElementById("navbar").style.top = "-50px";
 }
 prevScrollpos = currentScrollPos;
}

//slide show js
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}