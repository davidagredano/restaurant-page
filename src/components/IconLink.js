import "./IconLink.css";
import Img from "./Img";

export default function IconLink({ href, src, alt }) {
  const iconLink = document.createElement("a");
  iconLink.classList.add("icon-link");
  iconLink.href = href;
  iconLink.target = "_blank";
  iconLink.rel = "noopener noreferrer";
  iconLink.appendChild(Img(src, alt, "icon-link__icon"));
  return iconLink;
}
