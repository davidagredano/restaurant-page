import Homepage from "./homepage";
import Menu from "./menu";
import Contact from "./contact";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

function replaceContent(component) {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(component);
}

homeBtn.addEventListener("click", () => {
  replaceContent(Homepage());
});

menuBtn.addEventListener("click", () => {
  replaceContent(Menu());
});

contactBtn.addEventListener("click", () => {
  replaceContent(Contact());
});

replaceContent(Homepage());
