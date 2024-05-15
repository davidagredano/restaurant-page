import "./CTAButton.css";
import Menu from "../menu";
import { replaceContent } from "../index.js";

export default function CTAButton() {
  const button = document.createElement("button");
  button.classList.add("cta-button");
  button.textContent = "Explore Our Menu";
  button.addEventListener("click", () => {
    replaceContent(Menu());
  });

  return button;
}
