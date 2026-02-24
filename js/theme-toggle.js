document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggleBtn");
  const themeMenu = document.getElementById("themeMenu");
  const themeLabel = document.getElementById("themeLabel");
  const themeIcon = document.getElementById("themeIcon");

  if (!toggleBtn || !themeMenu) return;

  const options = themeMenu.querySelectorAll("li");
  const systemQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // -------------------------------------------------
  // Helpers
  // -------------------------------------------------

  function getEffectiveTheme(theme) {
    return theme === "system"
      ? (systemQuery.matches ? "dark" : "light")
      : theme;
  }

  function setLabelAndIcon(theme) {
    const mode = theme === "system" ? "system" : getEffectiveTheme(theme);

    if (mode === "light") {
      themeLabel.textContent = "Light";
      themeIcon.src = window.mogIconBase + "sun.svg";
    } else if (mode === "dark") {
      themeLabel.textContent = "Dark";
      themeIcon.src = window.mogIconBase + "moon.svg";
    } else {
      themeLabel.textContent = "System";
      themeIcon.src = window.mogIconBase + "gear.svg";
    }
  }

  // -------------------------------------------------
  // Sync Giscus theme
  // -------------------------------------------------

  function updateGiscusTheme() {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;

    const current = root.getAttribute("data-theme");
    const effective = getEffectiveTheme(current);
    const url = window.mogTheme.getGiscusThemeUrl();

    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: url } } },
      "*"    // IMPORTANT: must be "*" per Giscus messaging behavior
    );
  }

  // -------------------------------------------------
  // Apply chosen theme
  // -------------------------------------------------

  function applyTheme(theme) {
    localStorage.setItem("theme", theme);

    const effective =
      theme === "system"
        ? (systemQuery.matches ? "dark" : "light")
        : theme;

    document.documentElement.setAttribute("data-theme", effective);

    setLabelAndIcon(theme);
    updateGiscusTheme();
  }

  // -------------------------------------------------
  // Dropdown behavior
  // -------------------------------------------------

  toggleBtn.addEventListener("click", () => {
    themeMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !themeMenu.contains(e.target)) {
      themeMenu.classList.remove("open");
    }
  });

  // -------------------------------------------------
  // Theme selection
  // -------------------------------------------------

  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      applyTheme(opt.getAttribute("data-theme"));
      themeMenu.classList.remove("open");
    });
  });

  // -------------------------------------------------
  // OS theme changes (system mode)
  // -------------------------------------------------

  systemQuery.addEventListener("change", () => {
    if (localStorage.getItem("theme") === "system") {
      applyTheme("system");
    }
  });

  // -------------------------------------------------
  // Initial load
  // -------------------------------------------------

  const saved = localStorage.getItem("theme") || "system";
  applyTheme(saved);

});