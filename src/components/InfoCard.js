import "./InfoCard.css";

export default function InfoCard({ heading, text }) {
  const infoCard = document.createElement("article");
  infoCard.classList.add("info-card");

  const cardContent = document.createElement("div");
  cardContent.classList.add("info-card__content");
  infoCard.appendChild(cardContent);

  const headingElement = document.createElement("h2");
  headingElement.textContent = heading;
  headingElement.classList.add("info-card__heading");
  cardContent.appendChild(headingElement);

  for (const line of text) {
    const textElement = document.createElement("span");
    textElement.textContent = line;
    textElement.classList.add("info-card__text");
    cardContent.appendChild(textElement);
  }

  return infoCard;
}
