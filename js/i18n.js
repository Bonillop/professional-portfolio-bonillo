/* ========================================
   Portfolio - Internationalization (i18n)
   ======================================== */

const translations = {
  en: {
    // Skip link
    "skip-link": "Skip to main content",

    // Sidebar nav
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hamburger
    "hamburger.open": "Open navigation menu",
    "hamburger.close": "Close navigation menu",

    // Hero
    "hero.name": "Pablo Bonillo",
    "hero.kicker": "Frontend engineer",
    "hero.title": "Senior Software engineer (Frontend focus) | React & Typescript | Fullstack",
    "hero.description":
      "Senior Software Engineer with 8+ years of experience building scalable, accessible, and high-performance web applications. Specialized in React, TypeScript, and modern JavaScript ecosystems.",
    "hero.cta.contact": "Contact me",
    "hero.cta.experience": "View experience",

    // Skills
    "skills.heading": "Skills",
    "skills.eyebrow": "Capabilities",
    "skills.subtitle": "Technologies and tools I work with",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "skills.languages": "Languages",

    // Timeline
    "timeline.heading": "Work Experience",
    "timeline.eyebrow": "Career path",
    "timeline.subtitle": "My professional journey",
    "timeline.aria": "Work experience timeline",

    "timeline.1.date.start": "Mar 2021",
    "timeline.1.date.end": "Jun 2026",
    "timeline.1.role": "Sr. React Developer",
    "timeline.1.company": "Iseatz — New Orleans, United States (Remote)",
    "timeline.1.description":
      "Developed and maintained customer-facing features for the American Express Travel platform using React and TypeScript. Collaborated with product managers, designers, QA engineers, and backend teams in an Agile environment. Led accessibility initiatives improving WCAG compliance and contributed to performance improvements and frontend architecture decisions.",

    "timeline.2.date.start": "2020",
    "timeline.2.date.end": "2021",
    "timeline.2.role": "Frontend Engineer",
    "timeline.2.company": "Doctor.com / Press Ganey — New York, United States (Remote)",
    "timeline.2.description":
      "Development and maintenance of new and existing features on Doctor.com platform providing users with a set of tools to manage their profiles and improve their overall visibility across the web.",

    "timeline.3.date.start": "2020",
    "timeline.3.role": "Backend Developer",
    "timeline.3.company": "IT Warp Consulting — Buenos Aires, Argentina (Remote)",
    "timeline.3.description":
      "Development and maintenance of microservice platform for ISeatz.",

    "timeline.4.date.start": "2018",
    "timeline.4.date.end": "2020",
    "timeline.4.role": "Developer",
    "timeline.4.company": "Leafnoise — Buenos Aires, Argentina",
    "timeline.4.description":
      "Maintenance and development of new modules in projects for the Ministry of Production and Labour of the Argentine Nation.",

    // Contact
    "contact.heading": "Contact",
    "contact.eyebrow": "Let's talk",
    "contact.subtitle": "Want to work together? Get in touch",
    "contact.form.aria": "Contact form",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "your@email.com",
    "contact.message.placeholder": "Tell me about your project...",
    "contact.submit": "Send message",
    "contact.success": "Message sent! I'll get back to you soon.",
    "contact.footer": "All rights reserved.",

    // Form validation
    "form.error.name": "Please enter your name",
    "form.error.email": "Please enter your email",
    "form.error.email.invalid": "Please enter a valid email",
    "form.error.message": "Please enter a message",

    // Language toggle
    "lang.toggle": "ES",
    "lang.toggle.aria": "Switch to Spanish",

    // Theme toggle
    "theme.toggle.label": "Theme",
    "theme.toggle.dark": "Switch to dark theme",
    "theme.toggle.light": "Switch to light theme",
  },

  es: {
    // Skip link
    "skip-link": "Saltar al contenido principal",

    // Sidebar nav
    "nav.label": "Menú principal",
    "nav.home": "Inicio",
    "nav.skills": "Skills",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    // Hamburger
    "hamburger.open": "Abrir menú de navegación",
    "hamburger.close": "Cerrar menú de navegación",

    // Hero
    "hero.name": "Pablo Bonillo",
    "hero.kicker": "Frontend engineer",
    "hero.title": "Senior Software engineer (Frontend focus) | React & Typescript | Fullstack",
    "hero.description":
      "Senior Software Engineer con más de 8 años de experiencia construyendo aplicaciones web escalables, accesibles y de alto rendimiento. Especializado en React, TypeScript y ecosistemas modernos de JavaScript.",
    "hero.cta.contact": "Contactame",
    "hero.cta.experience": "Ver experiencia",

    // Skills
    "skills.heading": "Skills",
    "skills.eyebrow": "Capacidades",
    "skills.subtitle": "Tecnologías y herramientas que manejo",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "skills.languages": "Idiomas",

    // Timeline
    "timeline.heading": "Experiencia Laboral",
    "timeline.eyebrow": "Trayectoria",
    "timeline.subtitle": "Mi trayectoria profesional",
    "timeline.aria": "Línea de tiempo de experiencia laboral",

    "timeline.1.date.start": "Mar 2021",
    "timeline.1.date.end": "Jun 2026",
    "timeline.1.role": "Sr. React Developer",
    "timeline.1.company": "Iseatz — New Orleans, Estados Unidos (Remoto)",
    "timeline.1.description":
      "Desarrollo y mantenimiento de funcionalidades para clientes en la plataforma American Express Travel usando React y TypeScript. Colaboración con product managers, diseñadores, QA y equipos de backend en entorno Agile. Liderazgo en iniciativas de accesibilidad mejorando el cumplimiento WCAG y contribuciones a mejoras de rendimiento y decisiones de arquitectura frontend.",

    "timeline.2.date.start": "2020",
    "timeline.2.date.end": "2021",
    "timeline.2.role": "Frontend Engineer",
    "timeline.2.company": "Doctor.com / Press Ganey — Nueva York, Estados Unidos (Remoto)",
    "timeline.2.description":
      "Desarrollo y mantenimiento de funcionalidades nuevas y existentes en la plataforma Doctor.com, proporcionando a los usuarios herramientas para gestionar sus perfiles y mejorar su visibilidad en la web.",

    "timeline.3.date.start": "2020",
    "timeline.3.role": "Backend Developer",
    "timeline.3.company": "IT Warp Consulting — Buenos Aires, Argentina (Remoto)",
    "timeline.3.description":
      "Desarrollo y mantenimiento de plataforma de microservicios para ISeatz.",

    "timeline.4.date.start": "2018",
    "timeline.4.date.end": "2020",
    "timeline.4.role": "Developer",
    "timeline.4.company": "Leafnoise — Buenos Aires, Argentina",
    "timeline.4.description":
      "Mantenimiento y desarrollo de nuevos módulos en proyectos para el Ministerio de Producción y Trabajo de la Nación Argentina.",

    // Contact
    "contact.heading": "Contacto",
    "contact.eyebrow": "Hablemos",
    "contact.subtitle": "¿Trabajamos juntos? Escribime",
    "contact.form.aria": "Formulario de contacto",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.name.placeholder": "Tu nombre",
    "contact.email.placeholder": "tu@email.com",
    "contact.message.placeholder": "Contame sobre tu proyecto...",
    "contact.submit": "Enviar mensaje",
    "contact.success": "¡Mensaje enviado! Te responderé pronto.",
    "contact.footer": "Todos los derechos reservados.",

    // Form validation
    "form.error.name": "Por favor ingresá tu nombre",
    "form.error.email": "Por favor ingresá tu email",
    "form.error.email.invalid": "Por favor ingresá un email válido",
    "form.error.message": "Por favor escribí un mensaje",

    // Language toggle
    "lang.toggle": "EN",
    "lang.toggle.aria": "Cambiar a inglés",

    // Theme toggle
    "theme.toggle.label": "Tema",
    "theme.toggle.dark": "Cambiar a tema oscuro",
    "theme.toggle.light": "Cambiar a tema claro",
  },
};

/* ========================================
   Core i18n functions
   ======================================== */

function getLanguage() {
  return localStorage.getItem("portfolio-lang") || "en";
}

function t(key) {
  const lang = getLanguage();
  return translations[lang]?.[key] || translations.en[key] || key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem("portfolio-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const attr = el.getAttribute("data-i18n-attr");
    const text = t(key);

    if (attr) {
      el.setAttribute(attr, text);
    } else {
      el.textContent = text;
    }
  });

  // Update <title> and <meta description>
  document.title =
    lang === "es" ? "Pablo Bonillo — Portfolio" : "Pablo Bonillo — Portfolio";

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      "content",
      lang === "es"
        ? "Portfolio de Pablo Bonillo - Trayectoria laboral, skills y contacto"
        : "Portfolio of Pablo Bonillo - Work experience, skills and contact"
    );
  }

  // Update language toggle button
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = t("lang.toggle");
    langToggle.setAttribute("aria-label", t("lang.toggle.aria"));
  }

  // Dispatch event for other modules
  document.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
}

function initLanguage() {
  const saved = getLanguage();
  setLanguage(saved);
}

/* ========================================
   Language Toggle
   ======================================== */

function initLanguageToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = getLanguage();
    const next = current === "en" ? "es" : "en";
    setLanguage(next);
  });
}
