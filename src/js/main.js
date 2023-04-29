const burgerBtn = document.querySelector('#burger');
const navMenu = document.querySelector(".header .header-content .nav-menu");

// Event Listener

burgerBtn.addEventListener("click", burgerActive);

// functions

function burgerActive () {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}


