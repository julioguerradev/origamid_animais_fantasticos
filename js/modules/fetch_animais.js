import AnimaNumeros from "./anima_numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3> ${animal.especie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  // Prrenche cada animal no Dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // Apó s a transformação em json
      // Ativa as função para preencher e animar os numeros
      animaisJson.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumeros();
    } catch (error) {
      console.error(error);
    }
  }

  return criarAnimais();
}
