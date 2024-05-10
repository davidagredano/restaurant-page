import PageHeader from "../components/PageHeader";

export default function Contact() {
  const fragment = new DocumentFragment();
  fragment.appendChild(PageHeader("Contact"));
  return fragment;
}
