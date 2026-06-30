/* ================================================
   MAIS CONTABILIDADE - JavaScript Principal
   Funcionalidades Gerais do Site
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
  initMenuMobile();
  initNavigation();
  initScrollAnimations();
});

/* ================================================
   MENU MOBILE
   ================================================ */

function initMenuMobile() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');

  if (!menuToggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('ativo', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');

    // Animação visual do toggle (hambúrguer -> X)
    const spans = menuToggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translateY(10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      spans[0].style.transform = 'rotate(0) translateY(0)';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'rotate(0) translateY(0)';
    }
  }

  menuToggle.addEventListener('click', function() {
    setOpen(!nav.classList.contains('ativo'));
  });

  // Fechar menu ao clicar em um link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
}

/* ================================================
   NAVEGAÇÃO - LINK ATIVO
   ================================================ */

function initNavigation() {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');

    // Ignora links externos (WhatsApp) e âncoras
    if (!href || href.startsWith('http') || href.startsWith('#')) return;

    if (href === '/' && (currentPage === '/' || currentPage.endsWith('index.html'))) {
      link.classList.add('ativo');
    } else if (href !== '/' && currentPage.includes(href)) {
      link.classList.add('ativo');
    }
  });
}

/* ================================================
   ANIMAÇÕES DE SCROLL
   ================================================ */

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.card, .servico-card, .sobre-content');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/* ================================================
   HEADER COM SOMBRA AO ROLAR
   ================================================ */

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 50);
});
