export function replaceContent(component, target) {
  const content = document.querySelector(target);
  content.innerHTML = "";
  content.appendChild(component);

  if (target === "#content") {
    window.scrollTo({ top: 0 });
  }
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
