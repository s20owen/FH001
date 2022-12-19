// if adding more pictures/containers slideIndex needs updated [1] = only 1 slide container
const slideIndex = [1, 1, 1, 1];

/* class names in html file are slide-1 etc */
const slideId = ["slide-1", "slide-2", "slide-3", "slide-4"];

// call the showSlides function (1 refers to slide index, and the next number refers to the slideid index)
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";

  // Change image every 4 seconds
  setTimeout(function() { plusSlides(1, no); }, 4000); 
}


function greeting(){
  alert("Welcome " + document.forms["emailform"]["name"].value + "!" + " One of our representatives will contact you.");
}

function openNav(){
  const nav = document.getElementById("sideNav");
  const body = document.getElementById("body");
  body.style.overflow = "hidden";
  nav.style.width = "65%";

}

function closeNav(){
  const nav = document.getElementById("sideNav");
  const body = document.getElementById("body");
  body.style.overflow = "auto";
  nav.style.width = "0";
}