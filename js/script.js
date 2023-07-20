import ScrollSuave from "./modules/scroll_suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/navtab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch_animais.js";
import initDropdownMenu from "./modules/dropdown_menu.js";
import initMenuMobile from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimacaoScroll from "./modules/animacao_scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();
