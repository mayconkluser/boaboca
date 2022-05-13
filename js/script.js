const links = document.querySelectorAll(".menu a");

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
