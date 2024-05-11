import { enlaces } from "./Enlaces.js";

function getElements() {
  const sitios = document.getElementById("sitios");
}

function mostrarEnlaces() {
  let elementoA = "";
  enlaces.forEach((enlace) => {
    elementoA += `<a href= ${enlace.url} class='enlace' target='_blank'>${enlace.nombre}</a>`;
  });
  sitios.innerHTML = elementoA;
}

function buscarPorNombre(enlaces, valorBusqueda) {
  return enlaces.filter((enlace) =>
    enlace.nombre.toLowerCase().includes(valorBusqueda.toLowerCase())
  );
}

function mostrarResultados(enlaces) {
  let elementoA = "";
  enlaces.forEach((enlace) => {
    elementoA += `<a href= ${enlace.url} class='enlace' target='_blank'>${enlace.nombre}</a>`;
  });
  sitios.innerHTML = elementoA;
}

function buscar() {
  const valorBusqueda = document.getElementById("valor").value.toLowerCase();
  const resultados = buscarPorNombre(enlaces, valorBusqueda);
  mostrarResultados(resultados);
}
window.buscar = buscar;
window.mostrarEnlaces = mostrarEnlaces;

function main() {
  mostrarEnlaces(enlaces);
}

main();
