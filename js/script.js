function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach(el => {
        const text = el.getAttribute("data-" + lang);
        if (text) {
            el.textContent = text;
        }
    });
}

// IMPORTANT: run after page fully loads
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "fr";
    applyLanguage(savedLang);
});
// COUNTER ANIMATION
function animateCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
            const increment = target / 100;

            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };

        update();
    });
}

// RUN WHEN PAGE LOADS
window.addEventListener("load", animateCounters);

// animation 
// SCROLL ANIMATION
function revealOnScroll() {
    const elements = document.querySelectorAll(".news-card");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);