const intro = document.querySelectorAll(".resumo")
const sec = document.querySelectorAll(".topicos-principal")

const obs2 = new IntersectionObserver ((ol) => {
    console.log(ol);
    ol.forEach((entry2) => {
        if(entry2.isIntersecting === true){
            entry2.target.classList.add('show');
        }
    });
})

intro.forEach((element) => obs2.observe(element) )
sec.forEach((element) => obs2.observe(element) )

const drop = document.querySelector(".dropdown button")
const down = document.querySelector(".dropdown-menu")

function dropar(){
    down.classList.toggle("showMenu")
}

drop.addEventListener('click', dropar)

  const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');
    
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });


