/* ========================================
   Portfolio - Main JavaScript
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initLanguageToggle();
  initTheme();
  initSidebar();
  initScrollSpy();
  initFadeIn();
  initScrollProgress();
  initContactForm();
});

/* ========================================
   Sidebar (Mobile Toggle)
   ======================================== */
function initSidebar() {
  const toggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  if (!toggle || !sidebar || !overlay) return;

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", t("hamburger.close"));
    sidebar.querySelector("a").focus();
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("hamburger.open"));
    toggle.focus();
  }

  toggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("open");
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener("click", closeSidebar);

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("open")) {
      closeSidebar();
    }
  });

  // Close sidebar when a link is clicked (mobile)
  sidebar.querySelectorAll(".sidebar-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });
}

/* ========================================
   Theme
   ======================================== */
function getTheme() {
  return document.documentElement.dataset.theme || "light";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const isDark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", t(isDark ? "theme.toggle.light" : "theme.toggle.dark"));
}

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  setTheme(getTheme());
  toggle.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });

  document.addEventListener("languageChanged", () => setTheme(getTheme()));
}

/* ========================================
   Scroll Spy
   ======================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll(".section[id]");
  const links = document.querySelectorAll(".sidebar-link");

  if (!sections.length || !links.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ========================================
   Fade-in on Scroll
   ======================================== */
function initFadeIn() {
  const elements = document.querySelectorAll(".fade-in");

  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ========================================
   Scroll Progress
   ======================================== */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  let ticking = false;
  const updateProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progressBar.style.transform = `scaleX(${Math.min(progress, 100) / 100})`;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

/* ========================================
   Contact Form Validation
   ======================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    clearErrors();

    const name = form.querySelector("#name");
    if (!name.value.trim()) {
      showError(name, "name-error", t("form.error.name"));
      isValid = false;
    }

    const email = form.querySelector("#email");
    if (!email.value.trim()) {
      showError(email, "email-error", t("form.error.email"));
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "email-error", t("form.error.email.invalid"));
      isValid = false;
    }

    const message = form.querySelector("#message");
    if (!message.value.trim()) {
      showError(message, "message-error", t("form.error.message"));
      isValid = false;
    }

    if (isValid) {
      const success = document.getElementById("form-success");
      success.hidden = false;
      form.reset();

      setTimeout(() => {
        success.hidden = true;
      }, 5000);
    }
  });

  form.querySelectorAll(".form-input").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const errorId = input.id + "-error";
      const errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.textContent = "";
    });
  });
}

function showError(input, errorId, message) {
  input.classList.add("error");
  const errorEl = document.getElementById(errorId);
  if (errorEl) errorEl.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".form-error").forEach((el) => {
    el.textContent = "";
  });
  document.querySelectorAll(".form-input").forEach((el) => {
    el.classList.remove("error");
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
