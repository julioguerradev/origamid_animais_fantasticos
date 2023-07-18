export default class Modal {
  constructor(abrir, fechar, container) {
    this.botaoAbrir = document.querySelector();
    this.botaoFechar = document.querySelector();
    this.containerModal = document.querySelector();
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle("ativo");
  }

  cliqueForaModal(event) {
    if (event.target === this) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener("click", this.toggleModal);
      this.botaoFechar.addEventListener("click", this.toggleModal);
      this.containerModal.addEventListener("click", this.cliqueForaModal);
    }
  }
}
