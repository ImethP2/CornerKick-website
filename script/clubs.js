
//for hide the navigation bar when scrolling
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
//for the slide show
document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("players");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
    console.log(slideIndex);
    }
  });
  
//to open the website navigation overlay
function openNav() {
    document.getElementById("site-nav").style.width = "100%";
  }
  
//to close the website navigation overlay
  function closeNav() {
    document.getElementById("site-nav").style.width = "0%";
  }