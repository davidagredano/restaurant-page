import "./Hero.css";
import arrowDownIcon from "../components/icons/arrow-down.svg";
import heroImg from "./burger-hero.png";
import IconButton from "../components/IconButton";
import Img from "../components/Img";

export default function Hero() {
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const title = document.createElement("h1");
  title.classList.add("hero__title");
  title.innerHTML = "Bite<span class='accent'>&</span>Sizzle";

  const image = Img(heroImg, "Burger", "hero__image");

  const button = IconButton(arrowDownIcon, "Arrow down icon", function () {
    const nextSection = heroSection.nextElementSibling;
    nextSection.scrollIntoView({ behavior: "smooth" });
  });
  button.classList.add("hero__button");

  heroSection.appendChild(title);
  heroSection.appendChild(image);
  heroSection.appendChild(button);

  return heroSection;
}
