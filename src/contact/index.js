import "./index.css";
import PageHeader from "../components/PageHeader";
import CardWithIcon from "../components/CardWithIcon";
import Footer from "../components/Footer";
import emailIcon from "../components/icons/email.svg";
import phoneIcon from "../components/icons/phone.svg";

export default function Contact() {
  const contactCards = [
    {
      iconPath: emailIcon,
      iconAlt: "Mail Icon",
      heading: "Email Us",
      text: ["support@biteandsizzle.com", "press@biteandsizzle.com"],
    },
    {
      iconPath: phoneIcon,
      iconAlt: "Phone Icon",
      heading: "Call Us",
      text: ["(+34) 622 658 553", "(+34) 622 658 554"],
    },
  ];

  const fragment = new DocumentFragment();
  fragment.appendChild(PageHeader("Contact"));

  const contactCardsSection = document.createElement("section");
  contactCardsSection.classList.add("contact-cards-section");
  contactCards.forEach((contactCard) => {
    contactCardsSection.appendChild(CardWithIcon(contactCard));
  });
  fragment.appendChild(contactCardsSection);

  fragment.appendChild(Footer());

  return fragment;
}
