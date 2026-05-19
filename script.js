// script.js - Complete functionality with Language Switcher

// ==========================================================================
// Translations Data
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

        hero_subtitle:
            "I specialize in building modern and responsive websites using HTML, CSS, JavaScript, Laravel, and React.",

        download_cv: "Download My CV",
        our_offer: "My Offer",
        contact_me: "Contact Me",
        years_exp: "Years Experience",
        scroll_down: "Scroll Down",

        about_subtitle: "Get to Know Me",
        about_title1: "About",
        about_title2: "Me",

        about_intro:
            "I'm a passionate full-stack developer with 3+ years of experience crafting robust web applications.",

        about_bio:
            "My journey in programming started with C++, and I've since expanded my expertise to include modern web technologies.",

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

        quote_text:
            "\"Code is like humor. When you have to explain it, it's bad.\"",


        // Skills
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


        // Portfolio
        portfolio_subtitle: "Recent Work",
        portfolio_title1: "Featured",
        portfolio_title2: "Projects",

        portfolio_desc:
            "A selection of my most impactful projects built with modern technologies.",

        all_projects: "All Projects",
        filter_frontend: "Frontend",
        filter_backend: "Backend",
        filter_fullstack: "Full Stack",


        // Project 1
        project1_title: "Personal Portfolio for Designer",
        project1_desc:
            "Design and development of a portfolio website in HTML, CSS and JavaScript.",


        // Project 2
        project2_title: "Construction Project Portfolio",
        project2_desc:
            "Showcasing completed projects with detailed plans and real-time updates.",


        // Project 3 UPDATED
        project3_title: "Café Napoli",
        project3_desc:
            "Modern and responsive café restaurant website with elegant UI design",


        // Project 4
        project4_title: "Task Management App",
        project4_desc:
            "Collaborative tool with real-time updates",


        view_details: "View Details",

        category_frontend: "Frontend",
        category_backend: "Backend",
        category_fullstack: "Full Stack",

        see_more: "Want to see more of my work?",
        view_github: "View GitHub Profile",


        // Testimonials
        testimonials_subtitle: "Client Feedback",
        testimonials_title: "Testimonials",

        testimonial1_text:
            "Ghoummach delivered an outstanding personal portfolio for me.",

        testimonial2_text:
            "Working with Ghoummach on our inventory system was a great experience.",

        motion_designer: "Motion Designer",
        tech_lead: "Tech Lead",


        // Contact
        contact_subtitle: "Let's Connect",
        contact_title1: "Get In",
        contact_title2: "Touch",

        contact_desc:
            "Have a project in mind or want to discuss potential collaboration?",

        contact_info: "Contact Information",

        phone_label: "Phone",
        email_label: "Email",
        location_label: "Location",

        availability: "Availability",
        availability_text:
            "Currently accepting freelance projects.",

        send_message: "Send Me a Message",

        form_desc:
            "Fill out the form below and I'll get back to you as soon as possible.",

        your_name: "Your Name",
        your_email: "Email Address",
        your_phone: "Phone Number",
        your_message: "Your Message",

        send_btn: "Send Message",


        // Footer
        footer_tagline: "Full Stack Developer",

        footer_text:
            "Building robust web applications with modern technologies.",

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

        success_message:
            "Thank you! Your message has been sent successfully.",

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

        hero_subtitle:
            "Je suis spécialisé dans la création de sites web modernes et responsives.",

        download_cv: "Télécharger mon CV",

        our_offer: "Mon Offre",

        contact_me: "Me Contacter",

        years_exp: "Années d'Expérience",

        scroll_down: "Défiler",


        // About
        about_subtitle: "Apprenez à me connaître",

        about_title1: "À propos",
        about_title2: "de moi",

        about_intro:
            "Je suis un développeur full-stack passionné avec plus de 3 ans d'expérience.",

        about_bio:
            "Mon parcours en programmation a commencé avec le C++.",

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

        quote_text:
            "\"Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais.\"",


        // Skills
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


        // Portfolio
        portfolio_subtitle: "Travaux Récents",

        portfolio_title1: "Projets",
        portfolio_title2: "Vedettes",

        portfolio_desc:
            "Une sélection de mes projets les plus impactants.",

        all_projects: "Tous les Projets",

        filter_frontend: "Frontend",
        filter_backend: "Backend",
        filter_fullstack: "Full Stack",


        // Project 1
        project1_title: "Portfolio Personnel pour Designer",

        project1_desc:
            "Conception et développement d'un site portfolio.",


        // Project 2
        project2_title: "Portfolio de Projet de Construction",

        project2_desc:
            "Présentation des projets réalisés avec suivi détaillé.",


        // Project 3 UPDATED
        project3_title: "Café Napoli",

        project3_desc:
            "Site web moderne et responsive pour un café restaurant avec une interface élégante",


        // Project 4
        project4_title: "Application de Gestion de Tâches",

        project4_desc:
            "Outil collaboratif avec mises à jour en temps réel",


        view_details: "Voir Détails",

        category_frontend: "Frontend",
        category_backend: "Backend",
        category_fullstack: "Full Stack",

        see_more: "Vous voulez voir plus de mon travail ?",

        view_github: "Voir Profil GitHub",


        // Testimonials
        testimonials_subtitle: "Avis Clients",

        testimonials_title: "Témoignages",

        testimonial1_text:
            "Ghoummach a livré un portfolio personnel exceptionnel.",

        testimonial2_text:
            "Travailler avec Ghoummach a été une excellente expérience.",

        motion_designer: "Motion Designer",
        tech_lead: "Lead Technique",


        // Contact
        contact_subtitle: "Connectons-nous",

        contact_title1: "Contactez",
        contact_title2: "-moi",

        contact_desc:
            "Vous avez un projet en tête ou souhaitez discuter d'une collaboration ?",

        contact_info: "Informations de Contact",

        phone_label: "Téléphone",
        email_label: "Email",
        location_label: "Localisation",

        availability: "Disponibilité",

        availability_text:
            "Disponible actuellement pour des projets freelance.",

        send_message: "Envoyez-moi un message",

        form_desc:
            "Remplissez le formulaire ci-dessous.",

        your_name: "Votre Nom",
        your_email: "Adresse Email",
        your_phone: "Numéro de Téléphone",
        your_message: "Votre Message",

        send_btn: "Envoyer le Message",


        // Footer
        footer_tagline: "Développeur Full Stack",

        footer_text:
            "Création d'applications web robustes avec des technologies modernes.",

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

        success_message:
            "Merci ! Votre message a été envoyé avec succès.",

        error_required: "Ce champ est requis.",
        error_email: "Veuillez entrer une adresse email valide.",
        error_phone: "Veuillez entrer un numéro valide.",
        error_message: "Le message doit contenir au moins 5 caractères."
    }
};