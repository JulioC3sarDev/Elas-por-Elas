const intro = document.querySelectorAll(".resumo")

const obs2 = new IntersectionObserver ((ol) => {
    console.log(ol);
    ol.forEach((entry2) => {
        if(entry2.isIntersecting){
            entry2.target.classList.add('show');
        }
    });
})

intro.forEach((element) => obs2.observe(element) )


const sec = document.querySelectorAll(".topicos-principal")


const obs = new IntersectionObserver ((al) => {
    al.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
})

sec.forEach((element) => obs.observe(element) )

