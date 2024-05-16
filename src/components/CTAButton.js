import "./CTAButton.css";
import Menu from "../menu";
import { replaceContent, setMenuEventListeners } from "../utils.js";

export default function CTAButton() {
  const button = document.createElement("button");
  button.classList.add("cta-button");
  button.textContent = "Explore Our Menu";
  button.addEventListener("click", () => {
    replaceContent(Menu(), "#content");
    setMenuEventListeners();
  });

  return button;
}
