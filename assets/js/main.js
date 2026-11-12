(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav-panel");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && header && panel) {
    const setOpen = (open) => {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    };

    toggle.addEventListener("click", () => {
      setOpen(!header.classList.contains("is-open"));
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }
})();
