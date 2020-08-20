export default class LetterAnimation {
  constructor(
      elementSelector,
      timer,
      classForActivate,
      property
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this._wordsCount = 0;

    this._needPrepare = true;

    if (this._needPrepare) {
      this.prePareText();
    }
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease `;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== ``);
    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        const curLetter = this.createElement(latter);
        fragment.appendChild(curLetter);
        if (word[index / 2]) {
          this._timeOffset = 20;
        } else {
          this._timeOffset = 60;
        }
        curLetter.style.transitionDelay = `${this._timeOffset}ms`;

        return fragment;

      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);

    this._needPrepare = false;

  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
