import "./CategoryNav.css";
import { categories } from "./content";
import { capitalize } from "../utils";

function NavButton(label) {
  const button = document.createElement("button");
  button.classList.add("nav-btn", "nav-btn--light");
  button.id = label.toLowerCase();
  button.textContent = label;
  return button;
}

export default function CategoryNav() {
  const nav = document.createElement("nav");
  nav.classList.add("category-nav");
  nav.setAttribute("aria-label", "Category menu");
  categories.forEach((category) => {
    nav.appendChild(NavButton(capitalize(category)));
  });
  return nav;
}
