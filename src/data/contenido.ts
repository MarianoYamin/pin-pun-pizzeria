/**
 * @archivo    contenido.ts
 * @modulo     Datos editoriales del sitio
 * @descripcion Centraliza textos largos, anécdotas, citas y datos de contacto
 *              para que cualquier cambio editorial se haga acá sin tocar las páginas.
 * @version    1.0.0
 */

// ── Datos del negocio ─────────────────────────────────────────────────
export const negocio = {
  nombre: 'Pin Pun',
  slogan: 'Pizzería desde 1927',
  fundacion: 1927,
  ubicaciones: [
    {
      nombre: 'Almagro',
      direccion: 'Av. Corrientes 3954',
      ciudad: 'Almagro · CABA',
      telefonos: ['11 4862-3260', '11 4862-0325', '11 4862-0925'],
      horarios: 'Lunes a sábados · 8:00 a 00:00',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pin+Pun+Av+Corrientes+3954',
    },
    {
      nombre: 'Villa Urquiza',
      direccion: 'La Pampa 5201',
      ciudad: 'Villa Urquiza · CABA',
      telefonos: ['11 4524-0444'],
      horarios: 'Martes a domingos · 18:00 a 00:30',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pin+Pun+La+Pampa+5201',
    },
  ],
  redes: {
    instagram: 'https://www.instagram.com/pinpuncorrientes/',
    instagramHandle: '@pinpuncorrientes',
  },
};

// ── Pilares de experiencia (página Experiencia + teaser en Inicio) ────
export const pilares = [
  {
    numero: '01',
    titulo: 'El salón de azulejos',
    bajada:
      'Azulejos blanco y negro de cuando se hacían a mano, carteles luminosos colgantes que parpadean igual que en 1950, mesas de madera que escucharon más conversaciones que cualquier diario. Entrar es cambiar de década.',
  },
  {
    numero: '02',
    titulo: 'La pizza al molde',
    bajada:
      'Masa con fermentación de 24 horas, alta y aireada por dentro, crocante en la base. Mozzarella entera derretida, salsa de tomate San Marzano y horno de piedra que jamás se apaga del todo. La fórmula no cambió en casi cien años.',
  },
  {
    numero: '03',
    titulo: 'La barra al paso',
    bajada:
      'El mostrador central es el corazón del lugar. Una porción de muzzarella, una de fugazzeta, una copa de vermut con sifón. De pie, en cinco minutos, sin reservar ni esperar mesa. Como pedía Gardel cuando paraba camino al teatro.',
  },
  {
    numero: '04',
    titulo: 'El mostrador y la mesa',
    bajada:
      'Mozos profesionales que conocen los nombres, los pedidos y los aniversarios. Si venís de chico, te van a reconocer. Si venís por primera vez, te van a recibir como si volvieras. Esa diferencia se nota.',
  },
];

// ── Manifiesto de la casa (página Historia) ────────────────────────────
export const manifiesto = [
  {
    numero: '01',
    titulo: 'Honrar la receta',
    texto:
      'Lo que funcionó en 1927 sigue funcionando. La masa se amasa, no se compra. La salsa se hace, no se abre. El horno se enciende temprano, no se prende solo.',
  },
  {
    numero: '02',
    titulo: 'Almagro como casa',
    texto:
      'La esquina de Corrientes y Medrano no es un punto en un mapa. Es un barrio que vio crecer la pizzería, y una pizzería que vio cambiar el barrio. La identidad es mutua.',
  },
  {
    numero: '03',
    titulo: 'El al paso como derecho',
    texto:
      'Una porción rápida de pie en el mostrador es tan importante como la cena de domingo. Pin Pun nació democrática. Ese código no se negocia.',
  },
  {
    numero: '04',
    titulo: 'Atender personas, no clientes',
    texto:
      'Acá nadie es número de mesa. Quien entra es alguien con nombre, con apuro o con tiempo, con hambre o con frío. La atención empieza ahí.',
  },
];

// ── Hitos / línea de tiempo (página Historia) ──────────────────────────
export const hitos = [
  {
    anio: '1927',
    titulo: 'Las puertas se abren',
    texto:
      'Inmigrantes italianos —los mismos que cinco años después fundarían Güerrín— levantan la persiana en Av. Corrientes 3954. Almagro era barrio de tango y obreros.',
  },
  {
    anio: '1934',
    titulo: 'Gardel, habitué',
    texto:
      'Carlos Gardel, que tenía su casa a pocas cuadras, paraba seguido a comerse una porción al paso antes de entrar al teatro. La leyenda dice que pedía Especial: jamón, morrón y muzzarella.',
  },
  {
    anio: '1950',
    titulo: 'La edad dorada del molde',
    texto:
      'Los carteles luminosos cuelgan por primera vez. Los azulejos blanco y negro se instalan. El salón toma la forma que conserva intacta hasta hoy.',
  },
  {
    anio: '2015',
    titulo: 'Muza 5K',
    texto:
      'Pin Pun gana el premio a la mejor pizza de mozzarella en el maratón de pizza Muza 5K. La ciudad confirma lo que el barrio sabía hace 88 años.',
  },
  {
    anio: '2020',
    titulo: 'Sucursal Villa Urquiza',
    texto:
      'Se abre el segundo local en La Pampa 5201, replicando la masa, los hornos y el espíritu del original. Mismo equipo, misma receta.',
  },
  {
    anio: 'Hoy',
    titulo: 'Cien años en cuenta regresiva',
    texto:
      'A pasos del centenario, Pin Pun sigue siendo lo que fue: una pizzería al molde de barrio, sin pretensiones y con todo el orgullo.',
  },
];

// ── Reseñas / prensa ───────────────────────────────────────────────────
export const prensa = [
  {
    medio: 'La Nación',
    nota: '"Pin Pun, Burgio, Angelín: el encanto de las míticas pizzerías alejadas del Centro"',
    enlace: 'https://www.lanacion.com.ar/sociedad/pin-pun-burgio-angelin-encanto-miticas-pizzerias-nid2175784/',
  },
  {
    medio: 'Turismo Buenos Aires',
    nota: 'Recomendada en la guía gastronómica oficial de la Ciudad de Buenos Aires',
    enlace: 'https://turismo.buenosaires.gob.ar/es/gastronomico/pin-pun',
  },
  {
    medio: 'La Mejor Pizzería',
    nota: 'Más de 1.500 votos positivos en el ranking nacional de pizzerías',
    enlace: 'https://lamejorpizzeria.com/pizzerias/pinpun/',
  },
  {
    medio: 'Muza 5K',
    nota: 'Ganadora a la mejor pizza de mozzarella en el maratón porteño · 2015',
    enlace: '#',
  },
];

// ── Citas de clientes (testimonios) ────────────────────────────────────
export const testimonios = [
  {
    cita:
      'Vengo desde los seis años de la mano de mi abuelo. La muzzarella es la misma. Los azulejos también. Mi hijo come acá ahora, y va a ser igual.',
    autor: 'Esteban M.',
    contexto: 'Cliente desde 1987',
  },
  {
    cita:
      'La empanada frita de carne de Pin Pun es de las mejores de Buenos Aires. La masa, el corte de la carne, el repulgue. Detalle que ya casi nadie cuida.',
    autor: 'Sofía T.',
    contexto: 'Reseña Tripadvisor',
  },
  {
    cita:
      'Una porción de fugazzeta rellena, una copa de vermut, parado en el mostrador. No necesito más para sentir que estoy en mi ciudad.',
    autor: 'Martín R.',
    contexto: 'Vecino de Almagro',
  },
];

// ── Frases para el marquee infinito ────────────────────────────────────
export const marqueeFrases = [
  'Desde 1927',
  'Almagro · Buenos Aires',
  'Pizza al molde',
  'Horno de piedra',
  'Empanadas fritas',
  'Vermut con sifón',
  'Ganadora Muza 5K',
];
