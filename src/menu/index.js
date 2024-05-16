import PageHeader from "../components/PageHeader";
import CategoryNav from "./CategoryNav";
import Footer from "../components/Footer";
import MenuContent from "./MenuContent";

function Main() {
  const main = document.createElement("main");
  main.className = "menu-main";
  main.id = "menu-main";
  return main;
}

export default function Menu() {
  const fragment = new DocumentFragment();
  fragment.appendChild(PageHeader("Menu"));
  fragment.appendChild(CategoryNav());
  fragment.appendChild(Main()).appendChild(MenuContent("all"));
  fragment.appendChild(Footer());
  return fragment;
}
