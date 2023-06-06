class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;

    this.init();
  }

  activeSlide(index) {
    this.active = index;
    /* vai selecionar tudo que estiver dentro de slide-item, podem ser até mesmo
    divs */
    /* ** .slide-items > * .-> seleciona todo elemento que estiver dentro do slide-items */

    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add("active");
    this.thumbItens.forEach((item) => item.classList.remove("active"));
    this.thumbItens[index].classList.add("active");
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavegation() {
    const nextBtn = this.slide.querySelector(".slide-next");
    const prevBtn = this.slide.querySelector(".slide-prev");
    nextBtn.addEventListener("click", this.next);
    prevBtn.addEventListener("click", this.prev);
  }
  addThumbItens() {
    this.items.forEach(() => (this.thumb.innerHTML += "<span></span>"));
    this.thumbItens = Array.from(this.thumb.children);
    console.log(this.thumbItens);
  }

  /* deixando o slide automatizado*/

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll(".slide-items > * ");
    this.thumb = this.slide.querySelector(".slide-thumb");
    this.addThumbItens();
    this.activeSlide(0);
    this.addNavegation();
  }
}

new SlideStories("slide");
