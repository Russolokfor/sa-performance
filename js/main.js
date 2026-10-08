/**
 * S.A PERFORMANCE — SCRIPT DE INTERAÇÃO E ACESSIBILIDADE
 * =======================================================
 * Responsável por:
 * - Menu móvel acessível (aria-expanded, controle via teclado, fechar com ESC)
 * - Rastreamento de rolagem suave e link ativo no menu
 * - Botão de voltar ao topo
 * - Sincronização dinâmica de contatos configuráveis (js/site-config.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSmoothScroll();
  initScrollSpy();
  initBackToTop();
  syncContactConfig();
});

/**
 * Menu móvel acessível
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  function toggleMenu(forceClose = false) {
    const isCurrentlyOpen = navMenu.classList.contains('is-open');
    const shouldOpen = forceClose ? false : !isCurrentlyOpen;

    navMenu.classList.toggle('is-open', shouldOpen);
    toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    
    // Altera o ícone do toggle
    toggleBtn.innerHTML = shouldOpen
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Fechar ao clicar em um link do menu
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        toggleMenu(true);
      }
    });
  });

  // Fechar com a tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleMenu(true);
      toggleBtn.focus();
    }
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && 
        !navMenu.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });
}

/**
 * Rolagem suave com gerenciamento de foco para acessibilidade
 */
function initSmoothScroll() {
  // Seleciona apenas links de âncora pura da mesma página (href começa exatamente com "#")
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Ignora links que não são âncoras puras da mesma página
      if (!href || href === '#' || !href.startsWith('#')) return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const targetId = href;
        
        // Rolagem com respeito a movimento reduzido
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetEl.scrollIntoView({
          behavior: prefersReduced ? 'auto' : 'smooth',
          block: 'start'
        });

        // Atualizar foco acessível
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });

        // Atualiza a URL sem causar salto abrupto
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });
}

/**
 * Rastreamento de seção ativa na barra de navegação
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}` || href.endsWith(`#${currentId}`)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/**
 * Botão Voltar ao Topo
 */
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top-btn');
  if (!backBtn) return;

  backBtn.addEventListener('click', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  });
}

/**
 * Sincronização e Renderização Dinâmica de Contatos baseada em SITE_CONFIG
 * Mantém integridade total: não gera links fictícios se não estiverem ativados.
 */
function syncContactConfig() {
  if (typeof window.SITE_CONFIG === 'undefined') return;

  const config = window.SITE_CONFIG;
  const whatsappCard = document.getElementById('card-whatsapp');
  const emailCard = document.getElementById('card-email');
  const instagramCard = document.getElementById('card-instagram');

  // WhatsApp
  if (whatsappCard && config.contato.whatsapp.ativo) {
    whatsappCard.querySelector('.contact-status-tag').innerHTML = `
      <span class="status-indicator-dot active" aria-hidden="true"></span>
      <span>${config.contato.whatsapp.numeroFormatado || 'Disponível'}</span>
    `;
    if (config.contato.whatsapp.link) {
      whatsappCard.setAttribute('href', config.contato.whatsapp.link);
      whatsappCard.setAttribute('target', '_blank');
      whatsappCard.setAttribute('rel', 'noopener noreferrer');
      whatsappCard.classList.add('card-clickable');
    }
  }

  // E-mail
  if (emailCard && config.contato.email.ativo) {
    emailCard.querySelector('.contact-status-tag').innerHTML = `
      <span class="status-indicator-dot active" aria-hidden="true"></span>
      <span>${config.contato.email.endereco || 'Disponível'}</span>
    `;
    if (config.contato.email.link) {
      emailCard.setAttribute('href', config.contato.email.link);
      emailCard.classList.add('card-clickable');
    }
  }

  // Instagram
  if (instagramCard && config.contato.instagram.ativo) {
    instagramCard.querySelector('.contact-status-tag').innerHTML = `
      <span class="status-indicator-dot active" aria-hidden="true"></span>
      <span>${config.contato.instagram.usuario || 'Disponível'}</span>
    `;
    if (config.contato.instagram.link) {
      instagramCard.setAttribute('href', config.contato.instagram.link);
      instagramCard.setAttribute('target', '_blank');
      instagramCard.setAttribute('rel', 'noopener noreferrer');
      instagramCard.classList.add('card-clickable');
    }
  }
}
