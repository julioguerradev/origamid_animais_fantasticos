export default class AnimaNumeros {
  constructor(numeros, observerClass, target) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(target);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com número em seu texto
  // incremento a partir de 0 até o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const inscremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += inscremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementarnumero
  // Para cada numero selecionado no dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // Quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) this.addMutationObserver();
    return this;
  }
}
