const button = document.querySelectorAll(".button-faq");

button.forEach((a) => {
    a.addEventListener('click', () => {
        const mostrar = a.nextElementSibling;
        mostrar.classList.toggle("show")
    })
})