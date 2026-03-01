import type { SiteConfig } from "@/types/site";

const fallbackBookingUrl = "https://cal.com/psicobalbi/consulta-inicial";
const fallbackWhatsappNumber = "18096053320";

const bookingUrlEnv = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
const whatsappEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();

export const siteConfig: SiteConfig = {
  brandName: "Psicobalbi",
  tagline: "Acompañamiento psicológico con calidez, criterio clínico y presencia humana",
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
    { label: "Servicios", href: "/#servicios" },
    { label: "Información práctica", href: "/#informacion-practica" },
    { label: "Entrevista inicial", href: "/entrevista-inicial" },
    { label: "Agendar", href: "/#agendar" },
  ],
  hero: {
    eyebrow: "Psicología clínica",
    title: "Un espacio cuidado para hablar, comprender y empezar a sentirse mejor",
    description:
      "Atención psicológica con enfoque humano y profesional para adultos y adolescentes. Un proceso terapéutico pensado para acompañarte con claridad, respeto y confidencialidad.",
    primaryCtaLabel: "Agendar consulta",
    secondaryCtaLabel: "Conocer el proceso",
    trustMicrocopy: [
      "Atención con turno previo",
      "Confidencialidad y escucha profesional",
      "Modalidad presencial y virtual",
    ],
  },
  about: {
    eyebrow: "Sobre la profesional",
    title: "Atención psicológica con criterio clínico, ética y trato humano",
    intro:
      "El trabajo terapéutico se desarrolla en un encuadre claro y confidencial, orientado a comprender cada consulta en profundidad y construir objetivos terapéuticos sostenibles.",
    profile: {
      fullName: "Ashley Fajardo Barbi",
      role: "Psicóloga clínica",
      registration: "Matrícula profesional 00.000",
      experience: "Más de 8 años de experiencia en consulta clínica",
      audience: "Atención a adolescentes y adultos",
      modalities: "Modalidad presencial y virtual con turno previo",
    },
    philosophyTitle: "Enfoque de trabajo",
    philosophyBody:
      "La atención se basa en una práctica ética, empática y confidencial. Se prioriza construir un vínculo terapéutico claro y de confianza, con objetivos realistas y acompañamiento sostenido durante el proceso.",
    highlights: [
      {
        title: "Atención personalizada",
        description:
          "Cada consulta se adapta a tu momento vital, tu historia y tus objetivos de trabajo terapéutico.",
      },
      {
        title: "Acompañamiento profesional",
        description:
          "Intervenciones clínicas cuidadas, con escucha activa y criterios de abordaje consistentes.",
      },
      {
        title: "Presencial y virtual",
        description:
          "Opciones flexibles para sostener la continuidad del proceso según tu disponibilidad.",
      },
    ],
  },
  services: {
    eyebrow: "Áreas de atención",
    title: "Acompañamiento terapéutico para distintas necesidades emocionales",
    description:
      "Las consultas se orientan a procesos frecuentes de malestar emocional, regulación, toma de decisiones y sostén subjetivo en momentos de cambio.",
    items: [
      {
        title: "Terapia individual",
        description:
          "Espacio de trabajo clínico para abordar malestar, conflictos personales, vínculos y procesos de cambio.",
        tag: "Adultos",
        featuredOnHome: true,
      },
      {
        title: "Ansiedad y estrés",
        description:
          "Acompañamiento para síntomas de ansiedad, sobrecarga mental, insomnio y tensión sostenida.",
        tag: "Regulación emocional",
        featuredOnHome: true,
      },
      {
        title: "Acompañamiento emocional",
        description:
          "Apoyo terapéutico en duelos, crisis vitales, cambios importantes o momentos de incertidumbre.",
        featuredOnHome: true,
      },
      {
        title: "Orientación para adolescentes y adultos",
        description:
          "Espacio de consulta para procesos evolutivos, convivencia, identidad y toma de decisiones.",
        tag: "Adolescentes / Adultos",
        featuredOnHome: false,
      },
      {
        title: "Terapia presencial",
        description:
          "Atención en consultorio con turnos programados en ubicaciones seleccionadas.",
        tag: "En consultorio",
      },
      {
        title: "Terapia virtual",
        description:
          "Consultas online con la misma calidad de escucha y encuadre terapéutico, desde donde estés.",
        tag: "Online",
      },
    ],
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
    eyebrow: "Honorarios profesionales",
    title: "Valores de consulta según modalidad",
    description:
      "Los honorarios reflejan un trabajo terapéutico cuidado, profesional y sostenido. Se comparten con transparencia para que puedas planificar tu atención.",
    note: "Los valores pueden variar según modalidad, duración de entrevista inicial o necesidades específicas de abordaje. Consultá para opciones de pago.",
    ctaLabel: "Agendar consulta",
    items: [
      {
        title: "Sesión individual presencial",
        price: "ARS 28.000",
        description: "Consulta de seguimiento en consultorio (50 minutos).",
        badge: "Presencial",
      },
      {
        title: "Sesión individual virtual",
        price: "ARS 26.000",
        description: "Consulta online coordinada y confidencial (50 minutos).",
        badge: "Online",
      },
      {
        title: "Entrevista inicial",
        price: "ARS 30.000",
        description: "Primera consulta para conocer tu motivo y establecer el encuadre terapéutico.",
        badge: "Primera consulta",
      },
    ],
  },
  lowCostProgram: {
    eyebrow: "Atención en programa accesible",
    title: "Opciones de reducción de honorarios",
    description:
      "Existe disponibilidad limitada de cupos para acompañamiento con honorarios reducidos, orientado a personas en dificultades económicas momentáneas.",
    criteriaNote: "La asignación se realiza previa evaluación de la situación y según disponibilidad vigente de cupos.",
    ctaLabel: "Solicitar evaluación",
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
    title: "Si sentís que es un buen momento para empezar, podemos coordinar una primera consulta",
    description:
      "Agendá un turno o escribí por WhatsApp para resolver dudas sobre modalidad, horarios o disponibilidad.",
    primaryCtaLabel: "Agendar consulta",
    secondaryCtaLabel: "Escribir por WhatsApp",
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
