import ScrollSuave from "./modules/scroll_suave.js";
import initAccordion from "./modules/accordion.js";
import initAnimacaoScroll from "./modules/animacao_scroll.js";
import initTabNav from "./modules/navtab.js";
import initModal from "./modules/modal.js";
import initTolltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown_menu.js";
import initMenuMobile from "./modules/menu_mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch_animais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTolltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
