import MenuContent from "./menu/MenuContent";

let state = {
  activeNavBtn: null,
};

export function setActiveNavBtn(btn) {
  if (state.activeNavBtn) {
    state.activeNavBtn.classList.remove("active");
  }
  btn.classList.add("active");
  state.activeNavBtn = btn;
}

export function replaceContent(component, target) {
  const content = document.querySelector(target);
  content.innerHTML = "";
  content.appendChild(component);

  if (target === "#content") {
    window.scrollTo({ top: 0 });
  }
}

export function setMenuEventListeners() {
  const categoryBtns = document.querySelectorAll(".category-nav__btn");
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.id;
      replaceContent(MenuContent(category), "#menu-main");
    });
  });
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
