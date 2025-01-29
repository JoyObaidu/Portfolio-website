document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Animate skills progress bars
    const skillBars = document.querySelectorAll(".progress-bar");

    function animateSkills() {
        skillBars.forEach(bar => {
            const value = bar.getAttribute("data-value");
            bar.style.width = value + "%";
        });
    }

    // Detect when skills section is in view
    const skillsSection = document.getElementById("skills");
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateSkills();
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // Testimonial slider
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? "block" : "none";
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    setInterval(nextTestimonial, 3000); // Auto-slide every 3 sec

    showTestimonial(currentIndex);

    // Contact form validation
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Form submitted successfully!");
        contactForm.reset();
    });
});
