// Basic JavaScript for specials carousel functionality

const specialsCarousel = document.querySelector(".specials-carousel");

const specialCards = document.querySelectorAll(".special-card");

const prevSpecialButton = document.querySelector(".prev-special");

const nextSpecialButton = document.querySelector(".next-special");

let currentIndex = 0;

if (specialCards.length > 0) {
  const cardVisibleWidth = specialCards[0].offsetWidth;

  const cardMarginRight = parseInt(
    window.getComputedStyle(specialCards[0]).marginRight
  );

  const totalCardWidth = cardVisibleWidth + cardMarginRight;

  function updateSpecialCarousel() {
    specialsCarousel.style.transform = `translateX(-${
      currentIndex * totalCardWidth
    }px)`;
  }

  if (prevSpecialButton && nextSpecialButton) {
    prevSpecialButton.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);

      updateSpecialCarousel();
    });

    nextSpecialButton.addEventListener("click", () => {
      currentIndex = Math.min(currentIndex + 1, specialCards.length - 1);

      updateSpecialCarousel();
    });

    updateSpecialCarousel(); // Initial call to set the starting position
  }
}

// Basic JavaScript for testimonials slider

const testimonialsSlider = document.querySelector(".testimonials-slider");

const testimonials = document.querySelectorAll(".testimonial");

const prevTestimonialButton = document.querySelector(".prev-testimonial");

const nextTestimonialButton = document.querySelector(".next-testimonial");

let testimonialIndex = 0;

if (testimonials.length > 0) {
  const testimonialWidth = testimonials[0].offsetWidth;

  function updateTestimonialSlider() {
    testimonialsSlider.style.transform = `translateX(-${
      testimonialIndex * testimonialWidth
    }px)`;
  }

  if (prevTestimonialButton && nextTestimonialButton) {
    prevTestimonialButton.addEventListener("click", () => {
      testimonialIndex = Math.max(testimonialIndex - 1, 0);

      updateTestimonialSlider();
    });

    nextTestimonialButton.addEventListener("click", () => {
      testimonialIndex = Math.min(
        testimonialIndex + 1,

        testimonials.length - 1
      );

      updateTestimonialSlider();
    });

    updateTestimonialSlider(); // Initial call
  }
}

// Basic hamburger menu toggle

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const overlay = document.querySelector(".overlay");

if (hamburger && navLinks && overlay) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("open");

    overlay.classList.remove("active");
  });
}

// Initialize ScrollReveal

ScrollReveal({
  reset: false, // Keep animations after scrolling back

  distance: "60px",

  duration: 800,

  delay: 200,

  easing: "cubic-bezier(0.5, 0, 0, 1)",

  scale: 0.9,

  mobile: false, // Disable animations on mobile if needed
});

// Apply ScrollReveal animations to elements

ScrollReveal().reveal(".hero-content .hero-title", { origin: "top" });

ScrollReveal().reveal(".hero-content .hero-subtitle", {
  origin: "top",

  delay: 300,
});

ScrollReveal().reveal(".hero-content .hero-button", {
  origin: "bottom",

  delay: 500,
});

ScrollReveal().reveal(".hero-image", { origin: "right", delay: 700 });

ScrollReveal().reveal(".section-title", { origin: "top" });

ScrollReveal().reveal(".specials-carousel .special-card", { interval: 200 });

ScrollReveal().reveal(".explore-content", { origin: "left" });

ScrollReveal().reveal(".explore-image", { origin: "right", delay: 300 });

ScrollReveal().reveal(".services-grid .service-card", { interval: 200 });

ScrollReveal().reveal(".chef-info", { origin: "left" });

ScrollReveal().reveal(".chef-image", { origin: "right", delay: 300 });

ScrollReveal().reveal(".chef-highlights li", {
  interval: 200,

  origin: "bottom",
});

ScrollReveal().reveal(".testimonials-slider .testimonial", {
  interval: 300,

  origin: "bottom",
});

ScrollReveal().reveal(".footer-col", { interval: 200, origin: "bottom" });

ScrollReveal().reveal(".footer-bottom", { origin: "bottom", delay: 200 });
