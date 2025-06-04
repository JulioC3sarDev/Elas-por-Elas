const main = document.querySelectorAll(".principal");
const footer = document.querySelectorAll(".foot");

const obs2 = new IntersectionObserver ((ol) => {
    console.log(ol);
    ol.forEach((entry2) => {
        if(entry2.isIntersecting){
            entry2.target.classList.add('show');
        }
    });
})

main.forEach((element) => obs2.observe(element) )

footer.forEach((element) => obs2.observe(element) )
