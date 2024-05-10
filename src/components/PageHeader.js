import "./PageHeader.css";

function PageTitleWrapper() {
  const pageTitleWrapper = document.createElement("div");
  pageTitleWrapper.classList.add("page-title-wrapper");
  return pageTitleWrapper;
}

function PageTitle(title) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = title;
  pageTitle.classList.add("page-title");
  return pageTitle;
}

export default function PageHeader(title) {
  const pageHeader = document.createElement("header");
  pageHeader.classList.add("page-header");
  pageHeader.appendChild(PageTitleWrapper()).appendChild(PageTitle(title));
  return pageHeader;
}
