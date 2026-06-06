/* ================================================
   MAIS CONTABILIDADE - JavaScript Principal
   Funcionalidades Gerais do Site
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
  initMenuMobile();
  initNavigation();
  initScrollAnimations();
  initFormValidation();
});

/* ================================================
   MENU MOBILE
   ================================================ */

function initMenuMobile() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('ativo');
      
      // Animação visual do toggle
      const spans = this.querySelectorAll('span');
      if (nav.classList.contains('ativo')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
      } else {
        spans[0].style.transform = 'rotate(0) translateY(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0)';
      }
    });

    // Fechar menu ao clicar em um link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('ativo');
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translateY(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0)';
      });
    });
  }
}

/* ================================================
   NAVEGAÇÃO - ATIVO
   ================================================ */

function initNavigation() {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname;

  links.forEach(link => {
    let href = link.getAttribute('href');
    
    // Normalizar URLs para comparação
    if (href === '/' && (currentPage === '/' || currentPage.endsWith('index.html'))) {
      link.classList.add('ativo');
    } else if (href !== '/' && currentPage.includes(href)) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
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
   FORMULÁRIO DE CONTATO
   ================================================ */

function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    // Limpar classes anteriores
    input.classList.remove('error');

    if (input.hasAttribute('required')) {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      }
    }

    // Validação de email
    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        input.classList.add('error');
        isValid = false;
      }
    }

    // Validação de telefone
    if (input.type === 'tel' && input.value) {
      const phoneRegex = /^[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(input.value)) {
        input.classList.add('error');
        isValid = false;
      }
    }
  });

  return isValid;
}

/* ================================================
   UTILITÁRIOS
   ================================================ */

// Função para smooth scroll (fallback para navegadores antigos)
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Função para adicionar classe de scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    if (!header.classList.contains('scrolled')) {
      header.classList.add('scrolled');
    }
  } else {
    header.classList.remove('scrolled');
  }
});

// Função para copiar para clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    // Feedback ao usuário
    console.log('Copiado para clipboard!');
  }).catch(function(err) {
    console.error('Erro ao copiar:', err);
  });
}

// Inicialização de tooltips (se necessário)
function initTooltips() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', function() {
      const text = this.getAttribute('data-tooltip');
      // Implementar lógica de tooltip aqui
    });
  });
}

/* ================================================
   PERFORMANCE
   ================================================ */

// Lazy loading de imagens
if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}
