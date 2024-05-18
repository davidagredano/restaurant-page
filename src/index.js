import {
  replaceContent,
  setMenuEventListeners,
  setActiveNavBtn,
  getPageMinWidth,
  createModal,
} from "./utils";
import Homepage from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "./index.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

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

window.addEventListener("resize", function () {
  const minWidth = getPageMinWidth();
  const width = window.innerWidth;
  const modal = document.querySelector(".modal");
  if (width < minWidth && !modal.open) {
    modal.showModal();
  } else if (width >= minWidth && modal.open) {
    modal.close();
  }
});

// initial content
replaceContent(Homepage(), "#content");
setActiveNavBtn("main", homeBtn);
createModal();
