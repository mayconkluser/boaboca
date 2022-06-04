// LINHA ABAIXO DO MENU
const links = document.querySelectorAll("#menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url === href) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// BTN-MOBILE
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// ANIMAÇÃO
if (window.SimpleAnime) {
  new SimpleAnime();
}

// ANIMAÇÃO DE SCROLL NOS ELEMENTOS
function animateScroll() {
  const animationsContent = document.querySelectorAll(".js-scroll");
  if (animationsContent.length) {
    const metadeJanela = window.innerHeight * 0.8;
    function animateScrollContent() {
      animationsContent.forEach((item) => {
        const animateTop = item.getBoundingClientRect().top;
        const apareceuNaTela = animateTop - metadeJanela < 0;
        const ativeClasse = "ativo";
        if (apareceuNaTela) {
          item.classList.add(ativeClasse);
        } else {
          item.classList.remove(ativeClasse);
        }
      });
    }
    animateScrollContent();
    window.addEventListener("scroll", animateScrollContent);
  }
}
animateScroll();
