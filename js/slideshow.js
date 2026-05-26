/* CREDITS: https://www.w3schools.com/HOWTO/howto_js_slideshow.asp*/
let slideIndex = [1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

updateSizes();

$(window).resize(function() {
  updateSizes();
});

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);

  if (n > x.length) {
    slideIndex[no] = 1
  }

  if (n < 1) {
    slideIndex[no] = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no]-1].style.display = "block";
}

/* 
  Make height of div equal to height... by calculations!!
*/
function updateSizes(){
  console.log('running updateSizes');
  let x = document.getElementsByClassName("slideshow-container");
  let width = x[0].offsetWidth;

  for (i = 0; i < x.length; i++) {
    x[i].style.height = width + "px";

  }

  let y = document.getElementsByClassName("slide-img")
  console.log(y);

  for (i = 0; i < y.length; i++) {
    y[i].style.height = width + "px";

  }
}