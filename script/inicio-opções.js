document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.botoes');

    menuHamburger.addEventListener('click', () => {
        menuHamburger.classList.toggle('ativo');
        navLinks.classList.toggle('ativo');
    });
});