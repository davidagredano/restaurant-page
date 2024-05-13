import "./StaticIcon.css";
import Img from "./Img";

export default function StaticIcon(path, alt) {
  const icon = document.createElement("div");
  icon.classList.add("static-icon__wrapper");
  icon.appendChild(Img(path, alt, "static-icon__icon"));
  return icon;
}
