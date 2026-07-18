// ===============================
// Typed.js Animation
// ===============================

var typed = new Typed(".text", {
    strings: [
        "AI & Machine Learning Engineer",
        "Data Analyst",
        "Aspiring Data Engineer",
        "Python Developer",
        "AI Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


// ===============================
// Active Navigation
// ===============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                const activeLink = document.querySelector(
                    ".navbar a[href*='" + id + "']"
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            });

        }

    });

};


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting me! I'll get back to you soon."
        );

        form.reset();

    });

}


// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});


document.querySelectorAll(
    ".project-card, .skill-box, .about, .contact, .education"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});


// ===============================
// Console Welcome
// ===============================

console.log("====================================");
console.log(" Welcome to Rohankumar's Portfolio ");
console.log(" AI | ML | Data Engineering ");
console.log(" GitHub: https://github.com/Biradarrohan");
console.log("====================================");