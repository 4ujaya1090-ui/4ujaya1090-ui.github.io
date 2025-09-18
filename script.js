// script.js - выносим весь JavaScript из HTML

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('nav-open');
      document.body.style.overflow = expanded ? '' : 'hidden';
    });
  }

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Reveal animation
  const revealOnScroll = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('inview');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // Before/After slider
  document.querySelectorAll('.ba-wrap').forEach(wrap => {
    const before = wrap.querySelector('.ba-before');
    const range = wrap.querySelector('.ba-range');
    
    if (before && range) {
      const update = (v) => {
        const percent = v;
        before.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
      };
      
      range.addEventListener('input', (e) => update(e.target.value));
      update(range.value || 50);
      
      // Добавляем обработчик для перетаскивания мышью
      wrap.addEventListener('click', (e) => {
        const rect = wrap.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        range.value = percent;
        update(percent);
      });
    }
  });
});
