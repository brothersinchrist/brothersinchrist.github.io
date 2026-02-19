document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggleBtn");
  const themeMenu = document.getElementById("themeMenu");
  const themeLabel = document.getElementById("themeLabel");
  const themeIcon = document.getElementById("themeIcon");

  if (!toggleBtn || !themeMenu) return;

  const options = themeMenu.querySelectorAll("li");
  const systemQuery = window.matchMedia("(prefers-color-scheme: dark)");

  let giscusReady = false;

  // -------------------------------------------------
  // Helper: Resolve the actual theme ("light" or "dark")
  // -------------------------------------------------
  function getEffectiveTheme(theme) {
    if (theme === "system") {
      return systemQuery.matches ? "dark" : "light";
    }
    return theme;
  }

  // -------------------------------------------------
  // Update UI label + icon
  // -------------------------------------------------
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
  // GISCUS THEME SYNC
  // -------------------------------------------------
  function updateGiscusTheme() {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe || !giscusReady) return;

    const current = root.getAttribute("data-theme");
    const effective = getEffectiveTheme(current);
    const url = window.giscusThemes[effective];

    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: url } } },
      "https://giscus.app"
    );
  }

  // -------------------------------------------------
  // Apply any theme ("light", "dark", or "system")
  // -------------------------------------------------
  function applyTheme(theme) {
    const effective = getEffectiveTheme(theme);

    root.setAttribute("data-theme", effective);
    localStorage.setItem("theme", theme);

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
  // Theme selection click events
  // -------------------------------------------------
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      const selected = opt.getAttribute("data-theme");
      applyTheme(selected);
      themeMenu.classList.remove("open");
    });
  });

  // -------------------------------------------------
  // React to OS theme changes (if in System mode)
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

  // -------------------------------------------------
  // Giscus iframe ready → sync theme
  // -------------------------------------------------
  window.addEventListener("message", (event) => {
    if (event.origin !== "https://giscus.app") return;
    if (event.data?.giscus?.discussion) {
      giscusReady = true;
      updateGiscusTheme();
    }
  });

});