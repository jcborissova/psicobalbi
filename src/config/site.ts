import type { SiteConfig } from "@/types/site";

const fallbackBookingUrl = "https://cal.com/psicobalbi/consulta-inicial";
const fallbackWhatsappNumber = "18096053320";

const bookingUrlEnv = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
const whatsappEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();

export const siteConfig: SiteConfig = {
  brandName: "Psicobalbi",
  tagline: "Psicóloga | Ansiedad y regulación emocional\nAcompañamiento individual y familiar\nUn espacio para entenderte sin culpa",
  description:
    "Espacio de atención psicológica para procesos de ansiedad, estrés y acompañamiento emocional, con modalidad presencial y virtual.",
  bookingUrl: bookingUrlEnv || fallbackBookingUrl,
  whatsappNumber: whatsappEnv || fallbackWhatsappNumber,
  whatsappMessage:
    "Hola, me gustaría recibir información para agendar una primera consulta en Psicobalbi.",
  phone: "809 605 3320",
  email: "contacto@psicobalbi.com",
  nav: [
    { label: "Inicio", href: "/#inicio" },
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "Acompañamiento", href: "/#servicios" },
    { label: "Información práctica", href: "/#informacion-practica" },
    { label: "Entrevista inicial", href: "/entrevista-inicial" },
    { label: "Agendar", href: "/#agendar" },
  ],
  hero: {
  "eyebrow": "Psicología clínica",
  "title": "Cuando tu mente no se detiene y tus emociones te sobrepasan, necesitas algo más que “calmarte”.",
  "supportLine": "Te acompaño a entender tu ansiedad, regular tus emociones y sentirte en control de ti mismo, sin culpa.",
  "description": "Atención psicológica con enfoque humano y profesional para adultos y adolescentes. Un proceso terapéutico pensado para acompañarte con claridad, respeto y confidencialidad.",
  "primaryCtaLabel": "Agenda tu espacio",
  "secondaryCtaLabel": "Conocer el proceso",
  "trustMicrocopy": []
},
  about: {
  "eyebrow": "Sobre mí",
  "title": "Un espacio para comprenderte sin juicio",
  "intro": "Soy Ashley Fajardo Balbi, psicóloga clínica, y mi trabajo es acompañarte a entender lo que estás viviendo desde una mirada más amplia, sin juicios.",
  "profile": {
    "fullName": "Ashley Fajardo Balbi",
    "role": "Psicóloga clínica",
    "registration": "",
    "experience": "",
    "audience": "Niños, adultos y familias",
    "modalities": "Presencial y virtual"
  },
  "philosophyTitle": "Quién soy",
  "philosophyBody": "Trabajo desde la terapia sistémica y la terapia breve centrada en soluciones. Esto significa que no solo nos enfocamos en el problema, sino en comprender cómo influyen tu historia, tus relaciones y tu entorno, mientras construimos herramientas prácticas que te ayuden a sentirte mejor y avanzar de forma más clara.",
  "biography": [
    "Cuento con formación en terapia familiar y de pareja, psicometría, psicología perinatal y manejo de conflictos, y experiencia acompañando procesos relacionados con ansiedad, regulación emocional y dinámicas relacionales.",
    "Mi enfoque es cercano, respetuoso y flexible, adaptado a cada persona. Este es un espacio seguro donde puedes comprenderte, sin exigirte más de lo que ya has tenido que sostener.",
    "Este es un espacio para comprenderte sin juicio, no para exigirte más de lo que ya te exiges."
  ],
  "highlights": [
    {
      "title": "Acompañamiento profesional",
      "description": "Intervenciones clínicas basadas en un enfoque sistémico, terapia breve centrada en soluciones y terapia breve sistémica."
    },
    {
      "title": "Formación",
      "description": "Maestría en terapia familiar y de pareja, certificación en psicología perinatal, especialidad en sueño, especialización psicométrica, manejo de conflictos e intervenciones en TOC."
    }
  ]
},
  services: {
  "eyebrow": "Servicios",
  "title": "Un espacio de atención para ti",
  "description": "Cada persona merece un espacio seguro donde pueda sentirse escuchada, comprendida y acompañada. Por eso, adapto cada proceso terapéutico a tus necesidades:",
  "items": [
    {
      "title": "Terapia individual",
      "description": "Te acompaño a trabajar la ansiedad, gestionar tus emociones y tomar decisiones con mayor claridad.",
      "price": "$2,000",
      "featuredOnHome": true
    },
    {
      "title": "Terapia familiar",
      "description": "Trabajo junto a ustedes para mejorar la comunicación, resolver conflictos y fortalecer sus vínculos.",
      "price": "$3,000",
      "featuredOnHome": true
    },
    {
      "title": "Terapia de duelo",
      "description": "Este espacio es para ayudarte a ordenar, entender y sostener lo que estás viviendo.",
      "price": "$2,000",
      "featuredOnHome": true
    },
    {
      "title": "Terapia bajo costo",
      "description": "Cuidar tu salud mental también debe estar al alcance de todos. Este programa está orientado a personas con posibilidades socioeconómicas limitadas, en modalidad virtual, con sesiones de 40 minutos.",
      "price": "$1,000",
      "featuredOnHome": true
    },
    {
      "title": "Terapia socioemocional infanto-juvenil",
      "description": "Acompaño a niños y adolescentes en el desarrollo de habilidades emocionales y sociales.",
      "price": "$2,500",
      "featuredOnHome": true
    },
    {
      "title": "Terapia vocacional",
      "description": "Te ayudo a encontrar claridad en tus decisiones académicas y profesionales.",
      "price": "$2,500",
      "featuredOnHome": true
    }
  ]
},
  practicalInfo: {
    eyebrow: "Información para coordinar tu atención",
    title: "Horarios, valores y ubicaciones disponibles",
    description:
      "Toda la información que necesitas para organizar tu proceso terapéutico de manera clara y accesible.",
  },
  schedule: {
    eyebrow: "Horarios de atención",
    title: "Disponibilidad semanal con agenda previa",
    description:
      "Los turnos se coordinan mediante cita previa para garantizar continuidad y calidad de la atención.",
    note: "Se evalúan solicitudes de horarios especiales según disponibilidad. Consultá para opciones fuera del horario habitual.",
    days: [
      { day: "Lunes", hours: "09:00 a 19:00" },
      { day: "Martes", hours: "10:00 a 20:00" },
      { day: "Miércoles", hours: "09:00 a 18:00" },
      { day: "Jueves", hours: "10:00 a 20:00" },
      { day: "Viernes", hours: "09:00 a 17:00" },
      { day: "Sábado", hours: "Evaluación previa", note: "Turnos limitados según disponibilidad" },
      { day: "Domingo", hours: "Cerrado" },
    ],
  },
  pricing: {
  "eyebrow": "Honorarios profesionales",
  "title": "Valores por servicio",
  "description": "Consulta los honorarios del acompañamiento que necesitas.",
  "note": "Puedes escribirme si tienes dudas sobre el proceso.",
  "ctaLabel": "Agenda tu espacio",
  "items": [
    {
      "title": "Terapia individual",
      "price": "$2,000",
      "description": "Te acompaño a trabajar la ansiedad, gestionar tus emociones y tomar decisiones con mayor claridad."
    },
    {
      "title": "Terapia familiar",
      "price": "$3,000",
      "description": "Trabajo junto a ustedes para mejorar la comunicación, resolver conflictos y fortalecer sus vínculos."
    },
    {
      "title": "Terapia de duelo",
      "price": "$2,000",
      "description": "Este espacio es para ayudarte a ordenar, entender y sostener lo que estás viviendo."
    },
    {
      "title": "Terapia bajo costo",
      "price": "$1,000",
      "description": "Cuidar tu salud mental también debe estar al alcance de todos. Este programa está orientado a personas con posibilidades socioeconómicas limitadas, en modalidad virtual, con sesiones de 40 minutos."
    },
    {
      "title": "Terapia socioemocional infanto-juvenil",
      "price": "$2,500",
      "description": "Acompaño a niños y adolescentes en el desarrollo de habilidades emocionales y sociales."
    },
    {
      "title": "Terapia vocacional",
      "price": "$2,500",
      "description": "Te ayudo a encontrar claridad en tus decisiones académicas y profesionales."
    }
  ]
},
  lowCostProgram: {
  "eyebrow": "Terapia bajo costo",
  "title": "Cuidar tu salud mental también debe estar al alcance de todos",
  "description": "Cuidar tu salud mental también debe estar al alcance de todos. Este programa está orientado a personas con posibilidades socioeconómicas limitadas, en modalidad virtual, con sesiones de 40 minutos.",
  "criteriaNote": "Orientado a personas con posibilidades socioeconómicas limitadas.",
  "ctaLabel": "Agendar"
},
  locations: {
    eyebrow: "Espacios de consulta",
    title: "Ubicaciones para atención presencial y coordinación virtual",
    description:
      "Seleccioná la modalidad y ubicación más conveniente para tu proceso. También disponible atención completamente virtual.",
    items: [
      {
        name: "Consultorio Caballito",
        city: "CABA",
        sector: "Caballito",
        address: "Av. Rivadavia 5123, Piso 3, Oficina B",
        consultationMode: "Presencial y virtual",
        contactPhone: "809 605 3320",
        mapLink: "https://maps.google.com/?q=Av.+Rivadavia+5123+CABA",
      },
      {
        name: "Consultorio Palermo",
        city: "CABA",
        sector: "Palermo",
        address: "Honduras 4280, Piso 2, Consultorio 5",
        consultationMode: "Presencial",
        contactPhone: "809 605 3320",
        mapLink: "https://maps.google.com/?q=Honduras+4280+CABA",
      },
      {
        name: "Atención virtual",
        city: "Desde cualquier lugar",
        sector: "Videollamada segura",
        address: "Coordinación por enlace privado al confirmar turno",
        consultationMode: "Online — Modalidad flexible",
        contactPhone: "809 605 3320",
        mapLink: "https://cal.com/psicobalbi/consulta-inicial",
      },
    ],
  },
  intakeForm: {
    eyebrow: "Entrevista inicial",
    title: "Contame brevemente tu consulta para orientarte mejor",
    description:
      "Este formulario permite conocer tu motivo de consulta y tu disponibilidad. La información se utiliza solo para la coordinación inicial y se trata con confidencialidad.",
    successTitle: "Solicitud enviada correctamente",
    successMessage:
      "Gracias por completar la entrevista inicial. Revisaremos tu información y nos pondremos en contacto para coordinar el siguiente paso.",
    submitLabel: "Enviar entrevista inicial",
    consentText:
      "Acepto el envío de mis datos para la evaluación inicial y la coordinación de un turno en Psicobalbi.",
  },
  process: {
    eyebrow: "Cómo es el proceso",
    title: "Tres pasos simples para iniciar tu acompañamiento terapéutico",
    description:
      "Te guiamos a través de un proceso claro, profesional y sin complicaciones innecesarias.",
    steps: [
      {
        title: "Primer contacto y consulta inicial",
        description:
          "Podés escribir por WhatsApp o solicitar la entrevista inicial para compartir brevemente tu situación. Escuchamos sin prisa, evaluamos tu demanda y definimos los próximos pasos.",
      },
      {
        title: "Evaluación y encuadre terapéutico",
        description:
          "Se establece el motivo de consulta, frecuencia de sesiones, modalidad (presencial o virtual) y objetivos de trabajo. Todo se acuerda en común para que te sientas cómodo.",
      },
      {
        title: "Continuidad del proceso",
        description:
          "Iniciamos el acompañamiento con sesiones regulares. El espacio está pensado para que generes confianza, puedas expresarte sin filtros y trabajemos juntos en tu bienestar.",
      },
    ],
    primaryCtaLabel: "Solicitar entrevista inicial",
    secondaryCtaLabel: "Agendar una consulta",
  },
  ctaBanner: {
  "title": "Si sientes que este espacio es para ti, puedes dar el primer paso hoy.",
  "description": "Estoy aquí para acompañarte.",
  "primaryCtaLabel": "Agenda tu espacio",
  "secondaryCtaLabel": "Escríbeme por WhatsApp",
  "connectionTitle": "No necesitas tener todo resuelto para empezar.",
  "connectionBody": "A veces, lo único que hace falta es un espacio donde puedas entender lo que te pasa sin sentirte juzgado/a.",
  "contactReasons": [
    "Tienes dudas sobre el proceso",
    "No sabes por dónde empezar",
    "O simplemente necesitas orientación"
  ]
},
  footer: {
    quickLinksTitle: "Navegación",
    contactTitle: "Contacto",
    hoursTitle: "Horarios",
    legalLinksTitle: "Legales",
    legalLinks: [
      { label: "Política de privacidad", href: "/privacidad" },
      { label: "Aviso legal", href: "/aviso-legal" },
    ],
    privacyLinkLabel: "Política de privacidad",
    legalLinkLabel: "Aviso legal",
    copyright: `© ${new Date().getFullYear()} Psicobalbi. Todos los derechos reservados.`,
  },
  legal: {
    privacy: {
      title: "Política de privacidad",
      intro:
        "En Psicobalbi se prioriza la confidencialidad y el cuidado de la información compartida por las personas consultantes. Este texto es un modelo editable para la versión inicial del sitio.",
      updatedAt: "26 de febrero de 2026",
      sections: [
        {
          heading: "Información que se recopila",
          body: [
            "Se recopilan los datos enviados a través del formulario de entrevista inicial, como nombre, edad, datos de contacto, modalidad preferida y motivo de consulta.",
            "La información se utiliza únicamente para responder la solicitud y coordinar una primera entrevista.",
          ],
        },
        {
          heading: "Uso y resguardo",
          body: [
            "Los datos se tratan de forma confidencial y no se comparten con terceros sin consentimiento, salvo obligación legal aplicable.",
            "Se recomienda adaptar esta sección cuando exista integración con correo electrónico, CRM o base de datos.",
          ],
        },
        {
          heading: "Derechos de la persona usuaria",
          body: [
            "Podés solicitar actualización o eliminación de tus datos de contacto escribiendo al correo informado en este sitio.",
          ],
        },
      ],
    },
    legalNotice: {
      title: "Aviso legal",
      intro:
        "Este sitio brinda información general sobre servicios de atención psicológica y canales de contacto de Psicobalbi. El contenido es informativo y no reemplaza una consulta profesional individual.",
      updatedAt: "26 de febrero de 2026",
      sections: [
        {
          heading: "Titularidad del sitio",
          body: [
            "Psicobalbi es la marca utilizada para la comunicación de servicios de atención psicológica. Los datos de contacto y horarios publicados pueden actualizarse sin previo aviso.",
          ],
        },
        {
          heading: "Uso del contenido",
          body: [
            "Los textos y elementos gráficos del sitio son de uso informativo. No se autoriza su reproducción comercial sin consentimiento previo.",
          ],
        },
        {
          heading: "Canales de consulta",
          body: [
            "La solicitud de turno o el envío del formulario no constituyen una relación terapéutica inmediata hasta confirmar disponibilidad y encuadre de atención.",
          ],
        },
      ],
    },
  },
  seo: {
    title: "Psicobalbi | Atención psicológica presencial y virtual",
    description:
      "Psicobalbi ofrece atención psicológica con enfoque humano, profesional y confidencial. Consultas presenciales y virtuales, entrevista inicial y agenda de turnos.",
    ogTitle: "Psicobalbi | Espacio de atención psicológica",
    ogDescription:
      "Atención psicológica cálida y profesional para ansiedad, estrés y acompañamiento emocional. Modalidad presencial y virtual.",
  },
};
