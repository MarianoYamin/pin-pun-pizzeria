/**
 * @archivo    animaciones.ts
 * @modulo     Microanimaciones globales
 * @descripcion Inicializa Lenis (smooth scroll), GSAP ScrollTrigger,
 *              cursor custom magnético, reveal-on-scroll y barra de progreso.
 *              Se importa una vez desde el Layout y aplica en todas las páginas.
 * @dependencias gsap, lenis
 * @version    1.0.0
 */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── 1. Lenis: smooth scroll buttery ─────────────────────────────────────
// Conectamos Lenis al loop de GSAP para que ScrollTrigger reaccione bien.
function inicializarSmoothScroll(): void {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// ── 2. Cursor custom con efecto hover ───────────────────────────────────
function inicializarCursor(): void {
  // En dispositivos táctiles no aplicamos cursor custom
  if (window.matchMedia('(hover: none)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  // Suavizamos el seguimiento con quickTo (más performante que tween por evento)
  const moveX = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
  const moveY = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    moveX(e.clientX);
    moveY(e.clientY);
  });

  // Estado hover sobre links, botones y elementos marcados con [data-cursor]
  const selectoresHover = 'a, button, [data-cursor]';
  document.querySelectorAll(selectoresHover).forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });
}

// ── 3. Reveal on scroll: aparición suave al entrar en viewport ──────────
function inicializarRevealsOnScroll(): void {
  // Elementos con .reveal: fade-up cuando cruzan el viewport
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Líneas de texto con clip-path: aparición desde abajo enmascarada
  document.querySelectorAll<HTMLElement>('.reveal-line > *').forEach((el) => {
    gsap.to(el, {
      y: '0%',
      duration: 1.1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

// ── 4. Split de caracteres en titulares para reveal por letra ───────────
function inicializarSplitChars(): void {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const texto = el.textContent ?? '';
    el.textContent = '';
    // Cada palabra se envuelve para evitar saltos de línea raros
    texto.split(' ').forEach((palabra, idxP, arr) => {
      const wrap = document.createElement('span');
      wrap.style.display = 'inline-block';
      wrap.style.whiteSpace = 'nowrap';
      [...palabra].forEach((char) => {
        const span = document.createElement('span');
        span.className = 'split-char';
        span.textContent = char;
        wrap.appendChild(span);
      });
      el.appendChild(wrap);
      if (idxP < arr.length - 1) el.appendChild(document.createTextNode(' '));
    });

    gsap.from(el.querySelectorAll('.split-char'), {
      yPercent: 110,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.025,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });
}

// ── 5. Barra de progreso de scroll ──────────────────────────────────────
function inicializarBarraProgreso(): void {
  const barra = document.querySelector<HTMLElement>('.scroll-progress__bar');
  if (!barra) return;

  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      barra.style.width = `${self.progress * 100}%`;
    },
  });
}

// ── 6. Botones magnéticos: efecto de atracción del cursor ───────────────
function inicializarBotonesMagneticos(): void {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const fuerza = 0.35;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * fuerza, y: y * fuerza, duration: 0.4, ease: 'power3.out' });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// ── 7. Imagen con clip-path reveal al entrar en viewport ────────────────
function inicializarClipPathReveal(): void {
  document.querySelectorAll<HTMLElement>('[data-clip]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ── 8. Parallax sutil en imágenes con [data-parallax] ───────────────────
function inicializarParallax(): void {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const intensidad = parseFloat(el.dataset.parallax ?? '0.15');
    gsap.to(el, {
      yPercent: -intensidad * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

// ── 9. Loader inicial: contador 1927 → fade out ────────────────────────
function inicializarLoader(): void {
  const loader = document.querySelector<HTMLElement>('.loader');
  if (!loader) return;

  const yearEl = loader.querySelector<HTMLElement>('.loader__year');
  if (yearEl) {
    const valor = { v: 1900 };
    gsap.to(valor, {
      v: 1927,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        yearEl.textContent = Math.floor(valor.v).toString();
      },
    });
  }

  gsap.to(loader, {
    yPercent: -100,
    duration: 1,
    delay: 1.6,
    ease: 'power4.inOut',
    onComplete: () => {
      loader.classList.add('is-done');
      loader.style.display = 'none';
      // disparar entradas iniciales del hero
      document.body.classList.add('is-ready');
    },
  });
}

// ── Inicialización conjunta ────────────────────────────────────────────
function init(): void {
  inicializarLoader();
  inicializarSmoothScroll();
  inicializarCursor();
  inicializarBotonesMagneticos();
  inicializarSplitChars();
  inicializarRevealsOnScroll();
  inicializarClipPathReveal();
  inicializarParallax();
  inicializarBarraProgreso();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
