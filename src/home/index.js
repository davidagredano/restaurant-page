import Hero from "./Hero";
import Menu from "./Menu";
import Restaurant from "./Restaurant";
import Footer from "../components/Footer";

export default function Homepage() {
  const fragment = new DocumentFragment();

  fragment.appendChild(Hero());
  fragment.appendChild(Menu());
  fragment.appendChild(Restaurant());
  fragment.appendChild(Footer());

  return fragment;
}
