import { replaceContent, setMenuEventListeners } from "./utils";
import Homepage from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "./index.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
  replaceContent(Homepage(), "#content");
});

menuBtn.addEventListener("click", () => {
  replaceContent(Menu(), "#content");
  setMenuEventListeners();
});

contactBtn.addEventListener("click", () => {
  replaceContent(Contact(), "#content");
});

// initial content
replaceContent(Homepage(), "#content");
