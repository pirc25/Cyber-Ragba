import {enlaces} from "./Enlaces.js";

function getElements() {
  const sitios = document.getElementById("sitios");
};

function mostrarEnlaces() {
  let elementoA = '';
  enlaces.forEach(enlace => { elementoA += `<a href= ${enlace.url} class='enlace' target='_blank'>${enlace.nombre}</a>`   
  });
  sitios.innerHTML = elementoA;
  };

function main() {
 mostrarEnlaces(enlaces);
}

main ();