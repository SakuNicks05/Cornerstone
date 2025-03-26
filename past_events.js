document.querySelectorAll(".gallery-container").forEach((container) => {
    const gallery = container.querySelector(".gallery");
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");

    prevBtn.addEventListener("click", () => {
        gallery.scrollBy({ left: -220, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        gallery.scrollBy({ left: 220, behavior: "smooth" });
    });
});
