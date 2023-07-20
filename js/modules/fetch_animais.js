import AnimaNumeros from "./anima_numeros.js";

export default function initFetchAnimais() {}

function createAnimal(animal) {
  const div = document.createElement("div");
  div.classList.add("numero-animal");
  div.innerHTML = `<h3> ${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
  return div;
}

async function fetchAnimais(url) {
  const animaisResponse = await fetch(url);
  const animaisJson = await animaisResponse.json();
  const numerosGrid = document.querySelector(".numeros-grid");
  animaisJson.forEach((animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  });

  const animaNumero = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
  animaNumero.init();
}

fetchAnimais("./animaisapi.json");
