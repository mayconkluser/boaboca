// LINHA ABAIXO DO MENU
const links = document.querySelectorAll("#menu a");

console.log();

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url === href) {
    link.classList.add("ativo");
  }

  console.log(url);
  console.log(href);
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
