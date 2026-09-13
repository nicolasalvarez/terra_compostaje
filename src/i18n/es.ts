export default {
  meta: {
    titulo: 'Terra Compostaje · Tratamiento de residuos orgánicos en Córdoba',
    descripcion:
      'Transformamos los residuos orgánicos de empresas e instituciones en sustratos que regeneran el suelo. Primera planta de compostaje industrial habilitada de la ciudad de Córdoba. Empresa B Certificada.',
  },

  nav: {
    soluciones: 'Soluciones',
    productos: 'Productos',
    planta: 'La planta',
    impacto: 'Impacto',
    cotizar: 'Pedir cotización',
    menu: 'Menú',
    cambiarIdioma: 'Ver en inglés',
    otroIdioma: 'EN',
  },

  hero: {
    selloAlt: 'Empresa B Certificada — ver el perfil de Terra en B Lab',
    tituloAntes: 'Es hora de devolverle a nuestra tierra',
    tituloResaltado: 'todo lo que nos da',
    bajada:
      'Tratamos los residuos orgánicos de industrias, comercios e instituciones y los transformamos en sustratos que regeneran el suelo. Somos la primera planta de compostaje industrial habilitada de la ciudad de Córdoba.',
    ctaEmpresas: 'Soy una empresa',
    ctaProductos: 'Quiero comprar compost',
    altFoto: 'Manos con guantes revisando compost maduro en la planta de Terra',
  },

  credencialesSelloAlt: 'Empresa B Certificada — ver el perfil de Terra en B Lab',

  credenciales: [
    { dato: '190 t/día', etiqueta: 'Capacidad de tratamiento' },
    { dato: '9 hectáreas', etiqueta: 'Predio propio sobre Ruta Nacional 19' },
    { dato: 'N° 000012108/24', etiqueta: 'Operador de residuos habilitado' },
    { dato: 'Desde 2023', etiqueta: 'Primera planta industrial de Córdoba' },
  ],

  caminos: {
    eyebrow: 'Soluciones',
    titulo: 'Dos maneras de cerrar el ciclo',
    bajada:
      'De un lado entran los residuos orgánicos que hoy terminan enterrados. Del otro sale un recurso que vuelve al suelo.',
    empresas: {
      titulo: 'Para empresas e instituciones',
      texto:
        'Retiramos, tratamos y certificamos. Vos cumplís con la normativa y dejás de enterrar materia orgánica.',
      items: [
        'Tratamiento y valorización de residuos orgánicos',
        'Gestión integral de residuos alimenticios, con contenedores y retiro',
        'Certificados de tratamiento ante autoridad competente',
        'Reportes mensuales de toneladas tratadas y GEI evitados',
        'Asesoramiento, talleres y compostaje in situ',
      ],
      cta: 'Pedir una propuesta',
    },
    productos: {
      titulo: 'Para quien trabaja la tierra',
      texto:
        'Compostaje Regenerativo® con análisis físico-químico por lote, sin semillas de malezas y con la logística resuelta.',
      items: [
        'Compost, Sustrato Paisajismo y Sustrato Cultivo',
        'Granel, big bag y bolsas de 15 y 30 litros',
        'Árboles nativos, lombricompuesto y corteza de pino',
        'Sustratos a medida para tu proyecto',
        'Entrega en obra, vivero o jardín',
      ],
      cta: 'Ver productos y precios',
    },
  },

  impacto: {
    eyebrow: 'Impacto',
    titulo: 'En Terra, entran residuos y salen árboles',
    bajada:
      'Cada tonelada que desviamos del enterramiento evita emisiones y vuelve al suelo como materia orgánica estabilizada.',
    cifras: {
      toneladas: 'De residuos orgánicos tratados',
      co2: 'Emisiones evitadas por no enterrarlos',
      arboles: 'Árboles nativos plantados junto a Forestando',
      compost: 'De compost devuelto al suelo',
    },
    nota: (fecha: string) => `Cifras al ${fecha}.`,
  },

  proceso: {
    eyebrow: 'La planta',
    titulo: 'De residuo a sustrato en cuatro etapas',
    bajada:
      'Compostaje de pilas abiertas en un predio de nueve hectáreas, una antigua cantera de áridos sobre la Ruta Nacional 19, a 6 km de la circunvalación.',
    etapa: 'Etapa',
    pasos: [
      {
        titulo: 'Recepción y mezcla',
        texto:
          'El material ingresa con trazabilidad, se pesa y se mezcla según su composición formando hileras longitudinales.',
        duracion: null,
        altFoto: 'Cartel de zona de recepción en el predio de Terra',
      },
      {
        titulo: 'Volteo y etapa termofílica',
        texto:
          'Las pilas se voltean con maquinaria para oxigenarse. Monitoreamos humedad y temperatura: el calor mata patógenos y semillas de malezas.',
        duracion: '1 mes',
        altFoto: 'Medidor de temperatura clavado en una pila de compost',
      },
      {
        titulo: 'Maduración',
        texto:
          'El material pasa al sector de maduración, donde la materia orgánica termina de estabilizarse.',
        duracion: '3 a 4 meses',
        altFoto: 'Operario junto al cartel de zona de maduración',
      },
      {
        titulo: 'Tamizado y análisis',
        texto:
          'Se tamiza y cada lote se caracteriza en laboratorio conforme la normativa vigente, que define sus usos posibles.',
        duracion: null,
        altFoto: 'Compost terminado sostenido en la mano',
      },
    ],
  },

  productos: {
    eyebrow: 'Productos',
    // El ® va como <sup> en Productos.astro, por eso no esta en el texto.
    titulo: 'Compostaje Regenerativo',
    bajada:
      'Producto de la economía circular: mejoran la estructura y la fertilidad del suelo.',
    nombres: {
      compost: 'Compost',
      paisajismo: 'Sustrato Paisajismo',
      cultivo: 'Sustrato Cultivo',
      otros: 'Otros productos',
    },
    descripciones: {
      compost:
        'Enmienda biológica producida a partir de residuos orgánicos. Mejora la estructura del suelo, retiene humedad y nutre las plantas. Ideal para huertas, jardines y viveros.',
      paisajismo:
        'Mezcla de compost orgánico, arena y diatomea. Aporta buen drenaje y un ambiente ideal para raíces sanas, cuidando el presupuesto de tu proyecto. Ideal para grandes superficies.',
      cultivo:
        'Compost enriquecido con lombricompuesto, diatomea y perlita. Genera aireación, retiene humedad y acompaña el crecimiento desde la germinación hasta la cosecha.',
      otros:
        'Árboles nativos producidos en nuestro invernadero con el compost de la planta: algarrobo, cina cina, sen de campo, quebracho blanco, espinillo, chañar, molle, aguaribay, lagaña de perro, manzano de campo y pezuña de vaca.',
    },
    formatos: {
      granel: 'Granel (por m³)',
      bigbag: 'Big Bag (1 m³)',
      bolsa30: 'Bolsa 30 L',
      bolsa15: 'Bolsa 15 L',
      bolsa40: 'Bolsa 40 L',
    },
    otros: {
      'arbol-forestal': 'Árbol nativo · envase forestal',
      'arbol-4l': 'Árbol nativo · envase 4 L',
      lombricompuesto: 'Lombricompuesto · bolsa 40 L',
      'corteza-pino': 'Corteza de pino · Big Bag (1 m³)',
    },
    aclaraciones: (vigencia: string) => [
      `Precios vigentes a ${vigencia}.`,
      'Todos los precios son + IVA.',
      'Costo de transporte no incluido.',
      'Consultar por precios mayoristas.',
    ],
    cta: 'Pedir un presupuesto',
  },

  diferenciales: {
    eyebrow: 'Por qué Terra',
    titulo: 'Calidad y trazabilidad, lote por lote',
    items: [
      {
        titulo: 'Sin semillas de malezas',
        texto:
          'Mueren en la etapa termofílica del proceso. Cada lote tiene su análisis físico-químico disponible para consultar.',
      },
      {
        titulo: 'Resolvemos la logística',
        texto:
          'El compost llega a tu obra. Todos los formatos de entrega: granel, big bag y bolsas.',
      },
      {
        titulo: 'Cada 5 m³, un árbol',
        texto:
          'Por cada 5 m³ de residuo que tratamos plantamos un árbol nativo. Por cada 1 m³ de compost, 2.600 kg de basura recuperados.',
      },
    ],
  },

  clientes: {
    eyebrow: 'Confían en nosotros',
    titulo: 'Empresas que ya dejaron de enterrar su materia orgánica',
    alianzas: 'Alianzas',
  },

  cta: {
    titulo: '¿A dónde se van tus residuos?',
    texto:
      'Contanos cuánto generás y de qué tipo. Armamos una propuesta a tu medida, con certificados y reportes incluidos.',
    whatsapp: 'Escribinos por WhatsApp',
    mensajeWa: 'Hola Terra, quiero consultar por el servicio de tratamiento de residuos.',
  },

  footer: {
    instagram: 'Terra Compostaje en Instagram',
    linkedin: 'Terra Compostaje en LinkedIn',
    bcorpAlt: 'Empresa B Certificada — ver el perfil de Terra en B Lab',
    lema: 'Transformamos residuos orgánicos para regenerar la Tierra.',
    servicios: 'Servicios',
    itemsServicios: [
      'Tratamiento de residuos',
      'Residuos alimenticios',
      'Compostaje in situ',
      'Talleres y formaciones',
    ],
    productos: 'Productos',
    contacto: 'Contacto',
    privacidad: 'Política de privacidad',
    terminos: 'Términos y condiciones',
    operador: 'Operador de residuos N° 000012108/24',
    derechos: 'Todos los derechos reservados.',
  },

  saltar: 'Saltar al contenido',
};
