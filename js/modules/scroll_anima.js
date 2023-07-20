export default class scrollAnima {
  constructor(secoes) {
    this.sections = document.querySelectorAll(secoes);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;

      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    // if (this.sections.length) {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
    // }
  }
}
