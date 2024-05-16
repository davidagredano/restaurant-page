import "./MenuContent.css";
import { categories } from "./content";
import { capitalize } from "../utils";
import CategoryHeader from "./CategoryHeader";
import CategoryProducts from "./CategoryProducts";

export default function MenuContent(category = "all") {
  const fragment = new DocumentFragment();
  if (category === "all") {
    const categoriesExceptAll = categories.slice(1);
    categoriesExceptAll.forEach((category) => {
      fragment.appendChild(CategoryHeader(capitalize(category)));
      fragment.appendChild(CategoryProducts(category));
    });
  } else {
    fragment.appendChild(CategoryHeader(capitalize(category)));
    fragment.appendChild(CategoryProducts(category));
  }
  return fragment;
}
