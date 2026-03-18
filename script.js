console.log('Script loaded');

class MobileMenu {
    constructor() {
        this.burger = document.querySelector('.burger');
        this.nav = document.querySelector('.nav');

        if (!this.burger || !this.nav) return;

        this.init();
    }

    init() {
        this.burger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        document.addEventListener('click', (e) => {
            if (
                this.nav.classList.contains('active') &&
                !this.nav.contains(e.target) &&
                !this.burger.contains(e.target)
            ) {
                this.closeMenu();
            }
        });

        this.nav.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    toggleMenu() {
        const isExpanded = this.burger.getAttribute('aria-expanded') === 'true';

        this.burger.setAttribute('aria-expanded', String(!isExpanded));
        this.burger.classList.toggle('active');
        this.nav.classList.toggle('active');

        document.body.style.overflow = isExpanded ? 'hidden' : '';
    }

    closeMenu() {
        this.burger.setAttribute('aria-expanded', 'false');
        this.burger.classList.remove('active');
        this.nav.classList.remove('active');
        document.body.style.overflow = '';
    }
}

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }
}

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');

        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Спасибо! Ваша заявка принята. Я свяжусь с вами в ближайшее время.');
        this.form.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new SmoothScroll();
    new ContactForm();
    console.log('Website initialized successfully!');
});
