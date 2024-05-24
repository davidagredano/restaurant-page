import {
  replaceContent,
  setMenuEventListeners,
  setActiveNavBtn,
  getPageMinWidth,
  createModal,
  checkWindowSize,
} from "./utils";
import Homepage from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "./index.css";
import "./transitions.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const modal = createModal();
const minWidth = getPageMinWidth();

homeBtn.addEventListener("click", () => {
  replaceContent(Homepage(), "#content");
  setActiveNavBtn("main", homeBtn);
});

menuBtn.addEventListener("click", () => {
  replaceContent(Menu(), "#content");
  setActiveNavBtn("main", menuBtn);
  setMenuEventListeners();
  setActiveNavBtn("category", document.querySelector("#all"));
});

contactBtn.addEventListener("click", () => {
  replaceContent(Contact(), "#content");
  setActiveNavBtn("main", contactBtn);
});

window.addEventListener("resize", () => checkWindowSize(minWidth, modal));

// initial content
replaceContent(Homepage(), "#content");
setActiveNavBtn("main", homeBtn);
checkWindowSize(minWidth, modal);
