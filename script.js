console.log('Script version 2 loaded - mobile test');
// Mobile Menu Functionality
class MobileMenu {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.nav = document.querySelector('.nav');
        
        console.log('Burger element:', this.burger);
        console.log('Nav element:', this.nav);
        
        // Проверяем, существуют ли элементы
        if (!this.burger || !this.nav) {
            console.error('Mobile menu elements not found!');
            return;
        }
        
        this.init();
    }

    init() {
        console.log('Initializing mobile menu...');
        
        this.burger.addEventListener('click', (e) => {
            console.log('Burger clicked - mobile version');
            e.stopPropagation();
            this.toggleMenu();
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.nav.classList.contains('active') && 
                !this.nav.contains(e.target) && 
                !this.burger.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Prevent closing when clicking inside nav
        this.nav.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    toggleMenu() {
        console.log('Toggling menu...');
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
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                // Пропускаем пустые якоря
                if (anchor.getAttribute('href') === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
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
        alert('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
        this.form.reset();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    new MobileMenu();
    new SmoothScroll();
    new ContactForm();
    
    console.log('Website initialized successfully!');
});
// Before / After Slider
document.querySelectorAll('.ba-wrap').forEach(wrap => {
    const before = wrap.querySelector('.ba-before');
    const range = wrap.querySelector('.ba-range');

    const update = (value) => {
        before.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
    };

    range.addEventListener('input', (e) => update(e.target.value));
    update(50);
});
