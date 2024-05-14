import "./Author.css";
import IconLink from "../components/IconLink";
import githubIcon from "../components/icons/github.svg";

export default function Author() {
  const author = document.createElement("div");
  author.classList.add("author");

  const authorWrapper = document.createElement("div");
  authorWrapper.classList.add("author__wrapper");
  author.appendChild(authorWrapper);

  const authorText = document.createElement("p");
  authorText.classList.add("author__text");
  authorText.textContent = "Designed and built by David Agredano";
  authorWrapper.appendChild(authorText);

  authorWrapper.appendChild(
    IconLink({
      href: "https://github.com/davidagredano",
      src: githubIcon,
      alt: "GitHub Icon",
    })
  );

  return author;
}
