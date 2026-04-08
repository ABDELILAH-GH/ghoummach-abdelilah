// script.js - Complete functionality for Ghoummach Abdelilah's portfolio

// ==========================================================================
// DOM Content Loaded
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initAnimations();
    initPortfolioFilter();
    initTestimonialSlider();
    initContactForm();
    initMagneticButtons();
    initBackToTop();
    setCurrentYear();
    initParallax();
    initSkillBars();
});

// ==========================================================================
// Navigation
// ==========================================================================
function initNavigation() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            if (navList) {
                navList.classList.remove('active');
            }
            
            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
        }
    });
}

// ==========================================================================
// Scroll Effects
// ==========================================================================
function initScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - headerHeight - 50) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// Animations
// ==========================================================================
function initAnimations() {
    // Animate hero title words
    const animateHeroTitle = () => {
        const words = document.querySelectorAll('.word');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.animation = `fadeInUp 0.8s ${index * 0.1}s forwards`;
            }, 500);
        });
    };
    
    // Intersection Observer for fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
    
    // Initialize hero animation
    setTimeout(animateHeroTitle, 300);
}

// ==========================================================================
// Portfolio Filter
// ==========================================================================
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(',');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ==========================================================================
// Testimonial Slider
// ==========================================================================
function initTestimonialSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let currentIndex = 0;
    
    if (testimonialCards.length === 0) return;
    
    // Function to show testimonial
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto slide testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// ==========================================================================
// Contact Form
// ==========================================================================
function initContactForm() {
    const contactForm = document.getElementById('form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let isValid = true;
        const inputs = this.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="btn-text">Sending...</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
    
    // Input focus effects
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// ==========================================================================
// Magnetic Buttons
// ==========================================================================
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX * 10;
            const deltaY = (y - centerY) / centerY * 10;
            
            this.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// ==========================================================================
// Back to Top Button
// ==========================================================================
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================================================
// Utility Functions
// ==========================================================================
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ==========================================================================
// Additional Interactive Effects
// ==========================================================================
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    });
}

function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress, .fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Typing effect for hero subtitle (optional enhancement)
function initTypingEffect() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    
    if (!subtitleElement) return;
    
    const text = subtitleElement.textContent;
    subtitleElement.textContent = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            subtitleElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
}

// Uncomment if you want typing effect
initTypingEffect();
const downloadBtn = document.getElementById("downloadCV");
downloadBtn.addEventListener("click", function () {

    const link = document.createElement("a");
    link.href = "cv.pdf";   // your CV file
    link.download = "Abdelilah_Ghoummach_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});
const downloadOffer = document.getElementById("downloadOffer");

downloadOffer.addEventListener("click", function (e) {
    e.preventDefault(); // empêche le reload de la page

    const link = document.createElement("a");
    link.href = "offer.pdf";  
    link.download = "Abdelilah_Ghoummach_Offer.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// Initialiser EmailJS
  // Initialize EmailJS
  emailjs.init("G1T_YQFURB82uD9n4"); // Your Public Key

  const form = document.getElementById("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach(span => span.textContent = "");
    document.getElementById("success-msg").textContent = "";

    // Form values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Validation
    if (!fullname) {
      document.querySelector("#fullname + .underline + .error-message").textContent = "Fullname is required!";
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      document.querySelector("#email + .underline + .error-message").textContent = "Valid email is required!";
      isValid = false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      document.querySelector("#phone + .underline + .error-message").textContent = "Valid 10-digit phone number is required!";
      isValid = false;
    }

    if (!message || message.length < 5) {
      document.querySelector("#message + .underline + .error-message").textContent = "Message must be at least 5 characters!";
      isValid = false;
    }

    if (!isValid) return;

    // Send with EmailJS
emailjs.send("service_r79ovdm", "template_7fjbo3n", {
  fullname: "Test User",
  email: "test@example.com",
  phone: "0123456789",
  message: "Hello from test"
}).then(res => console.log("Success", res))
  .catch(err => console.log("Error", err));
})