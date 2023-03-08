ScrollReveal().reveal('.titulo-capa, .subtitulo-capa', { distance: '-50px', duration: 2000 });
ScrollReveal().reveal('.texto-embarque', { duration: 1500 });

const header = document.querySelector("#container1");
const dFixo = document.querySelector("#dFixo");
const aFixo = document.querySelector("#aFixo");
const a2Fixo = document.querySelector("#a2Fixo");

window.addEventListener("scroll", headerFixo)
function headerFixo(){
  if (scrollY){
    header.classList.add("fixo")
    dFixo.classList.add("logofixo")
    aFixo.classList.add("afixo")
    a2Fixo.classList.add("afixo")
  } else if (window.scrollY==0 && header.classList.contains("fixo")){
    header.classList.remove("fixo")

    dFixo.classList.remove("logofixo")
    dFixo.classList.add("logo")
    aFixo.classList.remove("afixo")
    a2Fixo.classList.remove("afixo")
  }
}