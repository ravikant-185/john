document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
