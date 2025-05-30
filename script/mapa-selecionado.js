const aiai = document.querySelector(".aiai")
const telefone = document.querySelector(".telefone");
const conteudo = document.querySelector(".conteudo")

function exibir(){
    conteudo.classList.toggle("ativar")
    telefone.classList.toggle("ativar")
}


aiai.addEventListener("click",exibir);