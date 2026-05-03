/**
 * @archivo    animaciones.ts
 * @modulo     Microanimaciones globales
 * @descripcion Smooth scroll (Lenis), reveals (IntersectionObserver),
 *              parallax (GSAP) y loader. Sin cursor custom.
 *              Diseñado para fallar de forma segura: si JS no carga,
 *              el contenido sigue siendo visible.
 * @dependencias gsap, lenis
 * @version    1.1.0
 */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── 0. Marcar que JS cargó (activa el modo animado en CSS) ──────────────
// Apenas el script corre, el HTML obtiene la clase 'js-ready'.
// Las clases .reveal sólo se vuelven invisibles cuando js-ready está presente,
// así que si JS falla, el contenido se ve normalmente.
document.documentElement.classList.add('js-ready');

// Safety net: pase lo que pase con el resto del script, después de 4s
// forzamos visible cualquier elemento que no se haya revelado.
const safetyNet = setTimeout(() => {
  document.querySelectorAll('.reveal:not(.is-visible), [data-split]:not(.is-visible)').forEach((el) => {
    el.classList.add('is-visible');
  });
}, 4000);

// ── 1. Lenis: smooth scroll buttery ─────────────────────────────────────
function inicializarSmoothScroll(): void {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// ── 2. Reveal on scroll con IntersectionObserver ────────────────────────
// Más simple, más confiable y mucho más liviano que ScrollTrigger
// para apariciones básicas.
function inicializarRevealsOnScroll(): void {
  // Tratamos .reveal y [data-split] (titulares editoriales) como elementos
  // animables al entrar en viewport.
  const elementos = document.querySelectorAll<HTMLElement>('.reveal, [data-split]');
  if (elementos.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05,
    }
  );

  elementos.forEach((el) => observer.observe(el));

  // En la primera pantalla, mostrar inmediatamente lo que ya está visible
  // (sin esperar al scroll) para que el hero no empiece vacío.
  requestAnimationFrame(() => {
    elementos.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  });
}

// ── 3. Botones magnéticos: efecto de atracción del cursor ───────────────
function inicializarBotonesMagneticos(): void {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const fuerza = 0.25;

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

// ── 4. Parallax sutil en imágenes ───────────────────────────────────────
function inicializarParallax(): void {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const intensidad = parseFloat(el.dataset.parallax ?? '0.12');
    gsap.to(el, {
      yPercent: -intensidad * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });
}

// ── 5. Barra de progreso de scroll ──────────────────────────────────────
function inicializarBarraProgreso(): void {
  const barra = document.querySelector<HTMLElement>('.scroll-progress__bar');
  if (!barra) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progreso = total > 0 ? (window.scrollY / total) * 100 : 0;
      barra.style.width = `${progreso}%`;
      ticking = false;
    });
  });
}

// ── 6. Loader inicial: contador 1900 → 1927 → fade out ─────────────────
function inicializarLoader(): void {
  const loader = document.querySelector<HTMLElement>('.loader');
  if (!loader) {
    document.body.classList.add('is-ready');
    return;
  }

  const yearEl = loader.querySelector<HTMLElement>('.loader__year');

  // Safety: si algo falla, el loader se va igual a los 2.5s
  const safetyLoader = setTimeout(() => cerrarLoader(), 2500);

  function cerrarLoader() {
    clearTimeout(safetyLoader);
    if (!loader || loader.classList.contains('is-done')) return;
    loader.classList.add('is-done');
    document.body.classList.add('is-ready');
    setTimeout(() => {
      if (loader) loader.style.display = 'none';
    }, 800);
  }

  if (yearEl) {
    const valor = { v: 1900 };
    gsap.to(valor, {
      v: 1927,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        yearEl.textContent = Math.floor(valor.v).toString();
      },
      onComplete: () => {
        gsap.delayedCall(0.4, cerrarLoader);
      },
    });
  } else {
    gsap.delayedCall(1.4, cerrarLoader);
  }
}

// ── Inicialización conjunta ────────────────────────────────────────────
function init(): void {
  try {
    inicializarLoader();
    inicializarSmoothScroll();
    inicializarBotonesMagneticos();
    inicializarRevealsOnScroll();
    inicializarParallax();
    inicializarBarraProgreso();
  } catch (error) {
    // Si algo se rompe, garantizamos que el contenido se vea
    console.error('[Pin Pun] Error inicializando animaciones:', error);
    document.body.classList.add('is-ready');
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    clearTimeout(safetyNet);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
