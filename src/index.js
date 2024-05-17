import {
  replaceContent,
  setMenuEventListeners,
  setActiveNavBtn,
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

// initial content
replaceContent(Homepage(), "#content");
setActiveNavBtn("main", homeBtn);
