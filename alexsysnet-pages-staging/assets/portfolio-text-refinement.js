(() => {
  const isEnglish = document.documentElement.lang === "en";

  const copy = isEnglish
    ? {
        about: "I am Alex Salanova, born in Barcelona (Spain). I consider myself responsible, organised and proactive. I like moving forward, learning and finding ways to improve.",
        study: "During the two years I was studying the Intermediate Vocational Training in Microcomputer Systems and Networks (SMR), I balanced my studies with work. It taught me to manage time, adapt to shifts and stay committed even when the pace was high.",
        currentStudy: "Since February 2026, I have been studying online the Higher Vocational Training Programme in Networked Computer Systems Administration (ASIR) and the Cybersecurity in Information Technology Environments Specialisation Course. I want to keep gaining experience in IT support, systems, networks and cybersecurity.",
        trajectory: "Career path.",
        contact: "Contact.",
        indra: [
          "Analysis and triage of fraud alerts, banking scams and suspicious transactions.",
          "Review of transactions and behavioural patterns using RSA Outseer, Redsys and internal banking applications.",
          "Case documentation, follow-up and escalation through an internal case-management tool, following fraud-prevention procedures.",
        ],
        prior: [
          "Passenger support and luggage handling and loading in a port environment.",
          "Operational work with schedules that varied according to each operation.",
          "Dynamic work requiring responsibility, passenger support and adherence to procedures.",
        ],
        facts: [
          ["Barcelona city", "Available for hybrid and remote work"],
          ["Immediate availability", "Available for daytime shifts, nights, weekends and on-call work"],
          ["Languages", "Native Catalan and Spanish · B1 English"],
          ["Mobility", "A2 motorcycle licence, own vehicle and available to travel"],
        ],
      }
    : {
        about: "Soy Alex Salanova, nacido en Barcelona (España). Me considero una persona responsable, organizada y con iniciativa. Me gusta avanzar, aprender y buscar la manera de hacer mejor las cosas.",
        study: "Durante los dos años que estuve estudiando el grado medio de Sistemas Microinformáticos y Redes (SMR), compaginé los estudios con el trabajo, algo que me enseñó a gestionar el tiempo, adaptarme a turnos y mantener el compromiso incluso cuando el ritmo era alto.",
        currentStudy: "Desde febrero de 2026 curso online el Grado Superior de Administración de Sistemas Informáticos en Red (ASIR) y el Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías de la Información. Quiero seguir ganando experiencia en soporte IT, sistemas, redes y ciberseguridad.",
        trajectory: "Trayectoria.",
        contact: "Contacto.",
        indra: [
          "Análisis y triaje de alertas de fraude, estafas bancarias y operaciones sospechosas.",
          "Revisión de operaciones y patrones transaccionales mediante RSA Outseer, Redsys y aplicaciones internas.",
          "Documentación, seguimiento y escalado de casos en gestor interno, aplicando procedimientos de prevención del fraude.",
        ],
        prior: [
          "Atención al pasajero y gestión y carga de equipajes en el entorno portuario.",
          "Trabajo operativo con horarios variables según cada operativa.",
          "Trabajo dinámico de responsabilidad, atención al pasajero y cumplimiento de procedimientos.",
        ],
        facts: [
          ["Barcelona ciudad", "Disponible para trabajo híbrido y remoto"],
          ["Incorporación inmediata", "Disponible para turnos diurnos, noches, fines de semana y guardias"],
          ["Idiomas", "Catalán y español nativos · Inglés B1"],
          ["Movilidad", "Carnet A2, vehículo propio y disponibilidad para viajar"],
        ],
      };

  const updateItems = (item, values) => {
    item?.querySelectorAll(".role li").forEach((node, index) => {
      if (values[index]) node.textContent = values[index];
    });
  };

  const apply = () => {
    const aboutParagraphs = document.querySelectorAll(".intro-copy p");
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = copy.about;
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = copy.study;
    if (aboutParagraphs[2]) aboutParagraphs[2].textContent = copy.currentStudy;

    document.querySelector(".skills-note")?.remove();

    const timeline = document.querySelectorAll(".timeline-item");
    const indraCompany = timeline[0]?.querySelector(".role > p");
    if (indraCompany) indraCompany.textContent = "Minsait Cybersecurity · Indra Group";
    updateItems(timeline[0], copy.indra);
    updateItems(timeline[2], copy.prior);

    const experienceTitle = document.querySelector(".experience .section-heading h2");
    if (experienceTitle) experienceTitle.textContent = copy.trajectory;

    document.querySelectorAll(".facts-grid > div").forEach((item, index) => {
      const fact = copy.facts[index];
      if (!fact) return;
      const [title, value] = fact;
      const heading = item.querySelector("b");
      const detail = item.querySelector("span");
      if (heading) heading.textContent = title;
      if (detail) detail.textContent = value;
    });

    const contactLabel = document.querySelector(".contact-card .section-label");
    if (contactLabel) contactLabel.remove();
    const contactTitle = document.querySelector(".contact-card h2");
    if (contactTitle) contactTitle.textContent = copy.contact;
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(apply, 0));
  } else {
    setTimeout(apply, 0);
  }
})();
