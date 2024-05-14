import "./Footer.css";
import ScrollTopButton from "./ScrollTopButton";
import InfoCard from "./InfoCard";
import Author from "../components/Author";

function FooterLogo() {
  const footerLogo = document.createElement("div");
  const letterB = document.createElement("span");
  const symbolEt = document.createElement("span");
  const letterS = document.createElement("span");
  letterB.textContent = "B";
  symbolEt.textContent = "&";
  letterS.textContent = "S";
  letterB.classList.add("footer__logo");
  symbolEt.classList.add("footer__logo", "footer__logo--accent");
  letterS.classList.add("footer__logo");
  footerLogo.appendChild(letterB);
  footerLogo.appendChild(symbolEt);
  footerLogo.appendChild(letterS);
  return footerLogo;
}

const infoCards = [
  {
    heading: "Find Us",
    text: ["Carrer del Sabor, 42", "08001 Barcelona, Spain"],
  },
  {
    heading: "When We Sizzle",
    text: [
      "Monday to Friday: 11:00 - 22:00",
      "Saturday & Sunday: 12:00 - 23:00",
    ],
  },
];

export default function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerTop = document.createElement("div");
  footerTop.classList.add("footer__top");
  footer.appendChild(footerTop);
  
  footer.appendChild(Author());

  const footerWrapper = document.createElement("div");
  footerWrapper.classList.add("footer__wrapper");
  footerTop.appendChild(footerWrapper);

  footerWrapper.appendChild(FooterLogo());
  infoCards.forEach((infoCard) => {
    footerWrapper.appendChild(InfoCard(infoCard));
  });
  footerWrapper.appendChild(ScrollTopButton());


  return footer;
}
