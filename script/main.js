
// to hide the navigation bars when scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos == 0) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("anchor-navbar").style.bottom = "10px";
  }else if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("anchor-navbar").style.bottom = "-30px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("anchor-navbar").style.bottom = "10px";
  }
  prevScrollpos = currentScrollPos;
}


// to the slide show 

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("fourth-box");
  let dots = document.getElementsByClassName("ss-box");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fourth-effect");
    console.log(n, " | ", slideIndex);
  }
  slides[slideIndex-1].classList.add("fourth-effect")
}




