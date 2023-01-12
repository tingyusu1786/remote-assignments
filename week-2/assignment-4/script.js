/*
--------------
Request 1: Click to Change Text
--------------
*/

const welcomeSection = document.querySelector(".welcome");
const welcomeMessage = document.querySelector(".welcome-msg")

welcomeSection.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a good time!";
})

/*
--------------
Request 2: Click to Show/Close Menu
--------------
*/

const navMore = document.querySelector('.nav-icon');
const sideMenu = document.querySelector('.side-menu');
const closeMenu = document.querySelector('#close-side');

navMore.addEventListener('click', () => { sideMenu.style.right = '0';
})

closeMenu.addEventListener('click', () => {
  sideMenu.style.right = 'calc(-50vw - 5px)';
})

/*
--------------
Request 3: Click to Show More Content Boxes
--------------
*/

const btnMore = document.getElementById('btn-more');
const boxMore = document.getElementById('box-more');

btnMore.addEventListener('click', () => {
  boxMore.style.display = 'grid';
})
