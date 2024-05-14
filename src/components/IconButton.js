import "./IconButton.css";
import Img from "./Img";

export default function IconButton(path, alt, onClick) {
  const button = document.createElement("button");
  button.classList.add("icon-button");
  button.appendChild(Img(path, alt, "icon-button__icon"));
  button.addEventListener("click", onClick);
  return button;
}
