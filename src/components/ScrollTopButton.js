import IconButton from "./IconButton";
import arrowUp from "../components/icons/arrow-up.svg";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollTopButton() {
  return IconButton(arrowUp, "arrow-up-icon", scrollToTop);
}
