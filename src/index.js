import Homepage from "./home";
import Menu from "./menu";
import Contact from "./contact";
import "./style.css";

const navBtns = document.querySelectorAll(".nav__button");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

function replaceContent(component) {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(component);
}

navBtns.forEach((btn) => {
  const lineElement = btn.querySelector(".nav__button-line");
  btn.addEventListener("mouseover", () => {
    lineElement.style.width = "100%";
  });
  btn.addEventListener("mouseout", () => {
    lineElement.style.width = "0%";
  });
});

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
