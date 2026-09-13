import type es from './es';

const en: typeof es = {
  meta: {
    titulo: 'Terra Compostaje · Organic waste treatment in Córdoba, Argentina',
    descripcion:
      'We turn the organic waste of companies and institutions into substrates that regenerate the soil. The first licensed industrial composting plant in the city of Córdoba. Certified B Corporation.',
  },

  nav: {
    soluciones: 'Solutions',
    productos: 'Products',
    planta: 'The plant',
    impacto: 'Impact',
    cotizar: 'Request a quote',
    menu: 'Menu',
    cambiarIdioma: 'Ver en español',
    otroIdioma: 'ES',
  },

  hero: {
    selloAlt: "Certified B Corporation — view Terra's profile on B Lab",
    tituloAntes: 'It is time to give back to our land',
    tituloResaltado: 'everything it gives us',
    bajada:
      'We treat organic waste from industry, retail and institutions and turn it into substrates that regenerate the soil. We are the first licensed industrial composting plant in the city of Córdoba.',
    ctaEmpresas: 'I represent a company',
    ctaProductos: 'I want to buy compost',
    altFoto: 'Gloved hands checking mature compost at the Terra plant',
  },

  credencialesSelloAlt: "Certified B Corporation — view Terra's profile on B Lab",

  credenciales: [
    { dato: '190 t/day', etiqueta: 'Treatment capacity' },
    { dato: '9 hectares', etiqueta: 'Own site on National Route 19' },
    { dato: 'No. 000012108/24', etiqueta: 'Licensed waste operator' },
    { dato: 'Since 2023', etiqueta: "Córdoba's first industrial plant" },
  ],

  caminos: {
    eyebrow: 'Solutions',
    titulo: 'Two ways to close the loop',
    bajada:
      'On one side, the organic waste that today ends up in landfill. On the other, a resource that goes back into the soil.',
    empresas: {
      titulo: 'For companies and institutions',
      texto:
        'We collect, treat and certify. You meet your environmental obligations and stop sending organic matter to landfill.',
      items: [
        'Treatment and recovery of organic waste',
        'End-to-end food waste management, with bins and collection',
        'Treatment certificates for the relevant authority',
        'Monthly reports on tonnes treated and greenhouse gases avoided',
        'Advice, workshops and on-site composting',
      ],
      cta: 'Request a proposal',
    },
    productos: {
      titulo: 'For those who work the land',
      texto:
        'Compostaje Regenerativo® with a physical and chemical analysis for every batch, no weed seeds, and logistics taken care of.',
      items: [
        'Compost, Landscaping Substrate and Growing Substrate',
        'Bulk, big bag and 15 or 30 litre bags',
        'Native trees, worm castings and pine bark',
        'Custom substrates for your project',
        'Delivery to your site, nursery or garden',
      ],
      cta: 'See products and prices',
    },
  },

  impacto: {
    eyebrow: 'Impact',
    titulo: 'At Terra, waste goes in and trees come out',
    bajada:
      'Every tonne we divert from landfill avoids emissions and returns to the soil as stabilised organic matter.',
    cifras: {
      toneladas: 'Of organic waste treated',
      co2: 'Emissions avoided by not landfilling it',
      arboles: 'Native trees planted with Forestando',
      compost: 'Of compost returned to the soil',
    },
    nota: (fecha: string) => `Figures as of ${fecha}.`,
  },

  proceso: {
    eyebrow: 'The plant',
    titulo: 'From waste to substrate in four stages',
    bajada:
      'Open windrow composting on a nine-hectare site, a former aggregate quarry on National Route 19, 6 km from the Córdoba ring road.',
    etapa: 'Stage',
    pasos: [
      {
        titulo: 'Reception and mixing',
        texto:
          'Material arrives with full traceability, is weighed and mixed according to its composition into long windrows.',
        duracion: null,
        altFoto: 'Reception area sign at the Terra site',
      },
      {
        titulo: 'Turning and thermophilic stage',
        texto:
          'The windrows are turned by machine to aerate them. We monitor moisture and temperature: the heat kills pathogens and weed seeds.',
        duracion: '1 month',
        altFoto: 'Temperature probe inserted into a compost windrow',
      },
      {
        titulo: 'Maturation',
        texto:
          'The material moves to the maturation area, where the organic matter finishes stabilising.',
        duracion: '3 to 4 months',
        altFoto: 'Worker next to the maturation area sign',
      },
      {
        titulo: 'Screening and analysis',
        texto:
          'It is screened, and every batch is characterised in a laboratory under current regulations, which define its possible uses.',
        duracion: null,
        altFoto: 'Finished compost held in a hand',
      },
    ],
  },

  productos: {
    eyebrow: 'Products',
    // Es una marca: no se traduce. El ® va como <sup> en Productos.astro.
    titulo: 'Compostaje Regenerativo',
    bajada:
      'A product of the circular economy: they improve soil structure and fertility.',
    nombres: {
      compost: 'Compost',
      paisajismo: 'Landscaping Substrate',
      cultivo: 'Growing Substrate',
      otros: 'Other products',
    },
    descripciones: {
      compost:
        'A biological soil amendment produced from organic waste. Improves soil structure, retains moisture and feeds plants. Ideal for vegetable gardens, gardens and nurseries.',
      paisajismo:
        'A blend of organic compost, sand and diatomite. Provides good drainage and an ideal environment for healthy roots, while looking after your project budget. Ideal for large areas.',
      cultivo:
        'Compost enriched with worm castings, diatomite and perlite. Creates aeration, retains moisture and supports growth from germination through to harvest.',
      otros:
        'Native trees grown in our own greenhouse using compost from the plant: algarrobo, cina cina, sen de campo, quebracho blanco, espinillo, chañar, molle, aguaribay, lagaña de perro, manzano de campo and pezuña de vaca.',
    },
    formatos: {
      granel: 'Bulk (per m³)',
      bigbag: 'Big Bag (1 m³)',
      bolsa30: '30 L bag',
      bolsa15: '15 L bag',
      bolsa40: '40 L bag',
    },
    otros: {
      'arbol-forestal': 'Native tree · forestry pot',
      'arbol-4l': 'Native tree · 4 L pot',
      lombricompuesto: 'Worm castings · 40 L bag',
      'corteza-pino': 'Pine bark · Big Bag (1 m³)',
    },
    aclaraciones: (vigencia: string) => [
      `Prices effective ${vigencia}.`,
      'All prices are + VAT.',
      'Transport not included.',
      'Ask us about wholesale pricing.',
    ],
    cta: 'Request a quote',
  },

  diferenciales: {
    eyebrow: 'Why Terra',
    titulo: 'Quality and traceability, batch by batch',
    items: [
      {
        titulo: 'No weed seeds',
        texto:
          'They die during the thermophilic stage of the process. Every batch has a physical and chemical analysis available on request.',
      },
      {
        titulo: 'We handle the logistics',
        texto:
          'The compost reaches your site. Every delivery format: bulk, big bag and bags.',
      },
      {
        titulo: 'One tree for every 5 m³',
        texto:
          'For every 5 m³ of waste we treat, we plant a native tree. For every 1 m³ of compost, 2,600 kg of rubbish recovered.',
      },
    ],
  },

  clientes: {
    eyebrow: 'They trust us',
    titulo: 'Companies that have already stopped landfilling their organic matter',
    alianzas: 'Partners',
  },

  cta: {
    titulo: 'Where does your waste go?',
    texto:
      'Tell us how much you generate and what kind. We will put together a proposal tailored to you, certificates and reports included.',
    whatsapp: 'Message us on WhatsApp',
    mensajeWa: 'Hello Terra, I would like to ask about your waste treatment service.',
  },

  footer: {
    instagram: 'Terra Compostaje on Instagram',
    linkedin: 'Terra Compostaje on LinkedIn',
    bcorpAlt: "Certified B Corporation — view Terra's profile on B Lab",
    lema: 'We transform organic waste to regenerate the Earth.',
    servicios: 'Services',
    itemsServicios: [
      'Waste treatment',
      'Food waste',
      'On-site composting',
      'Workshops and training',
    ],
    productos: 'Products',
    contacto: 'Contact',
    privacidad: 'Privacy policy',
    terminos: 'Terms and conditions',
    operador: 'Waste operator No. 000012108/24',
    derechos: 'All rights reserved.',
  },

  saltar: 'Skip to content',
};

export default en;
