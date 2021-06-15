const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const logo = document.querySelector('.logo');

openMenu.addEventListener('click', function() {
    mainMenu.style.display = 'flex';
    openMenu.style.opacity = "0"
    logo.style.opacity = "0";
    mainMenu.style.top = '0';
});
closeMenu.addEventListener('click', function() {
    mainMenu.style.top = '-100%';
    openMenu.style.opacity = "100%"
    logo.style.opacity = "100%";
});