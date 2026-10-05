document.querySelectorAll(".chip").forEach((c) =>
  c.addEventListener("click", () => {
    document
      .querySelectorAll(".chip")
      .forEach((x) => x.setAttribute("aria-pressed", x === c));
    const f = c.dataset.f;
    document
      .querySelectorAll(".card")
      .forEach((k) => (k.hidden = !(f === "all" || k.dataset.t === f)));
  }),
);
