import { enlaces } from "./Enlaces.js";

// Función para obtener elementos del DOM
function getElements() {
  return {
    sitios: document.getElementById("sitios"),
    inputValor: document.getElementById("valor"),
  };
}

// Mostrar todos los enlaces sin filtrar
function mostrarEnlaces() {
  const { sitios } = getElements();
  let elementoA = "";
  enlaces.forEach((enlace) => {
    elementoA += `<a href="${enlace.url}" class='enlace' target='_blank'>${enlace.nombre}</a><br>`;
  });
  sitios.innerHTML = elementoA;
}

// Filtrar enlaces por nombre
function buscarPorNombre(enlaces, valorBusqueda) {
  return enlaces.filter((enlace) =>
    enlace.nombre.toLowerCase().includes(valorBusqueda.toLowerCase())
  );
}

// Mostrar los resultados filtrados
function mostrarResultados(enlaces) {
  const { sitios } = getElements();
  let elementoA = "";
  enlaces.forEach((enlace) => {
    elementoA += `<a href="${enlace.url}" class='enlace' target='_blank'>${enlace.nombre}</a><br>`;
  });
  sitios.innerHTML = elementoA;
}

// Función que se ejecuta cuando el usuario busca
function buscar() {
  const { inputValor } = getElements();
  const valorBusqueda = inputValor.value.toLowerCase();
  const resultados = buscarPorNombre(enlaces, valorBusqueda);
  mostrarResultados(resultados);
}

// Agregar el event listener para buscar en tiempo real
function addInputEventListener() {
  const { inputValor } = getElements();
  inputValor.addEventListener("input", buscar);
}

// Función principal que se ejecuta al cargar la página
function main() {
  mostrarEnlaces();
  addInputEventListener();
}

// Ejecutar cuando la página haya cargado
window.onload = main;
