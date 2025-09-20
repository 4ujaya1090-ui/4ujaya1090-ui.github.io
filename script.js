// Mobile Menu Functionality
class MobileMenu {
    constructor() {
        this.burger = document.querySelector('burger');
        this.nav = document.querySelector('nav');
        this.init();
    }

    init() {
        this.burger.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && !this.burger.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isExpanded = this.burger.getAttribute('aria-expanded') === 'true';
        this.burger.setAttribute('aria-expanded', !isExpanded);
        this.burger.classList.toggle('active');
        this.nav.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    closeMenu() {
        this.burger.setAttribute('aria-expanded', 'false');
        this.burger.classList.remove('active');
        this.nav.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Smooth Scroll for Anchor Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Плавная прокрутка - ИСПРАВЛЕННАЯ ВЕРСИЯ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Пропускаем ссылки с только "#" (они никуда не ведут)
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
    }
}

// Form Handling
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Here you can add form validation and submission logic
        // For now, just show a success message
        alert('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
        this.form.reset();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new SmoothScroll();
    new ContactForm();
    
    // Add any additional initialization here
    console.log('Website initialized successfully!');
});

// Additional utility functions can be added here
