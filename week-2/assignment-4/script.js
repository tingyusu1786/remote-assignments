alert("test");

/*
--------------
Request 1: Click to Change Text
--------------
*/

const message = document.querySelector(".welcome");

message.addEventListener("click", () => {
  message.innerHTML = "<h1 class='welcome-msg'>Have a good time!</h1>";
})

/*
--------------
Request 2: Click to Show/Close Menu
--------------
*/

const navMore = document.getElementById('nav-more');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-side');

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
