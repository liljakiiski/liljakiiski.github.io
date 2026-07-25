var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
});