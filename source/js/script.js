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
const lastRulesItem = document.querySelector(`.rules__item:last-child`);
const rulesButtonElement = document.querySelector(`.rules__link`);

body.onload = function () {
  body.classList.add(`loaded`);
};

lastRulesItem.onanimationend = function () {
  rulesButtonElement.classList.add(`appear`);
};
