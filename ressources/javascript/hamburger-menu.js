const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu')
const logo = document.querySelector('.logo')



var x = window.matchMedia("(max-width: 900px)")


hamburgerMenu.addEventListener('click', function(){
  navbar.style.display="flex";
  hamburgerMenu.style.display="none";
  closeMenu.style.display="block";
  

})

closeMenu.addEventListener('click',function(){
  navbar.style.display="none";
  hamburgerMenu.style.display="block";
  closeMenu.style.display="none";
})