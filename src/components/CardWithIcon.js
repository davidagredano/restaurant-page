import "./CardWithIcon.css";
import StaticIcon from "./IconStatic";

export default function ContactCard({ iconPath, iconAlt, heading, text }) {
  const contactCard = document.createElement("article");
  contactCard.classList.add("card-with-icon");

  contactCard.appendChild(StaticIcon(iconPath, iconAlt));

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-with-icon__content");
  contactCard.appendChild(cardContent);

  const headingElement = document.createElement("h2");
  headingElement.textContent = heading;
  headingElement.classList.add("card-with-icon__heading");
  cardContent.appendChild(headingElement);

  for (const line of text) {
    const textElement = document.createElement("span");
    textElement.textContent = line;
    textElement.classList.add("card-with-icon__text");
    cardContent.appendChild(textElement);
  }

  return contactCard;
}
