// Scroll Navbar
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
    header.classList.add("active")
    dFixo.classList.remove("logofixo")
    dFixo.classList.add("logo")
    aFixo.classList.remove("afixo")
    a2Fixo.classList.remove("afixo")
  }
}

// Scroll section
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + window.innerHeight*0.75;
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass)
    }
  })
}

animeScroll();
window.addEventListener('scroll', function(){
  animeScroll();
})