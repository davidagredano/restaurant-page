import "./Restaurant.css";

const content =
  "Nestled in the heart of Barcelona, Bite & Sizzle is more than a " +
  "restaurant —it's an experience. Our cozy space welcomes foodies, " +
  "families, and friends alike. Whether you're celebrating a special " +
  "occasion or simply craving a burger fix, we've got you covered. " +
  "Step inside, and let the aroma of sizzling patties transport you " +
  "to burger heaven.";

export default function Restaurant() {
  const section = document.createElement("section");
  section.className = "restaurant";

  const body = document.createElement("p");
  body.className = "restaurant__body";
  body.textContent = content;

  section.appendChild(body);

  return section;
}
