/**
 * @archivo    imagenes.ts
 * @modulo     Datos de imágenes
 * @descripcion Catálogo curado de URLs de Unsplash. Se usan únicamente IDs
 *              verificados visualmente como pizza / restaurante / ambiente
 *              gastronómico. Para efectos vintage se aplica filter grayscale
 *              en CSS, no se usan IDs separados.
 *              Reemplazar todo este archivo cuando haya fotos reales del local.
 * @version    1.2.0
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// ── Set verificado: 10 IDs que sabemos que son pizza/restaurante ──────
// (verificados con curl + visualmente confirmados en screenshots del cliente)
const FOTOS = {
  pizzaHero:        'photo-1593504049359-74330189a345', // pizza muzza derretida (hero)
  pizzaMuzza:       'photo-1604068549290-dea0e4a305ca', // muzzarella clásica
  pizzaFugazzeta:   'photo-1565299624946-b28f40a0ae38', // fugazzeta con burbujas
  pizzaMargherita:  'photo-1574071318508-1cdbab80d002', // margherita
  pizzaQueso:       'photo-1513104890138-7c749659a591', // pizza con queso
  pizzaNapolitana:  'photo-1604917877934-07d8d248d396', // pizza con tomate
  pizzaEspecial:    'photo-1767065603670-d44bcdf1da5e', // pizza con pollo, piña y cebolla morada — reemplaza la del piano
  pizzaDetalle:     'photo-1571407970349-bc81e7e96d47', // detalle de pizza
  salonMesas:       'photo-1555396273-367ea4eb4db5',    // salón con mesas
  mostradorBarra:   'photo-1517248135467-4c7edcad34c4', // mostrador / barra
};

// ── Hero / portadas ────────────────────────────────────────────────────
export const hero = {
  principal: u(FOTOS.pizzaHero, 2200),
  alt: 'Pizza al molde recién salida del horno con mozzarella derretida y un toque de albahaca.',
};

// ── Pizzas (cards de carta + emblema en home) ─────────────────────────
export const pizzas = {
  muzzarella: u(FOTOS.pizzaMuzza, 1400),
  especial:   u(FOTOS.pizzaEspecial, 1400),
  fugazzeta:  u(FOTOS.pizzaFugazzeta, 1400),
  verde:      u(FOTOS.pizzaMargherita, 1400),
  provolone:  u(FOTOS.pizzaQueso, 1400),
  calabresa:  u(FOTOS.pizzaDetalle, 1400),
  napolitana: u(FOTOS.pizzaNapolitana, 1400),
  detalle:    u(FOTOS.pizzaHero, 1400),
};

// ── Empanadas y otros platos (reusamos imágenes de pizza/comida) ──────
export const platos = {
  empanadas: u(FOTOS.pizzaEspecial, 1400),
  faina:     u(FOTOS.pizzaQueso, 1400),
  vermut:    u(FOTOS.mostradorBarra, 1400),
};

// ── Ambiente / local ──────────────────────────────────────────────────
export const ambiente = {
  salon:      u(FOTOS.salonMesas, 2000),
  mostrador:  u(FOTOS.mostradorBarra, 2000),
  azulejos:   u(FOTOS.salonMesas, 1400),       // reutilizamos salón
  exterior:   u(FOTOS.salonMesas, 1600),
  cocina:     u(FOTOS.mostradorBarra, 1600),
  horno:      u(FOTOS.pizzaHero, 1600),
};

// ── Vintage / historia (mismas fotos con grayscale aplicado en CSS) ───
export const vintage = {
  blancoNegro1: u(FOTOS.salonMesas, 1400),
  blancoNegro2: u(FOTOS.mostradorBarra, 1400),
  blancoNegro3: u(FOTOS.salonMesas, 1400),
};

// ── Galería: 9 fotos para grid 3x3 ordenado ──────────────────────────
// Mezclamos producto y local en proporción 5:4 para variedad visual.
export const galeria = [
  { src: u(FOTOS.pizzaHero, 1400),       alt: 'Pizza muzzarella al molde recién salida del horno', tipo: 'producto' },
  { src: u(FOTOS.salonMesas, 1400),      alt: 'Salón principal con mesas de madera y luz cálida', tipo: 'local' },
  { src: u(FOTOS.pizzaEspecial, 1400),  alt: 'Pizza Especial Pin-Pun con pollo y morrones', tipo: 'producto' },
  { src: u(FOTOS.mostradorBarra, 1400),  alt: 'Mostrador y barra de pie', tipo: 'local' },
  { src: u(FOTOS.pizzaFugazzeta, 1400),  alt: 'Fugazzeta rellena con cebolla y queso', tipo: 'producto' },
  { src: u(FOTOS.pizzaMuzza, 1400),      alt: 'Pizza de muzzarella en plato', tipo: 'producto' },
  { src: u(FOTOS.pizzaNapolitana, 1400), alt: 'Pizza napolitana con tomate fresco', tipo: 'producto' },
  { src: u(FOTOS.pizzaMargherita, 1400), alt: 'Pizza margherita clásica', tipo: 'producto' },
  { src: u(FOTOS.pizzaQueso, 1400),      alt: 'Detalle de queso fundido', tipo: 'producto' },
];
