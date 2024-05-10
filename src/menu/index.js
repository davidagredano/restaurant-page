import PageHeader from "../components/PageHeader";

export default function Menu() {
  const fragment = new DocumentFragment();
  fragment.appendChild(PageHeader("Menu"));
  return fragment;
}
