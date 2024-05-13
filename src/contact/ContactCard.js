import "./ContactCard.css";
import StaticIcon from "../components/StaticIcon";

export default function ContactCard({ iconPath, iconAlt, heading, text }) {
  const contactCard = document.createElement("article");
  contactCard.classList.add("contact-card");

  contactCard.appendChild(StaticIcon(iconPath, iconAlt));

  const cardContent = document.createElement("div");
  cardContent.classList.add("contact-card__content");
  contactCard.appendChild(cardContent);

  const headingElement = document.createElement("h2");
  headingElement.textContent = heading;
  headingElement.classList.add("contact-card__heading");
  cardContent.appendChild(headingElement);

  for (const line of text) {
    const textElement = document.createElement("span");
    textElement.textContent = line;
    textElement.classList.add("contact-card__text");
    cardContent.appendChild(textElement);
  }

  return contactCard;
}
