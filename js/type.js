/* const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//type Method
TypeWriter.prototype.type = function () {
  //Current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if deleting
  if (this.isDeleting) {
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  // Inserting txt into element
  //ps a tag span esta envolvida por um acento não por aspas simples
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Type Speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    // seria a mesma coisa que typeSpeed = typeSpeed / 2
    typeSpeed /= 2;
  }
  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set is deleting to true
    this.isDeleting = true;
    // else if para mudar e ir para a proxima palavra
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // vai para a proxima palavra;
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM Load

document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
} */

// ES6 Class

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //Current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
      //Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // Inserting txt into element
    //ps a tag span esta envolvida por um acento não por aspas simples
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type Speed
    let typeSpeed = 50;

    if (this.isDeleting) {
      // seria a mesma coisa que typeSpeed = typeSpeed / 2
      typeSpeed /= 2;
    }
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set is deleting to true
      this.isDeleting = true;
      // else if para mudar e ir para a proxima palavra
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // vai para a proxima palavra;
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 50;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
