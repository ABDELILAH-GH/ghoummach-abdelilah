// script.js - Complete functionality with Language Switcher
// Updated to fully support Café Napoli translation and all hardcoded elements

// ==========================================================================
// Translations Data (including Café Napoli)
// ==========================================================================
const translations = {
    en: {
        tagline: "Full Stack Developer & Freelancer",
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_pretitle: "Full Stack Developer",
        hero_title1: "Building",
        hero_title2: "Digital",
        hero_title3: "Solutions",
        hero_title4: "with",
        hero_title5: "Code",
        hero_title6: "Creativity",
        hero_subtitle: "I specialize in building modern and responsive websites using HTML, CSS, JavaScript, Laravel, and React.",
        download_cv: "Download My CV",
        our_offer: "My Offer",
        contact_me: "Contact Me",
        years_exp: "Years Experience",
        scroll_down: "Scroll Down",
        about_subtitle: "Get to Know Me",
        about_title1: "About",
        about_title2: "Me",
        about_intro: "I'm a passionate full-stack developer with 3+ years of experience crafting robust web applications.",
        about_bio: "My journey in programming started with C++, and I've since expanded my expertise to include modern web technologies. I specialize in both backend (PHP/Laravel, Python, Express.js) and frontend (React, Next.js) development, allowing me to build complete, scalable solutions for my clients.",
        personal_details: "Personal Details",
        full_name: "Full Name:",
        email: "Email:",
        phone: "Phone:",
        location: "Location:",
        location_value: "Morocco (El jadida)",
        achievements: "Achievements",
        achievement1: "5+ Projects Completed",
        achievement2: "1+ Happy Clients",
        achievement3: "Full Stack Certification",
        achievement4: "Open Source Contributor",
        quote_text: "\"Code is like humor. When you have to explain it, it's bad.\"",
        skills_subtitle: "What I Offer",
        skills_title1: "Technical",
        skills_title2: "Skills",
        prog_languages: "Programming Languages",
        frontend: "Frontend",
        backend: "Backend & Frameworks",
        databases: "Databases:",
        tools: "Tools & Version Control",
        spoken_languages: "Languages:",
        arabic: "Arabic",
        native: "Native",
        french: "French",
        fluent: "Fluent",
        english: "English",
        professional: "Professional",
        portfolio_subtitle: "Recent Work",
        portfolio_title1: "Featured",
        portfolio_title2: "Projects",
        portfolio_desc: "A selection of my most impactful projects built with modern technologies.",
        all_projects: "All Projects",
        filter_frontend: "Frontend",
        filter_backend: "Backend",
        filter_fullstack: "Full Stack",
        // Café Napoli translations
        cafe_napoli_title: "Café Napoli",
        cafe_napoli_desc: "Modern and responsive café restaurant website with elegant UI design",
        cafe_napoli_category: "Restaurant Website",
        cafe_napoli_btn: "Visit Website",
        // Other projects
        project1_title: "Personal Portfolio for Designer",
        project1_desc: "Design and development of a portfolio website in HTML, CSS and JavaScript to showcase the achievements and services of a designer.",
        project2_title: "Construction Project Portfolio",
        project2_desc: "Showcasing completed projects with detailed plans, progress tracking, and real-time updates.",
        project3_title: "Analytics Dashboard",
        project3_desc: "Interactive dashboard for business metrics visualization",
        project4_title: "Task Management App",
        project4_desc: "Collaborative tool with real-time updates",
        view_details: "View Details",
        category_frontend: "Frontend",
        category_backend: "Backend",
        category_fullstack: "Full Stack",
        see_more: "Want to see more of my work?",
        view_github: "View GitHub Profile",
        testimonials_subtitle: "Client Feedback",
        testimonials_title: "Testimonials",
        testimonial1_text: "Ghoummach delivered an outstanding personal portfolio for me. His technical skills, creativity, and attention to detail exceeded my expectations. A highly professional and impressive project!",
        testimonial2_text: "Working with Ghoummach on our inventory system was a great experience. His knowledge of Laravel and database optimization helped us build a robust solution.",
        motion_designer: "Motion Designer",
        tech_lead: "Tech Lead",
        contact_subtitle: "Let's Connect",
        contact_title1: "Get In",
        contact_title2: "Touch",
        contact_desc: "Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.",
        contact_info: "Contact Information",
        phone_label: "Phone",
        email_label: "Email",
        location_label: "Location",
        availability: "Availability",
        availability_text: "Currently accepting freelance projects. Typical response time: 24 hours.",
        send_message: "Send Me a Message",
        form_desc: "Fill out the form below and I'll get back to you as soon as possible.",
        your_name: "Your Name",
        your_email: "Email Address",
        your_phone: "Phone Number",
        your_message: "Your Message",
        send_btn: "Send Message",
        footer_tagline: "Full Stack Developer",
        footer_text: "Building robust web applications with modern technologies.",
        quick_links: "Quick Links",
        services: "Services",
        service1: "Web Development",
        service2: "Full Stack Applications",
        service3: "API Development",
        service4: "Database Design",
        service5: "Frontend Development",
        connect: "Connect",
        all_rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        success_message: "Thank you! Your message has been sent successfully.",
        error_required: "This field is required.",
        error_email: "Please enter a valid email address.",
        error_phone: "Please enter a valid 10-digit phone number.",
        error_message: "Message must be at least 5 characters."
    },
    fr: {
        tagline: "Développeur Full Stack & Freelance",
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_pretitle: "Développeur Full Stack",
        hero_title1: "Créer",
        hero_title2: "Des",
        hero_title3: "Solutions",
        hero_title4: "avec",
        hero_title5: "Code",
        hero_title6: "Créativité",
        hero_subtitle: "Je suis spécialisé dans la création de sites web modernes et responsives en utilisant HTML, CSS, JavaScript, Laravel et React.",
        download_cv: "Télécharger mon CV",
        our_offer: "Mon Offre",
        contact_me: "Me Contacter",
        years_exp: "Années d'Expérience",
        scroll_down: "Défiler",
        about_subtitle: "Apprenez à me connaître",
        about_title1: "À propos",
        about_title2: "de moi",
        about_intro: "Je suis un développeur full-stack passionné avec plus de 3 ans d'expérience dans la création d'applications web robustes.",
        about_bio: "Mon parcours en programmation a commencé avec le C++, et j'ai depuis élargi mon expertise aux technologies web modernes. Je me spécialise à la fois dans le backend (PHP/Laravel, Python, Express.js) et le frontend (React, Next.js), ce qui me permet de construire des solutions complètes et évolutives pour mes clients.",
        personal_details: "Détails Personnels",
        full_name: "Nom Complet :",
        email: "Email :",
        phone: "Téléphone :",
        location: "Localisation :",
        location_value: "Maroc (El jadida)",
        achievements: "Réalisations",
        achievement1: "5+ Projets Réalisés",
        achievement2: "1+ Clients Satisfaits",
        achievement3: "Certification Full Stack",
        achievement4: "Contributeur Open Source",
        quote_text: "\"Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais.\"",
        skills_subtitle: "Ce que j'offre",
        skills_title1: "Compétences",
        skills_title2: "Techniques",
        prog_languages: "Langages de Programmation",
        frontend: "Frontend",
        backend: "Backend & Frameworks",
        databases: "Bases de données :",
        tools: "Outils & Gestion de Versions",
        spoken_languages: "Langues :",
        arabic: "Arabe",
        native: "Natif",
        french: "Français",
        fluent: "Courant",
        english: "Anglais",
        professional: "Professionnel",
        portfolio_subtitle: "Travaux Récents",
        portfolio_title1: "Projets",
        portfolio_title2: "Vedettes",
        portfolio_desc: "Une sélection de mes projets les plus impactants réalisés avec des technologies modernes.",
        all_projects: "Tous les Projets",
        filter_frontend: "Frontend",
        filter_backend: "Backend",
        filter_fullstack: "Full Stack",
        // Café Napoli translations (French)
        cafe_napoli_title: "Café Napoli",
        cafe_napoli_desc: "Site web moderne et responsive pour un café-restaurant avec un design UI élégant",
        cafe_napoli_category: "Site Restaurant",
        cafe_napoli_btn: "Visiter le Site",
        // Other projects
        project1_title: "Portfolio Personnel pour Designer",
        project1_desc: "Conception et développement d'un site portfolio en HTML, CSS et JavaScript pour présenter les réalisations et services d'un designer.",
        project2_title: "Portfolio de Projet de Construction",
        project2_desc: "Présentation des projets réalisés avec des plans détaillés, suivi d'avancement et mises à jour en temps réel.",
        project3_title: "Tableau de Bord Analytique",
        project3_desc: "Tableau de bord interactif pour la visualisation des métriques d'entreprise",
        project4_title: "Application de Gestion de Tâches",
        project4_desc: "Outil collaboratif avec mises à jour en temps réel",
        view_details: "Voir Détails",
        category_frontend: "Frontend",
        category_backend: "Backend",
        category_fullstack: "Full Stack",
        see_more: "Vous voulez voir plus de mon travail ?",
        view_github: "Voir Profil GitHub",
        testimonials_subtitle: "Avis Clients",
        testimonials_title: "Témoignages",
        testimonial1_text: "Ghoummach a livré un portfolio personnel exceptionnel pour moi. Ses compétences techniques, sa créativité et son souci du détail ont dépassé mes attentes. Un projet très professionnel et impressionnant !",
        testimonial2_text: "Travailler avec Ghoummach sur notre système d'inventaire a été une excellente expérience. Sa connaissance de Laravel et l'optimisation des bases de données nous ont aidés à construire une solution robuste.",
        motion_designer: "Motion Designer",
        tech_lead: "Lead Technique",
        contact_subtitle: "Connectons-nous",
        contact_title1: "Contactez",
        contact_title2: "-moi",
        contact_desc: "Vous avez un projet en tête ou souhaitez discuter d'une collaboration potentielle ? J'aimerais avoir de vos nouvelles.",
        contact_info: "Informations de Contact",
        phone_label: "Téléphone",
        email_label: "Email",
        location_label: "Localisation",
        availability: "Disponibilité",
        availability_text: "Actuellement disponible pour des projets freelance. Temps de réponse typique : 24 heures.",
        send_message: "Envoyez-moi un message",
        form_desc: "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
        your_name: "Votre Nom",
        your_email: "Adresse Email",
        your_phone: "Numéro de Téléphone",
        your_message: "Votre Message",
        send_btn: "Envoyer le Message",
        footer_tagline: "Développeur Full Stack",
        footer_text: "Création d'applications web robustes avec des technologies modernes.",
        quick_links: "Liens Rapides",
        services: "Services",
        service1: "Développement Web",
        service2: "Applications Full Stack",
        service3: "Développement d'API",
        service4: "Conception de Base de Données",
        service5: "Développement Frontend",
        connect: "Connexion",
        all_rights: "Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        success_message: "Merci ! Votre message a été envoyé avec succès.",
        error_required: "Ce champ est requis.",
        error_email: "Veuillez entrer une adresse email valide.",
        error_phone: "Veuillez entrer un numéro de téléphone valide à 10 chiffres.",
        error_message: "Le message doit contenir au moins 5 caractères."
    }
};

// ==========================================================================
// Language Switcher
// ==========================================================================
let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Special handling for Café Napoli card (no data-i18n attributes)
    translateCafeNapoli(lang);
    
    // Re-trigger hero animation
    resetHeroAnimation();
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Translate the hardcoded Café Napoli project card
function translateCafeNapoli(lang) {
    // Find the first project-card with data-category="restaurant" (Café Napoli)
    const cafeCard = document.querySelector('.project-card[data-category="restaurant"]');
    if (!cafeCard) return;
    
    // Titles (overlay h3 and info h3)
    const titles = cafeCard.querySelectorAll('.overlay-content h3, .project-info h3');
    titles.forEach(title => {
        if (translations[lang] && translations[lang].cafe_napoli_title) {
            title.textContent = translations[lang].cafe_napoli_title;
        }
    });
    
    // Description paragraph in overlay
    const desc = cafeCard.querySelector('.overlay-content p');
    if (desc && translations[lang] && translations[lang].cafe_napoli_desc) {
        desc.textContent = translations[lang].cafe_napoli_desc;
    }
    
    // Category span in project-meta
    const categorySpan = cafeCard.querySelector('.project-meta .project-category');
    if (categorySpan && translations[lang] && translations[lang].cafe_napoli_category) {
        categorySpan.textContent = translations[lang].cafe_napoli_category;
    }
    
    // Button text in overlay (Visit Website)
    const btn = cafeCard.querySelector('.overlay-content .view-btn');
    if (btn && translations[lang] && translations[lang].cafe_napoli_btn) {
        btn.textContent = translations[lang].cafe_napoli_btn;
    }
}

function resetHeroAnimation() {
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        word.style.animation = 'none';
        word.offsetHeight; // Trigger reflow
        word.style.animation = null;
    });
    
    setTimeout(() => {
        words.forEach((word, index) => {
            word.style.animation = `fadeInUp 0.8s ${index * 0.1}s forwards`;
        });
    }, 100);
}

// ==========================================================================
// DOM Content Loaded - Initialize all functionality
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher first
    initLanguageSwitcher();
    
    // Initialize all other functionality
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
    initDownloadButtons();
    initTypingEffect();
    initEmailJS();
});

// ==========================================================================
// Initialize Language Switcher
// ==========================================================================
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
        currentLanguage = savedLang;
    } else {
        // Detect browser language
        const browserLang = navigator.language.split('-')[0];
        currentLanguage = (browserLang === 'fr') ? 'fr' : 'en';
    }
    
    // Apply initial language
    switchLanguage(currentLanguage);
    
    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });
}

// ==========================================================================
// Navigation - Mobile menu and scroll
// ==========================================================================
function initNavigation() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navList) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = '';
            }
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            }
        }
    });
}

// ==========================================================================
// Scroll Effects - Smooth scrolling and active nav
// ==========================================================================
function initScrollEffects() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    if (sections.length && navLinks.length) {
        window.addEventListener('scroll', function() {
            let current = '';
            const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
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
}

// ==========================================================================
// Animations - Fade in on scroll
// ==========================================================================
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    fadeElements.forEach(element => fadeObserver.observe(element));
    
    setTimeout(() => {
        const words = document.querySelectorAll('.word');
        words.forEach((word, index) => {
            word.style.animation = `fadeInUp 0.8s ${index * 0.1}s forwards`;
        });
    }, 300);
}

// ==========================================================================
// Portfolio Filter
// ==========================================================================
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    if (!filterButtons.length || !projectCards.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
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
    let slideInterval;
    if (!testimonialCards.length) return;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        if (dots.length) dots.forEach(dot => dot.classList.remove('active'));
        const safeIndex = (index + testimonialCards.length) % testimonialCards.length;
        testimonialCards[safeIndex].classList.add('active');
        if (dots.length && dots[safeIndex]) dots[safeIndex].classList.add('active');
        currentIndex = safeIndex;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showTestimonial(index);
            startAutoSlide();
        });
    });
    
    function startAutoSlide() {
        slideInterval = setInterval(() => showTestimonial(currentIndex + 1), 5000);
    }
    startAutoSlide();
}

// ==========================================================================
// Contact Form with EmailJS
// ==========================================================================
function initContactForm() {
    const contactForm = document.getElementById('form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullname = document.getElementById('fullname')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';
        let isValid = true;
        
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
        
        if (!fullname) { showError('fullname', translations[currentLanguage].error_required); isValid = false; }
        if (!email || !/\S+@\S+\.\S+/.test(email)) { showError('email', translations[currentLanguage].error_email); isValid = false; }
        if (!phone || !/^\d{10}$/.test(phone)) { showError('phone', translations[currentLanguage].error_phone); isValid = false; }
        if (!message || message.length < 5) { showError('message', translations[currentLanguage].error_message); isValid = false; }
        if (!isValid) return;
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn?.innerHTML || 'Send Message';
        if (submitBtn) { submitBtn.innerHTML = '<span class="btn-text">Sending...</span>'; submitBtn.disabled = true; }
        
        if (typeof emailjs !== 'undefined') {
            emailjs.send("service_r79ovdm", "template_7fjbo3n", { fullname, email, phone, message })
                .then(() => {
                    const successMsg = document.getElementById('success-msg');
                    if (successMsg) {
                        successMsg.textContent = translations[currentLanguage].success_message;
                        setTimeout(() => successMsg.textContent = '', 5000);
                    }
                    contactForm.reset();
                    if (submitBtn) { submitBtn.innerHTML = originalText; submitBtn.disabled = false; }
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    alert('Failed to send message. Please try again later.');
                    if (submitBtn) { submitBtn.innerHTML = originalText; submitBtn.disabled = false; }
                });
        } else {
            console.warn('EmailJS not loaded');
            const successMsg = document.getElementById('success-msg');
            if (successMsg) {
                successMsg.textContent = translations[currentLanguage].success_message;
                setTimeout(() => successMsg.textContent = '', 3000);
            }
            contactForm.reset();
            if (submitBtn) { submitBtn.innerHTML = originalText; submitBtn.disabled = false; }
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field && field.parentElement) {
        let errorSpan = field.parentElement.querySelector('.error-message');
        if (!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            field.parentElement.appendChild(errorSpan);
        }
        errorSpan.textContent = message;
    }
}

// ==========================================================================
// EmailJS Initialization
// ==========================================================================
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("G1T_YQFURB82uD9n4");
    }
}

// ==========================================================================
// Download Buttons
// ==========================================================================
function initDownloadButtons() {
    const downloadCV = document.getElementById("downloadCV");
    if (downloadCV) {
        downloadCV.addEventListener("click", function(e) {
            e.preventDefault();
            const link = document.createElement("a");
            link.href = "cv.pdf";
            link.download = "Abdelilah_Ghoummach_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    const downloadOffer = document.getElementById("downloadOffer");
    if (downloadOffer) {
        downloadOffer.addEventListener("click", function(e) {
            e.preventDefault();
            const link = document.createElement("a");
            link.href = "offer.pdf";
            link.download = "Abdelilah_Ghoummach_Offer.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

// ==========================================================================
// Magnetic Buttons
// ==========================================================================
function initMagneticButtons() {
    document.querySelectorAll('.magnetic').forEach(button => {
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
        button.addEventListener('mouseleave', function() { this.style.transform = ''; });
    });
}

// ==========================================================================
// Back to Top Button
// ==========================================================================
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================================================
// Utility Functions
// ==========================================================================
function setCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    window.addEventListener('scroll', () => {
        hero.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;
    });
}

function initSkillBars() {
    const bars = document.querySelectorAll('.progress, .fill');
    if (!bars.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => { entry.target.style.width = width; }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    bars.forEach(bar => observer.observe(bar));
}

function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    const original = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < original.length) {
            subtitle.textContent += original.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 30);
}