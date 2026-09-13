// =====================================================================
// CONFIGURACIÓN DEL SITIO
// Completar estos valores antes de publicar.
// =====================================================================
const SITE = {
    // Año de fundación. Se usa para calcular los años de trayectoria.
    foundingYear: '{{ANIO_FUNDACION}}',
    // Número de WhatsApp en formato internacional, solo dígitos (ej: 5493548500293)
    whatsapp: '{{TELEFONO_WA}}'
};

const getYearsOfExperience = () => new Date().getFullYear() - Number(SITE.foundingYear);

// =====================================================================
// TEXTOS
// {years} se reemplaza automáticamente por los años de trayectoria.
// =====================================================================
const translations = {
    es: {
        // Marca
        'brand.name': 'Terra Compostaje • {{RUBRO}}',
        'brand.sub': '{{RUBRO}}',
        'meta.title': 'Terra Compostaje • {{RUBRO}} | {{LEMA}}',

        // Navegación
        'nav.home': 'Inicio',
        'nav.about': 'Nosotros',
        'nav.services': 'Servicios',
        'nav.team': 'Equipo',
        'nav.location': 'Ubicación',
        'nav.contact': 'Contacto',

        // Portada
        'hero.badge': 'Desde {{ANIO_FUNDACION}}',
        'hero.title': '{{TITULO_PRINCIPAL}}',
        'hero.subtitle': '{{SUBTITULO_PRINCIPAL}}',
        'hero.cta': '{{BOTON_PRINCIPAL}}',
        'hero.cta2': '{{BOTON_SECUNDARIO}}',

        // Nosotros
        'about.title': '{{NOSOTROS_TITULO}}',
        'about.p1': '{{NOSOTROS_PARRAFO_1}}',
        'about.p2': '{{NOSOTROS_PARRAFO_2}}',
        'about.p3': '{{NOSOTROS_PARRAFO_3}}',
        'about.stat1': '{{DATO_1_ETIQUETA}}',
        'about.stat2': '{{DATO_2_ETIQUETA}}',
        'about.visual': '{{NOSOTROS_FRASE_VISUAL}}',

        // Valores
        'value1.title': '{{VALOR_1_TITULO}}',
        'value1.text': '{{VALOR_1_TEXTO}}',
        'value2.title': '{{VALOR_2_TITULO}}',
        'value2.text': '{{VALOR_2_TEXTO}}',
        'value3.title': '{{VALOR_3_TITULO}}',
        'value3.text': '{{VALOR_3_TEXTO}}',

        // Servicios
        'services.title': '{{SERVICIOS_TITULO}}',
        'services.subtitle': '{{SERVICIOS_SUBTITULO}}',
        'service1.title': '{{SERVICIO_1}}',
        'service1.text': '{{SERVICIO_1_TEXTO}}',
        'service2.title': '{{SERVICIO_2}}',
        'service2.text': '{{SERVICIO_2_TEXTO}}',
        'service3.title': '{{SERVICIO_3}}',
        'service3.text': '{{SERVICIO_3_TEXTO}}',
        'service4.title': '{{SERVICIO_4}}',
        'service4.text': '{{SERVICIO_4_TEXTO}}',
        'service5.title': '{{SERVICIO_5}}',
        'service5.text': '{{SERVICIO_5_TEXTO}}',
        'service6.title': '{{SERVICIO_6}}',
        'service6.text': '{{SERVICIO_6_TEXTO}}',

        // Equipo
        'team.title': '{{EQUIPO_TITULO}}',
        'team.subtitle': '{{EQUIPO_SUBTITULO}}',
        'team1.role': '{{PERSONA_1_CARGO}}',
        'team1.bio': '{{PERSONA_1_BIO}}',
        'team2.role': '{{PERSONA_2_CARGO}}',
        'team2.bio': '{{PERSONA_2_BIO}}',

        // Historia
        'legacy.title': '{{HISTORIA_TITULO}}',
        'legacy.p1': '{{HISTORIA_PARRAFO_1}}',
        'legacy.p2': '{{HISTORIA_PARRAFO_2}}',

        // Ubicación
        'location.title': '{{UBICACION_TITULO}}',
        'location.subtitle': '{{UBICACION_SUBTITULO}}',
        'location.address': '{{CIUDAD}}, {{PROVINCIA}} - CP {{CODIGO_POSTAL}}',
        'location.btn': '{{BOTON_MAPA}}',
        'location.region': '{{ZONA}}',
        'location.desc1': '{{ZONA_PARRAFO_1}}',
        'location.desc2': '{{ZONA_PARRAFO_2}}',
        'location.desc3': '{{ZONA_PARRAFO_3}}',

        // Contacto
        'contact.title': 'Contacto',
        'contact.subtitle': '{{CONTACTO_SUBTITULO}}',
        'contact.address': 'Dirección',
        'contact.hours': 'Horarios',
        'contact.weekdays': '{{DIAS_ATENCION}}',
        'contact.appointment': '{{NOTA_CONTACTO}}',
        'contact.ctaBtn': '{{BOTON_WHATSAPP}}',

        // WhatsApp
        'whatsapp.message': '{{MENSAJE_WHATSAPP}}',

        // Pie
        'footer.tagline': '{{LEMA}}',
        'footer.location': 'Ubicación',
        'footer.hours': 'Horarios',
        'footer.contact': 'Contacto',
        'footer.appointment': '{{NOTA_CONTACTO}}',
        'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
        // Brand
        'brand.name': 'Terra Compostaje • {{RUBRO_EN}}',
        'brand.sub': '{{RUBRO_EN}}',
        'meta.title': 'Terra Compostaje • {{RUBRO_EN}} | {{LEMA_EN}}',

        // Nav
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.team': 'Team',
        'nav.location': 'Location',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'Since {{ANIO_FUNDACION}}',
        'hero.title': '{{TITULO_PRINCIPAL_EN}}',
        'hero.subtitle': '{{SUBTITULO_PRINCIPAL_EN}}',
        'hero.cta': '{{BOTON_PRINCIPAL_EN}}',
        'hero.cta2': '{{BOTON_SECUNDARIO_EN}}',

        // About
        'about.title': '{{NOSOTROS_TITULO_EN}}',
        'about.p1': '{{NOSOTROS_PARRAFO_1_EN}}',
        'about.p2': '{{NOSOTROS_PARRAFO_2_EN}}',
        'about.p3': '{{NOSOTROS_PARRAFO_3_EN}}',
        'about.stat1': '{{DATO_1_ETIQUETA_EN}}',
        'about.stat2': '{{DATO_2_ETIQUETA_EN}}',
        'about.visual': '{{NOSOTROS_FRASE_VISUAL_EN}}',

        // Values
        'value1.title': '{{VALOR_1_TITULO_EN}}',
        'value1.text': '{{VALOR_1_TEXTO_EN}}',
        'value2.title': '{{VALOR_2_TITULO_EN}}',
        'value2.text': '{{VALOR_2_TEXTO_EN}}',
        'value3.title': '{{VALOR_3_TITULO_EN}}',
        'value3.text': '{{VALOR_3_TEXTO_EN}}',

        // Services
        'services.title': '{{SERVICIOS_TITULO_EN}}',
        'services.subtitle': '{{SERVICIOS_SUBTITULO_EN}}',
        'service1.title': '{{SERVICIO_1_EN}}',
        'service1.text': '{{SERVICIO_1_TEXTO_EN}}',
        'service2.title': '{{SERVICIO_2_EN}}',
        'service2.text': '{{SERVICIO_2_TEXTO_EN}}',
        'service3.title': '{{SERVICIO_3_EN}}',
        'service3.text': '{{SERVICIO_3_TEXTO_EN}}',
        'service4.title': '{{SERVICIO_4_EN}}',
        'service4.text': '{{SERVICIO_4_TEXTO_EN}}',
        'service5.title': '{{SERVICIO_5_EN}}',
        'service5.text': '{{SERVICIO_5_TEXTO_EN}}',
        'service6.title': '{{SERVICIO_6_EN}}',
        'service6.text': '{{SERVICIO_6_TEXTO_EN}}',

        // Team
        'team.title': '{{EQUIPO_TITULO_EN}}',
        'team.subtitle': '{{EQUIPO_SUBTITULO_EN}}',
        'team1.role': '{{PERSONA_1_CARGO_EN}}',
        'team1.bio': '{{PERSONA_1_BIO_EN}}',
        'team2.role': '{{PERSONA_2_CARGO_EN}}',
        'team2.bio': '{{PERSONA_2_BIO_EN}}',

        // History
        'legacy.title': '{{HISTORIA_TITULO_EN}}',
        'legacy.p1': '{{HISTORIA_PARRAFO_1_EN}}',
        'legacy.p2': '{{HISTORIA_PARRAFO_2_EN}}',

        // Location
        'location.title': '{{UBICACION_TITULO_EN}}',
        'location.subtitle': '{{UBICACION_SUBTITULO_EN}}',
        'location.address': '{{CIUDAD}}, {{PROVINCIA}} - ZIP {{CODIGO_POSTAL}}',
        'location.btn': '{{BOTON_MAPA_EN}}',
        'location.region': '{{ZONA}}',
        'location.desc1': '{{ZONA_PARRAFO_1_EN}}',
        'location.desc2': '{{ZONA_PARRAFO_2_EN}}',
        'location.desc3': '{{ZONA_PARRAFO_3_EN}}',

        // Contact
        'contact.title': 'Contact',
        'contact.subtitle': '{{CONTACTO_SUBTITULO_EN}}',
        'contact.address': 'Address',
        'contact.hours': 'Hours',
        'contact.weekdays': '{{DIAS_ATENCION_EN}}',
        'contact.appointment': '{{NOTA_CONTACTO_EN}}',
        'contact.ctaBtn': '{{BOTON_WHATSAPP_EN}}',

        // WhatsApp
        'whatsapp.message': '{{MENSAJE_WHATSAPP_EN}}',

        // Footer
        'footer.tagline': '{{LEMA_EN}}',
        'footer.location': 'Location',
        'footer.hours': 'Hours',
        'footer.contact': 'Contact',
        'footer.appointment': '{{NOTA_CONTACTO_EN}}',
        'footer.rights': 'All rights reserved.'
    }
};

// =====================================================================
// MOTOR DE TRADUCCIÓN (no hace falta tocar nada de acá para abajo)
// =====================================================================
const i18n = {
    currentLang: 'es',

    init() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            this.currentLang = saved;
        } else {
            const browserLang = navigator.language || navigator.userLanguage;
            this.currentLang = browserLang.startsWith('es') ? 'es' : 'en';
        }

        this.applyTranslations();
        this.updateLangToggle();
    },

    setLang(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.applyTranslations();
            this.updateLangToggle();
            document.documentElement.lang = lang;
        }
    },

    toggle() {
        this.setLang(this.currentLang === 'es' ? 'en' : 'es');
    },

    t(key) {
        let text = translations[this.currentLang][key] || key;
        return text.replace('{years}', getYearsOfExperience());
    },

    applyTranslations() {
        const years = getYearsOfExperience();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        });

        // Años de trayectoria
        const yearsStat = document.getElementById('years-stat');
        if (yearsStat && !isNaN(years)) {
            yearsStat.textContent = years;
        }

        // Título de la página
        document.title = this.t('meta.title');

        // Enlaces de WhatsApp con el mensaje en el idioma activo
        const whatsappMessage = encodeURIComponent(this.t('whatsapp.message'));
        const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${whatsappMessage}`;

        document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.href = whatsappUrl;
        });
    },

    updateLangToggle() {
        const toggle = document.querySelector('.lang-toggle');
        if (toggle) {
            toggle.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
            toggle.setAttribute('aria-label', this.currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
