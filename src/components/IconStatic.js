import "./IconStatic.css";
import Img from "./Img";

export default function StaticIcon(path, alt) {
  const icon = document.createElement("div");
  icon.classList.add("icon-static__wrapper");
  icon.appendChild(Img(path, alt, "icon-static__icon"));
  return icon;
}
