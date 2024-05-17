import MenuContent from "./menu/MenuContent";

let state = {
  activeNavBtn: null,
  activeCategoryNavBtn: null,
};

export function setActiveNavBtn(nav, btn) {
  if (nav === "main") {
    if (state.activeNavBtn) {
      state.activeNavBtn.classList.remove("nav-btn--active");
    }
    btn.classList.add("nav-btn--active");
    state.activeNavBtn = btn;
  } else if (nav === "category") {
    if (state.activeCategoryNavBtn) {
      state.activeCategoryNavBtn.classList.remove("category-nav__btn--active");
    }
    btn.classList.add("category-nav__btn--active");
    state.activeCategoryNavBtn = btn;
  }
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
  const categoryNav = document.querySelector(".category-nav");
  const categoryBtns = document.querySelectorAll(".category-nav__btn");
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.id;
      replaceContent(MenuContent(category), "#menu-main");
      setActiveNavBtn("category", btn);
      categoryNav.scrollIntoView({ behavior: "smooth" });
    });
  });
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
