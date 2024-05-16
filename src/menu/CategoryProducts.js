import "./CategoryProducts.css";
import { products } from "./content";
import Img from "../components/Img";

function ProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.appendChild(Img(product.src, product.alt, "product-card__img"));

  const content = document.createElement("div");
  content.className = "product-card__content";
  card.appendChild(content);

  const name = document.createElement("h3");
  name.className = "product-card__name";
  name.textContent = product.name;
  content.appendChild(name);

  const description = document.createElement("p");
  description.className = "product-card__description";
  description.textContent = product.description;
  content.appendChild(description);

  const price = document.createElement("span");
  price.className = "product-card__price";
  price.textContent = product.price;
  content.appendChild(price);

  return card;
}

function ProductGrid(category) {
  const grid = document.createElement("section");
  grid.className = "product-grid";

  products[category].forEach((product) => {
    grid.appendChild(ProductCard(product));
  });

  return grid;
}

export default function CategoryProducts(category) {
  const section = document.createElement("section");
  section.className = "category-products";
  section.appendChild(ProductGrid(category));
  return section;
}
