import homepageImage from "./homepage.jpeg";

function Headline() {
  const h1 = document.createElement("h1");
  h1.textContent = "Home";
  h1.classList.add("title");
  return h1;
}

function Picture() {
  const img = document.createElement("img");
  img.src = homepageImage;
  img.alt = "David's Maison Gourmet";
  img.width = 500;
  return img;
}

function Paragraph(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function Paragraphs() {
  const fragment = new DocumentFragment();

  fragment.appendChild(
    Paragraph(
      "Welcome to David's Maison Gourmet, where every dish tells a story" +
        "of culinary excellence and every bite takes you on a journey of " +
        "flavors. Nestled in the heart of the city, our restaurant is a " +
        "sanctuary for those who seek a dining experience that's both " +
        "intimate and sublime."
    )
  );
  fragment.appendChild(
    Paragraph(
      "From the moment you step through our doors, the aroma of fresh " +
        "ingredients and the soft melody of a well-tuned kitchen promise an " +
        "unforgettable gastronomic adventure. Our chefs, artisans of taste, " +
        "craft each dish with the utmost care, ensuring that your meal is " +
        "not just food, but a masterpiece."
    )
  );
  fragment.appendChild(
    Paragraph(
      "At David's Maison Gourmet, we believe that dining is more than " +
        "eating—it's a celebration of life, love, and the joy of good " +
        "company. Join us for an evening, and let us enchant your palate with" +
        "the finest cuisine that will leave you yearning for more."
    )
  );

  return fragment;
}

export default function Homepage() {
  const fragment = new DocumentFragment();

  fragment.appendChild(Headline());
  fragment.appendChild(Picture());
  fragment.appendChild(Paragraphs());

  return fragment;
}
