/**
 * @archivo    menu.ts
 * @modulo     Datos de carta
 * @descripcion Estructura completa del menú de Pin Pun. Precios estimados
 *              en base a información pública (promedio $14-16k por persona).
 *              Editar este archivo es la única fuente para actualizar la carta.
 * @version    1.0.0
 */

export interface MenuItem {
  nombre: string;
  descripcion: string;
  precio: number;        // en pesos argentinos
  destacado?: boolean;   // marca el ítem como recomendado / clásico
  etiqueta?: string;     // ej: "Clásico desde 1927", "Ganadora Muza 5K"
}

export interface MenuCategoria {
  id: string;
  titulo: string;
  subtitulo: string;
  items: MenuItem[];
}

// ── Pizzas al molde — la especialidad de la casa ───────────────────────
const pizzas: MenuItem[] = [
  {
    nombre: 'Muzzarella 500g',
    descripcion: 'La estrella absoluta. Masa al molde alta, crocante en la base, esponjosa adentro, con medio kilo de mozzarella derretida y una pincelada de salsa de tomate San Marzano.',
    precio: 12800,
    destacado: true,
    etiqueta: 'Ganadora Muza 5K 2015',
  },
  {
    nombre: 'Especial Pin-Pun',
    descripcion: 'La que lleva el nombre de la casa: jamón cocido, morrones asados al horno y mozzarella sobre masa al molde. La fórmula que enamoró a Gardel.',
    precio: 14500,
    destacado: true,
    etiqueta: 'De la casa desde 1927',
  },
  {
    nombre: 'Fugazzeta Rellena',
    descripcion: 'Doble masa con mozzarella adentro, cebolla en gajos, orégano y aceite de oliva. La que nunca falla a las once y media de la noche.',
    precio: 14900,
    destacado: true,
  },
  {
    nombre: 'Verde con Salsa Blanca',
    descripcion: 'Mozzarella, espinaca salteada, salsa blanca casera y un toque de nuez moscada. Sutil, distinta, fiel a Pin Pun.',
    precio: 15200,
  },
  {
    nombre: 'Provolone',
    descripcion: 'Provolone fundido en horno de piedra, orégano fresco y aceite de oliva extra virgen. Para los que entienden de quesos.',
    precio: 14800,
  },
  {
    nombre: 'Calabresa',
    descripcion: 'Mozzarella, longaniza calabresa cortada gruesa y aceitunas verdes. La pizza de los viernes.',
    precio: 14200,
  },
  {
    nombre: 'Napolitana',
    descripcion: 'Tomate fresco en rodajas, ajo picado, mozzarella y orégano. Tan simple como perfecta.',
    precio: 13500,
  },
  {
    nombre: 'Anchoas',
    descripcion: 'Mozzarella, filetes de anchoa del Cantábrico, alcaparras y aceite de oliva. Salada, marina, intensa.',
    precio: 14900,
  },
  {
    nombre: 'Roquefort y Jamón',
    descripcion: 'Mozzarella, roquefort cremoso, jamón cocido y nuez. Combinación heredada de los años 50.',
    precio: 15500,
  },
  {
    nombre: 'Jamón y Morrones',
    descripcion: 'Mozzarella, jamón cocido y morrones asados a la parrilla. Clásico irrenunciable.',
    precio: 13900,
  },
];

// ── Empanadas fritas ───────────────────────────────────────────────────
const empanadas: MenuItem[] = [
  {
    nombre: 'Empanada de Carne Frita',
    descripcion: 'Carne cortada a cuchillo, cebolla, comino, pimentón y huevo duro. Frita en aceite limpio. La que recomienda todo cliente.',
    precio: 2200,
    destacado: true,
    etiqueta: 'La favorita del barrio',
  },
  {
    nombre: 'Empanada de Pollo Frita',
    descripcion: 'Pollo desmenuzado, cebolla, morrón y pimentón ahumado. Crocante por fuera, jugosa por dentro.',
    precio: 2200,
  },
  {
    nombre: 'Empanada de Jamón y Queso',
    descripcion: 'Jamón cocido y mozzarella en masa frita dorada. La que se elige para acompañar la pizza.',
    precio: 2100,
  },
  {
    nombre: 'Empanada de Humita',
    descripcion: 'Choclo cremoso, cebolla rehogada y un toque de queso. Tradición porteña al horno.',
    precio: 2100,
  },
];

// ── Acompañamientos ────────────────────────────────────────────────────
const acompanamientos: MenuItem[] = [
  {
    nombre: 'Faina',
    descripcion: 'Harina de garbanzo, aceite de oliva, agua y sal. Cocida en horno de piedra, dorada y crocante en los bordes. Servida caliente.',
    precio: 2800,
    destacado: true,
    etiqueta: 'Pedila a caballo',
  },
  {
    nombre: 'Tabla de Fiambres',
    descripcion: 'Selección de jamón crudo, salame de Tandil, mortadela y queso provolone. Ideal para compartir antes de la pizza.',
    precio: 18500,
  },
  {
    nombre: 'Provolone a la Plancha',
    descripcion: 'Disco de provoleta con orégano, ají molido y aceite de oliva. Servido en plato de hierro caliente.',
    precio: 9800,
  },
];

// ── Postres ────────────────────────────────────────────────────────────
const postres: MenuItem[] = [
  {
    nombre: 'Flan Casero con Dulce de Leche',
    descripcion: 'Flan de huevo de receta familiar, dulce de leche colonial y crema. Como en casa de la nonna.',
    precio: 5800,
    destacado: true,
  },
  {
    nombre: 'Tiramisú',
    descripcion: 'Bizcochos de vainilla embebidos en café, mascarpone batido y cacao amargo en polvo.',
    precio: 6500,
  },
  {
    nombre: 'Queso y Dulce',
    descripcion: 'Queso fresco de campo y dulce de batata o membrillo. El final clásico de la mesa porteña.',
    precio: 4500,
  },
  {
    nombre: 'Helado Artesanal',
    descripcion: 'Dos bochas. Sabores: dulce de leche granizado, sambayón, chocolate amargo, limón.',
    precio: 4800,
  },
];

// ── Bebidas ────────────────────────────────────────────────────────────
const bebidas: MenuItem[] = [
  {
    nombre: 'Cerveza Tirada Pinta',
    descripcion: 'Quilmes cristal o rubia artesanal local. Tirada en pinta de medio litro, fría como debe ser.',
    precio: 3800,
  },
  {
    nombre: 'Vino de la Casa (copa)',
    descripcion: 'Malbec o Chardonnay seleccionado. Servido en copa.',
    precio: 3200,
  },
  {
    nombre: 'Vino de la Casa (botella)',
    descripcion: 'Malbec mendocino o Chardonnay. Botella de 750ml.',
    precio: 14500,
  },
  {
    nombre: 'Gaseosa Línea Coca',
    descripcion: 'Coca, Sprite, Fanta. Línea 500ml en botella de vidrio.',
    precio: 2800,
  },
  {
    nombre: 'Agua con o sin gas',
    descripcion: 'Botella de 500ml.',
    precio: 2200,
  },
  {
    nombre: 'Vermut Cinzano con Sifón',
    descripcion: 'Vermut Cinzano servido en vaso largo, sifón, hielo y rodaja de naranja. Como mandan los años 40.',
    precio: 4200,
  },
];

// ── Estructura completa de la carta ────────────────────────────────────
export const carta: MenuCategoria[] = [
  {
    id: 'pizzas',
    titulo: 'Pizzas al molde',
    subtitulo: 'Diez de las treinta y una variedades de la casa. Masa alta, fermentación lenta de 24 horas, horno de piedra.',
    items: pizzas,
  },
  {
    id: 'empanadas',
    titulo: 'Empanadas fritas',
    subtitulo: 'Carne cortada a cuchillo, repulgue manual, fritura justa. La razón por la que muchos vienen.',
    items: empanadas,
  },
  {
    id: 'acompanamientos',
    titulo: 'Acompañamientos',
    subtitulo: 'Para empezar la mesa o para sumar a la pizza.',
    items: acompanamientos,
  },
  {
    id: 'postres',
    titulo: 'Postres',
    subtitulo: 'Recetas heredadas. Sin atajos.',
    items: postres,
  },
  {
    id: 'bebidas',
    titulo: 'Bebidas',
    subtitulo: 'Vinos de Mendoza, cerveza tirada y el clásico vermut con sifón.',
    items: bebidas,
  },
];

/**
 * Formatea un precio en pesos argentinos con puntos de miles.
 * Ejemplo: 14500 → "$14.500"
 */
export function formatearPrecio(precio: number): string {
  return `$${precio.toLocaleString('es-AR')}`;
}
