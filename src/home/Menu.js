import "./Menu.css";
import menuImg from "./menu-picture.jpg";
import Img from "../components/Img";
import CTAButton from "../components/CTAButton";

const content = {
  title: "Irresistible Creations",
  body: [
    "At Bite & Sizzle, we take burgers to a whole new level. Our culinary " +
      "wizards have crafted a symphony of flavors that dance on your " +
      "taste buds.",
    "From juicy beef patties to crispy chicken delights, our menu is a " +
      "celebration of comfort food.",
  ],
};

export default function Menu() {
  const section = document.createElement("section");
  section.classList.add("menu");

  const wrapper = document.createElement("div");
  wrapper.classList.add("menu__wrapper");
  section.appendChild(wrapper);

  wrapper.appendChild(Img(menuImg, "menu", "menu__picture"));

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("menu__content");
  wrapper.appendChild(contentWrapper);

  const textwrapper = document.createElement("div");
  textwrapper.classList.add("menu__text");
  contentWrapper.appendChild(textwrapper);

  contentWrapper.appendChild(CTAButton());

  const title = document.createElement("h2");
  title.classList.add("menu__title");
  title.textContent = content.title;
  textwrapper.appendChild(title);

  const body = document.createElement("div");
  body.classList.add("menu__body");
  textwrapper.appendChild(body);

  content.body.forEach((paragraph) => {
    const p = document.createElement("p");
    p.classList.add("menu__paragraph");
    p.textContent = paragraph;
    body.appendChild(p);
  });

  return section;
}
