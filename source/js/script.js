// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import LetterAnimation from './modules/letter-animation';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const body = document.querySelector(`body`);
const lastRulesItemElement = document.querySelector(`.rules__item:last-child`);
const rulesButtonElement = document.querySelector(`.rules__link`);
const isGiftsScreen = document.querySelector(`.screen--rules`).classList.contains(`active`);
const isIntroScreen = document.querySelector(`.screen--intro`).classList.contains(`active`);
const introMessageElement = document.querySelector(`.intro__message`);
const introLabelElement = document.querySelector(`.intro__label`);

body.onload = function () {
  body.classList.add(`loaded`);
};

if (isGiftsScreen) {
  lastRulesItemElement.onanimationend = function () {
    rulesButtonElement.classList.add(`appear`);
  };
}

if (isIntroScreen) {
  introMessageElement.ontransitionend = function () {
    const animationDateMane = new LetterAnimation(`.intro__date`, 500, `active`, `transform`);
    setTimeout(()=>{
      animationDateMane.runAnimation();
    }, 200);
    introLabelElement.classList.add(`appear`);
  };
}

const animationTitleMane = new LetterAnimation(`.intro__title`, 500, `active`, `transform`);
setTimeout(()=>{
  animationTitleMane.runAnimation();
}, 700);
