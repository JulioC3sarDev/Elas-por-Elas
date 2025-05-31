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