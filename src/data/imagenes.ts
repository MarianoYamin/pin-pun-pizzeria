/**
 * @archivo    imagenes.ts
 * @modulo     Datos de imágenes
 * @descripcion Catálogo de URLs de Unsplash usadas como placeholders.
 *              Reemplazar por fotos reales de Pin Pun cuando estén disponibles.
 *              Todas las imágenes son de uso libre vía Unsplash (atribuir en Footer).
 * @version    1.0.0
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// ── Hero / portadas ────────────────────────────────────────────────────
export const hero = {
  principal: u('photo-1593504049359-74330189a345', 2200),       // pizza con muzzarella derretida
  alt: 'Pizza al molde recién salida del horno con mozzarella derretida y un toque de albahaca.',
};

// ── Pizzas (carta + galería) ──────────────────────────────────────────
export const pizzas = {
  muzzarella: u('photo-1571407970349-bc81e7e96d47', 1400),
  especial: u('photo-1604068549290-dea0e4a305ca', 1400),
  fugazzeta: u('photo-1565299624946-b28f40a0ae38', 1400),
  verde: u('photo-1601924582970-9238bcb495d9', 1400),
  provolone: u('photo-1574071318508-1cdbab80d002', 1400),
  calabresa: u('photo-1513104890138-7c749659a591', 1400),
  napolitana: u('photo-1604917877934-07d8d248d396', 1400),
  detalle: u('photo-1590947132387-155cc02f3212', 1400),
};

// ── Empanadas y otros platos ──────────────────────────────────────────
export const platos = {
  empanadas: u('photo-1601312378427-822b2b41da35', 1400),
  faina: u('photo-1551185618-5d8633b4c0c5', 1400),
  vermut: u('photo-1571877227200-a0d98ea607e9', 1400),
};

// ── Ambiente / local ──────────────────────────────────────────────────
export const ambiente = {
  salon: u('photo-1555396273-367ea4eb4db5', 2000),               // mesas y luz cálida
  mostrador: u('photo-1517248135467-4c7edcad34c4', 2000),        // barra
  azulejos: u('photo-1559329007-40df8a9345d8', 1400),            // detalle vintage
  exterior: u('photo-1554118811-1e0d58224f24', 1600),
  cocina: u('photo-1555083079-4c93d20da4e4', 1600),
  horno: u('photo-1542834291-c514e77b215f', 1600),
};

// ── Vintage / historia ────────────────────────────────────────────────
export const vintage = {
  blancoNegro1: u('photo-1555992336-fb0d29498b13', 1400),
  blancoNegro2: u('photo-1552566626-52f8b828add9', 1400),
  blancoNegro3: u('photo-1565057650446-bbeefb09c89c', 1400),
};

// ── Galería completa ──────────────────────────────────────────────────
export const galeria = [
  { src: u('photo-1593504049359-74330189a345', 1400), alt: 'Pizza muzzarella al molde recién salida del horno', tipo: 'producto' },
  { src: u('photo-1555396273-367ea4eb4db5', 1400), alt: 'Salón principal con mesas de madera y luz cálida', tipo: 'local' },
  { src: u('photo-1601312378427-822b2b41da35', 1400), alt: 'Empanadas fritas de carne doradas', tipo: 'producto' },
  { src: u('photo-1559329007-40df8a9345d8', 1400), alt: 'Detalle de azulejos blanco y negro vintage', tipo: 'local' },
  { src: u('photo-1565299624946-b28f40a0ae38', 1400), alt: 'Fugazzeta rellena con cebolla y queso', tipo: 'producto' },
  { src: u('photo-1517248135467-4c7edcad34c4', 1400), alt: 'Mostrador y barra de pie', tipo: 'local' },
  { src: u('photo-1604917877934-07d8d248d396', 1400), alt: 'Pizza napolitana con tomate fresco', tipo: 'producto' },
  { src: u('photo-1571877227200-a0d98ea607e9', 1400), alt: 'Vermut con sifón servido en vaso largo', tipo: 'producto' },
  { src: u('photo-1542834291-c514e77b215f', 1400), alt: 'Horno de piedra encendido', tipo: 'local' },
  { src: u('photo-1601924582970-9238bcb495d9', 1400), alt: 'Pizza verde con espinaca y salsa blanca', tipo: 'producto' },
  { src: u('photo-1574071318508-1cdbab80d002', 1400), alt: 'Provolone fundido al horno', tipo: 'producto' },
  { src: u('photo-1555992336-fb0d29498b13', 1400), alt: 'Atmósfera vintage de pizzería porteña', tipo: 'local' },
];
