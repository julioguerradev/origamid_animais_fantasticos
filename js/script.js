import ScrollSuave from "./modules/scroll_suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/navtab.js";
import initAnimacaoScroll from "./modules/animacao_scroll.js";
import initModal from "./modules/modal.js";
import initTolltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown_menu.js";
import initMenuMobile from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch_animais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);

tabNav.init();

initAnimacaoScroll();
initModal();
initTolltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
