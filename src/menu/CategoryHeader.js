import "./CategoryHeader.css";

function CategoryTitle(title) {
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = title;
  categoryTitle.classList.add("category-title");
  return categoryTitle;
}

export default function CategoryHeader(title) {
  const header = document.createElement("header");
  header.classList.add("category-header");
  header.appendChild(CategoryTitle(title));
  return header;
}
