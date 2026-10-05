(() => {
  const setup = () => {
    const heading = document.querySelector(".hero-name");
    const letters = Array.from(document.querySelectorAll(".name-letter"));
    if (!heading || !letters.length || heading.dataset.scrambleReady === "true") return;

    heading.dataset.scrambleReady = "true";
    const symbols = ["0", "1", "+", "=", "*", "#", "@", "%", "<", ">", "/", "[", "]", "{", "}", "~"];
    let timers = [];

    const scramble = (seed) => {
      letters.forEach((letter) => {
        const original = letter.dataset.letter || "";
        const order = Number(letter.dataset.order || 0);
        letter.textContent = symbols[(seed + order * 3) % symbols.length] || original;
      });
    };

    const clearTimers = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers = [];
    };

    const reset = () => {
      clearTimers();
      letters.forEach((letter) => { letter.textContent = letter.dataset.letter || ""; });
      heading.classList.remove("is-scrambling");
    };

    const start = () => {
      reset();
      letters.forEach((letter) => {
        letter.style.width = "";
        letter.style.width = `${Math.ceil(letter.getBoundingClientRect().width)}px`;
      });
      heading.classList.add("is-scrambling");
      scramble(2);
      timers.push(window.setTimeout(() => scramble(9), 125));
      timers.push(window.setTimeout(() => {
        letters.forEach((letter, index) => {
          timers.push(window.setTimeout(() => {
            letter.textContent = letter.dataset.letter || "";
            if (index === letters.length - 1) {
              timers.push(window.setTimeout(() => heading.classList.remove("is-scrambling"), 110));
            }
          }, index * 46));
        });
      }, 245));
    };

    heading.addEventListener("mouseenter", start);
    heading.addEventListener("mouseleave", reset);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup, { once: true });
  else setup();
})();
