"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  es: {
    project: {
      location: "Ubicación",
      architects: "Proyecto",
      surface: "Superficie",
      year: "Año",
    },
    nav: {
      llaveEnMano: "LLAVE EN MANO",
      obras: "OBRAS",
      servicios: "SERVICIOS",
      terminaciones: "TERMINACIONES",
      nosotros: "NOSOTROS",
      comoTrabajamos: "COMO TRABAJAMOS",
      valores: "VALORES",
      contacto: "CONTACTO",
    },
    home: {
      hero: {
        slides: [
          { title: "CONSTRUCCIONES DE ALTA GAMA", subtitle: "Excelencia en cada detalle" },
          { title: "PROYECTOS LLAVE EN MANO", subtitle: "De la idea a la realidad" },
          { title: "CALIDAD Y COMPROMISO", subtitle: "Más de 20 años de experiencia" },
          { title: "DISEÑO Y FUNCIONALIDAD", subtitle: "Espacios que inspiran" },
          { title: "INNOVACIÓN CONSTRUCTIVA", subtitle: "Tecnología y tradición" },
        ],
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones integrales en construcción para proyectos residenciales y comerciales",
        cards: {
          turnkey: {
            title: "Llave en Mano",
            description: "Proyectos completos desde el diseño hasta la entrega final",
            link: "Ver más →",
          },
          projects: {
            title: "Obras",
            description: "Galería de proyectos realizados y en ejecución",
            link: "Ver más →",
          },
          about: {
            title: "Nosotros",
            description: "Conoce nuestro equipo y trayectoria profesional",
            link: "Ver más →",
          },
          values: {
            title: "Valores",
            description: "Los principios que guían nuestro trabajo diario",
            link: "Ver más →",
          },
        },
      },
      cta: {
        title: "¿Listo para comenzar tu proyecto?",
        subtitle: "Contáctanos hoy y descubre cómo podemos hacer realidad tu visión",
        button: "Solicitar Presupuesto",
      },
    },
    llaveEnMano: {
      hero: {
        title: "Llave en Mano",
        subtitle: "Soluciones completas de construcción, desde el concepto hasta la entrega",
      },
      intro: {
        title: "Sistema Llave en Mano",
        description:
          'En HOQUI Construcciones recomendamos el sistema "Llave en mano". Bajo esta modalidad, nuestra empresa es el único responsable de todos los detalles de principio a fin de la obra, desde el movimiento de suelo hasta la pintura de la casa o el último detalle acordado en el pliego del proyecto.',
      },
      benefits: {
        quality: {
          title: "Calidad Comprobable",
          description:
            "El asesoramiento y seguimiento constante aseguran la calidad y satisfacción final. Construimos en forma tradicional o en seco, incorporando nuevos productos, tecnologías y criterios de eficiencia energética.",
          details:
            "Alta supervisión y seguimiento profesional lo cual nos permite construir con máxima calidad, con acabadas terminaciones y detalles que hacen que su valor se conserve en el tiempo acordado en el pliego del proyecto.",
        },
        price: {
          title: "Precio Cierto",
          description:
            "En el Presupuesto Definitivo se encuentra detallada cada una de las tareas a ejecutar con sus cantidades y precios unitarios, además se elabora un Plan de Trabajos y la curva Inversiones: donde se indican las tareas a realizar cada mes, los desembolsos mensuales y el precio definido para el total de la obra.",
        },
        deadline: {
          title: "Plazo Cierto",
          description:
            "Con la elaboración del plan de trabajos y el seguimiento mensual de los avances le aseguramos al cliente el total cumplimiento del plazo de ejecución comprometido a inicios de la obra.",
        },
        personalized: {
          title: "Trato Personalizado",
          description:
            "El diálogo contínuo con el Propietario nos permite responder en tiempo y forma sus necesidades. Estamos junto a Ud acompañando cada decisión y cada paso en la construcción de su emprendimiento aconsejando y sugiriendo distintas alternativas en función de nuestra basta experiencia en la zona.",
        },
        postSale: {
          title: "Servicio de Post Venta",
          description: "Nuestro compromiso se extiende más allá de la ejecución de obra de su casa.",
          details: "Seguimos monitoreando su obra",
        },
        warranty: {
          title: "Un Año de Garantía",
          description: "Suma tranquilidad a la ejecución de su proyecto",
        },
      },
      cta: {
        title: "¿Listo para comenzar tu proyecto?",
        subtitle:
          "Contactanos hoy y descubrí cómo podemos hacer realidad tu proyecto con nuestro sistema llave en mano",
        button: "Solicitar Consulta",
      },
    },
    servicios: {
      hero: {
        title: "Nuestros Servicios",
      },
      items: {
        ejecucion: "Ejecución de Obra",
        administracion: "Administración de Proyectos",
        desarrollos: "Desarrollos Inmobiliarios",
        remodelaciones: "Remodelaciones",
        autosustentables: "Construcción de Casas Autosustentables",
        contratoLlave: "Contrato Llave en Mano o por Precio Fijo",
        postVenta: "Servicio Post Venta",
      },
    },
    ejecucionObra: {
      hero: {
        title: "Ejecución de Obra",
      },
      intro: {
        title: "Calidad Comprobable",
        p1: "Realizamos todo lo concerniente a la planificación, y programación de las distintas tareas de la obra, teniendo como único fin lograr la plena satisfacción del cliente cuidando al máximo los 3 aspectos principales:",
        p1Bold: " tiempo, costo y calidad",
        p2: "Llevamos a cabo el control y monitoreo constante de la ejecución de vuestro proyecto, con el fin de anticiparnos a posibles eventualidades que pudieran presentarse. De forma constante analizamos nuevas estrategias y procedimientos de construcción con el fin de generar tecnologías para mejorar la concreción de proyecto y hacerlo más rentable para nuestros clientes.",
        p3: "Asimismo, colaboramos con estudios de arquitectos de reconocido prestigio para hacer realidad sus proyectos.",
      },
      modalidades: {
        title: "La ejecución de su obra puede realizarse con diferentes modalidades de contratación:",
        admin: {
          title: "Administración de Proyectos",
          description: "Gestión integral de su proyecto con transparencia total en costos y procesos.",
        },
        llave: {
          title: "Contrato Llave en Mano o por Precio Fijo",
          description: "Precio cerrado desde el inicio, sin sorpresas ni costos adicionales.",
        },
      },
      compromisos: {
        title: "Nuestros Compromisos",
        manoObra: {
          title: "Mano de Obra",
          description:
            'En cada actividad nos esmeramos por utilizar la buena práctica constructiva y a utilizar personal capacitado para cada labor. La empresa estandariza sus procesos constructivos mediante un documento llamado "Azora Prácticas constructivas".',
        },
        seguridad: {
          title: "Seguridad Laboral",
          description:
            "Se cuenta con políticas de seguridad ocupacional para salvaguardar la integridad física y mental de los trabajadores. La seguridad del personal está primero que cualquier objetivo dentro de la obra.",
        },
        adicionales: {
          title: "Adicionales",
          description:
            "Una vez firmado el contrato es posible realizar modificaciones adicionales mediante un ordenado sistema de registro.",
        },
        supervision: {
          title: "Supervisión",
          description:
            "Presencia profesional permanente con supervisión diaria de cada tarea verificando el uso adecuado de los recursos.",
        },
        responsabilidad: {
          title: "Responsabilidad Laboral",
          description:
            "Nuestra empresa asume el control de todos los asuntos relacionados con la seguridad ocupacional, derechos laborales y cargas sociales del personal a su cargo, sin ninguna responsabilidad para el propietario.",
        },
        sistemas: {
          title: "Sistemas Constructivos",
          description: "La Empresa se adapta al sistema constructivo que el Estudio de Arquitectura especifique:",
          list: ["Tradicional", "En seco", "Steel frame"],
        },
      },
    },
    valores: {
      hero: {
        title: "Nuestros Valores",
        subtitle: "Los principios que guían cada decisión y acción en HOQUI Construcciones",
      },
      intro:
        "Cuando se creó HOQUI Construcciones, nos propusimos basar nuestra filosofía de empresa en la satisfacción del cliente apoyándonos en tres pilares básicos",
      pillars: {
        compromiso: {
          title: "Compromiso con el Cliente",
          description:
            "Consideramos al Cliente como el centro de nuestra actividad. Para ellos ofrecemos un trato personalizado, comunicación continua y amplia experiencia. La definición de un marco de expectativas claras y el cumplimiento de las mismas es el principal objetivo a cumplir. Nos comprometemos únicamente con aquellos proyectos que podemos brindar una atención personalizada.",
        },
        calidad: {
          title: "Calidad",
          description:
            "Realizamos trabajos que superen las expectativas de nuestros clientes, cumpliendo con los tiempos de entregas preestablecidos y buscando detectar errores antes de que lleguen al cliente.",
        },
        garantia: {
          title: "Garantía",
          description:
            "Ofrecemos una garantía y servicio post venta por escrito de cada obra. El compromiso de garantía de nuestros trabajos es llevado más allá de los períodos estrictamente legales a través de nuestro servicio de post venta.",
        },
      },
      additionalIntro:
        "A lo largo de estos años de trabajo y junto al crecimiento y afianzamiento de los valores de base hemos integrado como parte de nuestra idiosincrasia, nuevas inquietudes tales como:",
      additional: {
        planificacion: {
          title: "Planificación",
          description:
            "La adecuada planificación es la clave del éxito de todo proyecto y forma parte integral de nuestros procesos.",
        },
        comunicacion: {
          title: "Comunicación Efectiva",
          description:
            "Nos esmeramos por lograr una comunicación eficiente y transparente en todos los procesos, hacia clientes, proveedores y colaboradores, asegurando el conocimiento de todas las partes de los requerimientos y metas en cada proyecto.",
        },
        control: {
          title: "Control de Procesos",
          description:
            "El control adecuado durante la ejecución de las obras garantiza el buen desarrollo del proyecto y permite tomar decisiones oportunamente. Contamos con sistemas de control de costos y avance de obras que brindan al cliente información detallada del progreso e inversión de recursos.",
        },
        medioAmbiente: {
          title: "Respeto al Medio Ambiente",
          description:
            "Procuramos causar el menor impacto medioambiental posible, respetando la reserva de la flora y fauna local y fomentando el uso de elementos que generan ahorro y eficiencia de la energía.",
        },
        proveedores: {
          title: "Calidad en la Selección de Proveedores",
          description:
            "Contamos con una amplia cartera de proveedores que nos garantizan calidad y disponibilidad de materiales, además de la responsabilidad a la hora de la entrega.",
        },
        trabajadores: {
          title: "Interés por el Bienestar y Desarrollo de los Trabajadores",
          description:
            "Consideramos a las personas como la clave del éxito. Por ello, invertimos en recursos materiales y económicos para desarrollar a nuestros empleados y generar un excelente clima laboral.",
        },
        innovacion: {
          title: "Innovación y Mejora Continua",
          description:
            "Perseguimos permanentemente la incorporación de nuevas modalidades de trabajo, la utilización de nuevos materiales y la incorporación de tecnología en todas las áreas de nuestra empresa.",
        },
        equipo: {
          title: "Trabajo en Equipo",
          description:
            "Promovemos el trabajo en equipo en toda la organización con el fin de optimizar la comunicación entre las diferentes áreas y favorecer el aprendizaje.",
        },
      },
    },
    nosotros: {
      hero: {
        title: "Nosotros",
        subtitle: "Construyendo sueños con pasión y profesionalismo desde hace más de dos décadas",
      },
      historia: {
        title: "Nuestra Historia",
        p1: "HOQUI Construcciones S.R.L. nace de la visión de crear espacios que transformen la vida de las personas. Con más de 20 años en el mercado, nos hemos consolidado como una empresa líder en construcción de alta gama.",
        p2: "Nuestro equipo está formado por profesionales altamente capacitados que comparten la pasión por la excelencia y el compromiso con cada proyecto que emprendemos.",
        p3: "Cada obra que realizamos lleva nuestro sello de calidad, innovación y dedicación, garantizando resultados que superan las expectativas de nuestros clientes.",
      },
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Completados",
        clients: "Clientes Satisfechos",
        commitment: "Compromiso",
      },
      mision: {
        title: "Nuestra Misión",
        description:
          "Brindar soluciones constructivas integrales de la más alta calidad, superando las expectativas de nuestros clientes mediante la innovación, el profesionalismo y el compromiso con la excelencia.",
      },
      vision: {
        title: "Nuestra Visión",
        description:
          "Ser la empresa constructora de referencia en el mercado de alta gama, reconocida por la calidad de nuestras obras, la satisfacción de nuestros clientes y nuestro compromiso con la innovación y la sustentabilidad.",
      },
      equipo: {
        title: "Nuestro Equipo",
        subtitle: "Profesionales comprometidos con la excelencia en cada proyecto",
      },
    },
    contacto: {
      hero: {
        title: "Contacto",
        subtitle: "Estamos listos para hacer realidad tu proyecto. Contáctanos hoy mismo",
      },
      form: {
        title: "Envíanos un Mensaje",
        name: "Nombre Completo",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        successMessage: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
        errorMessage: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      },
      info: {
        title: "Información de Contacto",
        phone: "Teléfono",
        email: "Email",
        office: "Oficina",
        hours: "Horario de Atención",
        location: "Ubicación",
        schedule: {
          weekdays: "Lunes a Viernes de 9 hs a 18hs",
          saturday: "Sábados: 9:00 - 13:00",
          sunday: "Domingos: Cerrado",
        },
      },
    },
    obras: {
      title: "Nuestras Obras",
      subtitle: "Proyectos que reflejan nuestra pasión por la excelencia constructiva",
    },
    proyectoCD: {
      backToProjects: "Volver a Obras",
      title: "Proyecto CD",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Arq Isa Gioioso & Asoc",
      surfaceLabel: "Superficie",
      surface: "275 m²",
      yearLabel: "Año",
      year: "2006",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de madera de Oregón bajo cubierta de chapa prepintada negra, revestimiento de piedra moloneada y traslapo de Oregón. Aberturas en lenga con DVH, pisos interiores de laja negra San Luis con detalles en madera.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoCC: {
      backToProjects: "Volver a Obras",
      title: "Proyecto CC",
      locationLabel: "Ubicación",
      location: "Av. Bustillo km 18",
      architectLabel: "Proyecto",
      architect: "Arq Donaldson & Asociados",
      surfaceLabel: "Superficie",
      surface: "1.280 m²",
      yearLabel: "Año",
      year: "2009",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de pizarra española sobre estructura de Oregón, revestimiento exterior en piedra labrada color tiza y traslapo de Oregón, aberturas de lenga con DVH, pisos de madera de ciprés.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoCasaMaiten: {
      backToProjects: "Volver a Obras",
      title: "Proyecto Casa Maiten",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Masllorens Bonangelino Arq",
      surfaceLabel: "Superficie",
      surface: "830 m²",
      yearLabel: "Año",
      year: "2011",
      characteristicsTitle: "Características",
      characteristics:
        "Vivienda multifamiliar. Techo chapa gravillada Decka shake sobre estructura de oregón, revestimiento exterior en piedra labrada beige y siding símil madera, aberturas de pvc foliadas madera color roble con DVH, pisos interiores en piedra laja.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoB: {
      backToProjects: "Volver a Obras",
      title: "Proyecto B",
      locationLabel: "Ubicación",
      location: "Península San Pedro, Bariloche",
      architectLabel: "Proyecto",
      architect: "Pereyra Iraola & Valls",
      surfaceLabel: "Superficie",
      surface: "1.050 m²",
      yearLabel: "Año",
      year: "2009",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de manta gravillada colocado sobre estructura de madera de lenga, revestimiento exterior de piedra labrada con junta tomada y traslapo de lenga. Interior: pisos de madera prefinish de curupai, aberturas de lenga con DVH.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoCapilla: {
      backToProjects: "Volver a Obras",
      title: "Proyecto Capilla",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Isa Gioioso & Asoc",
      surfaceLabel: "Superficie",
      surface: "150 m²",
      yearLabel: "Año",
      year: "2009",
      characteristicsTitle: "Características",
      characteristics:
        "Techo chapa gravillada Decka shake sobre estructura de ciprés, revestimiento exterior en piedra labrada y tronco cabañero, aberturas en lenga con DVH, pisos interiores en piedra laja regular con detalles en madera.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoC: {
      backToProjects: "Volver a Obras",
      title: "Proyecto C",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Arq Guarnieri Fernando",
      surfaceLabel: "Superficie",
      surface: "434 m²",
      yearLabel: "Año",
      year: "2014",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de madera de Oregón bajo cubierta de chapa prepintada negra, revestimiento exterior de pirca San Luis y traslapo de Oregón, aberturas de PVC foliado con DVH, piso de madera de lapacho hidrolaqueado.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoD: {
      backToProjects: "Volver a Obras",
      title: "Proyecto D",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Alric Galindez Lloveras",
      surfaceLabel: "Superficie",
      surface: "428 m²",
      yearLabel: "Año",
      year: "2014",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de manta gravillada colocado sobre estructura metálica, revestimiento exterior de madera de Oregón y piedra negra contenida en canastos, aberturas de aluminio prepintado negro y DVH, micropisos de cemento alisado.",
      award:
        'Premio del Colegio de Arquitectos de Río Negro y FADEA a la "Vivienda Unifamiliar mejor construída 2015".',
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoArelauquen: {
      backToProjects: "Volver a Obras",
      title: "Proyecto Arelauquen",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Coccifi Coccifi & Asoc",
      surfaceLabel: "Superficie",
      surface: "760 m²",
      yearLabel: "Año",
      year: "2013",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de chapa prepintada negra sobre estructura de madera de Oregón, revestimiento exterior en placas de Kopak surfaces símil madera, aberturas de PVC foliados con DVH.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoM: {
      backToProjects: "Volver a Obras",
      title: "Proyecto M",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Alric Galindez Lloveras",
      surfaceLabel: "Superficie",
      surface: "480 m²",
      yearLabel: "Año",
      year: "2010",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de manta gravillada colocado sobre estructura metálica, revestimiento exterior de madera de Oregón, colocados sobre placa cementicia, aberturas de PVC negro con DVH.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoMarenco: {
      backToProjects: "Volver a Obras",
      title: "Proyecto Marenco",
      locationLabel: "Ubicación",
      location: "—",
      surfaceLabel: "Superficie",
      surface: "No disponible",
      yearLabel: "Año",
      year: "2009",
      photosLabel: "Fotos",
      photographer: "Guadalupe De la Vega",
    },
    proyectoR: {
      backToProjects: "Volver a Obras",
      title: "Proyecto R",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Isa Gioioso & Asoc",
      surfaceLabel: "Superficie",
      surface: "315 m²",
      yearLabel: "Año",
      year: "2008",
      characteristicsTitle: "Características",
      characteristics:
        "Techo de madera de Oregón bajo cubierta de chapa prepintada negra, revestimiento de piedra labrada junta cerrada y traslapo de Oregón. Aberturas en lenga con DVH, pisos interiores de madera combinados con piedra laja.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoS: {
      backToProjects: "Volver a Obras",
      title: "Proyecto S",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Arq Isa Gioioso & Asoc",
      surfaceLabel: "Superficie",
      surface: "540 m²",
      yearLabel: "Año",
      year: "2008",
      characteristicsTitle: "Características",
      characteristics:
        "Techo chapa gravillada Decka shake sobre estructura de oregón, revestimiento exterior en piedra labrada y tronco cabañero, aberturas en lenga con DVH pisos interiores en piedra laja regular con detalles en madera.",
      photosLabel: "Fotos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoLaFlorida: {
      backToProjects: "Volver a Obras",
      title: "Conjunto Viviendas LA FLORIDA",
      locationLabel: "Ubicación",
      location: "Av. Bustillo, Bariloche",
      architectLabel: "Proyecto",
      architect: "Estudio BMA",
      surfaceLabel: "Superficie",
      surface: "5.000 m²",
      yearLabel: "Año",
      year: "2024",
    },
    proyectoCasaRM: {
      backToProjects: "Volver a Obras",
      title: "Casa R-M",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Estudio Alric Galindez",
      surfaceLabel: "Superficie",
      surface: "260 m²",
      yearLabel: "Año",
      year: "2022",
    },
    proyectoSR: {
      backToProjects: "Volver a Obras",
      title: "S+R",
      locationLabel: "Ubicación",
      location: "Circuito Chico, Bariloche",
      architectLabel: "Proyecto",
      architect: "Arqs. Isa Gioioso & Martina Hoqui",
      surfaceLabel: "Superficie",
      surface: "485 m²",
      yearLabel: "Año",
      year: "2022",
    },
    proyectoCasaCH: {
      backToProjects: "Volver a Obras",
      title: "Casa CH",
      locationLabel: "Ubicación",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Proyecto",
      architect: "Estudio Alric Galindez",
      surfaceLabel: "Superficie",
      surface: "320 m²",
      yearLabel: "Año",
      year: "2021",
    },
    desarrolloB612: {
      backToProjects: "Volver a Obras",
      title: "Desarrollo B612",
      locationLabel: "Ubicación",
      location: "Bustillo 5440, Bariloche",
      architectLabel: "Proyecto",
      architect: "Alric Galindez Arquitectos",
      surfaceLabel: "Superficie",
      surface: "3.300 m²",
      yearLabel: "Año",
      year: "2024",
      characteristicsTitle: "Características",
      characteristics:
        "Desarrollo residencial de viviendas multifamiliares con arquitectura contemporánea. Techos curvos de chapa prepintada blanca sobre estructura metálica, revestimiento exterior en chapa ondulada blanca y paneles perforados, aberturas de aluminio con DVH, escaleras metálicas exteriores con barandas de cable de acero.",
    },
  },
  en: {
    project: {
      location: "Location",
      architects: "Project",
      surface: "Surface",
      year: "Year",
    },
    nav: {
      llaveEnMano: "TURNKEY",
      obras: "PROJECTS",
      servicios: "SERVICES",
      terminaciones: "FINISHES",
      nosotros: "ABOUT US",
      comoTrabajamos: "HOW WE WORK",
      valores: "VALUES",
      contacto: "CONTACT",
    },
    home: {
      hero: {
        slides: [
          { title: "HIGH-END CONSTRUCTION", subtitle: "Excellence in every detail" },
          { title: "TURNKEY PROJECTS", subtitle: "From idea to reality" },
          { title: "QUALITY AND COMMITMENT", subtitle: "Over 20 years of experience" },
          { title: "DESIGN AND FUNCTIONALITY", subtitle: "Spaces that inspire" },
          { title: "CONSTRUCTION INNOVATION", subtitle: "Technology and tradition" },
        ],
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive construction solutions for residential and commercial projects",
        cards: {
          turnkey: {
            title: "Turnkey",
            description: "Complete projects from design to final delivery",
            link: "Learn more →",
          },
          projects: {
            title: "Projects",
            description: "Gallery of completed and ongoing projects",
            link: "Learn more →",
          },
          about: {
            title: "About Us",
            description: "Meet our team and professional background",
            link: "Learn more →",
          },
          values: {
            title: "Values",
            description: "The principles that guide our daily work",
            link: "Learn more →",
          },
        },
      },
      cta: {
        title: "Ready to start your project?",
        subtitle: "Contact us today and discover how we can bring your vision to life",
        button: "Request Quote",
      },
    },
    llaveEnMano: {
      hero: {
        title: "Turnkey",
        subtitle: "Complete construction solutions, from concept to delivery",
      },
      intro: {
        title: "Turnkey System",
        description:
          'At HOQUI Construcciones we recommend the "Turnkey" system. Under this modality, our company is solely responsible for all details from start to finish of the project, from earthwork to house painting or the last detail agreed upon in the project specifications.',
      },
      benefits: {
        quality: {
          title: "Verifiable Quality",
          description:
            "Constant advice and monitoring ensure quality and final satisfaction. We build traditionally or with dry construction, incorporating new products, technologies and energy efficiency criteria.",
          details:
            "High supervision and professional monitoring which allows us to build with maximum quality, with finished finishes and details that make its value preserved in the time agreed in the project specifications.",
        },
        price: {
          title: "Fixed Price",
          description:
            "The Final Budget details each of the tasks to be executed with their quantities and unit prices. In addition, a Work Plan and Investment curve are prepared: indicating the tasks to be performed each month, monthly disbursements and the defined price for the total work.",
        },
        deadline: {
          title: "Fixed Deadline",
          description:
            "With the preparation of the work plan and monthly monitoring of progress, we assure the client full compliance with the execution deadline committed at the beginning of the work.",
        },
        personalized: {
          title: "Personalized Service",
          description:
            "Continuous dialogue with the Owner allows us to respond to their needs in a timely manner. We are with you accompanying every decision and every step in the construction of your project, advising and suggesting different alternatives based on our vast experience in the area.",
        },
        postSale: {
          title: "After-Sales Service",
          description: "Our commitment extends beyond the execution of your house construction.",
          details: "We continue monitoring your project",
        },
        warranty: {
          title: "One Year Warranty",
          description: "Adds peace of mind to the execution of your project",
        },
      },
      cta: {
        title: "Ready to start your project?",
        subtitle: "Contact us today and discover how we can make your project a reality with our turnkey system",
        button: "Request Consultation",
      },
    },
    servicios: {
      hero: {
        title: "Our Services",
      },
      items: {
        ejecucion: "Construction Execution",
        administracion: "Project Management",
        desarrollos: "Real Estate Development",
        remodelaciones: "Remodeling",
        autosustentables: "Sustainable Home Construction",
        contratoLlave: "Turnkey or Fixed Price Contract",
        postVenta: "After-Sales Service",
      },
    },
    ejecucionObra: {
      hero: {
        title: "Construction Execution",
      },
      intro: {
        title: "Verifiable Quality",
        p1: "We carry out everything related to planning and scheduling of the different tasks of the work, with the sole purpose of achieving full customer satisfaction, taking maximum care of the 3 main aspects:",
        p1Bold: " time, cost and quality",
        p2: "We carry out constant control and monitoring of the execution of your project, in order to anticipate possible eventualities that may arise. We constantly analyze new strategies and construction procedures in order to generate technologies to improve project completion and make it more profitable for our clients.",
        p3: "Likewise, we collaborate with prestigious architectural firms to make their projects a reality.",
      },
      modalidades: {
        title: "The execution of your work can be carried out with different contracting modalities:",
        admin: {
          title: "Project Management",
          description: "Comprehensive management of your project with total transparency in costs and processes.",
        },
        llave: {
          title: "Turnkey or Fixed Price Contract",
          description: "Closed price from the start, no surprises or additional costs.",
        },
      },
      compromisos: {
        title: "Our Commitments",
        manoObra: {
          title: "Labor",
          description:
            'In each activity we strive to use good construction practices and to use trained personnel for each task. The company standardizes its construction processes through a document called "Azora Construction Practices".',
        },
        seguridad: {
          title: "Occupational Safety",
          description:
            "We have occupational safety policies to safeguard the physical and mental integrity of workers. Personnel safety comes first before any objective within the work.",
        },
        adicionales: {
          title: "Additions",
          description:
            "Once the contract is signed, it is possible to make additional modifications through an orderly registration system.",
        },
        supervision: {
          title: "Supervision",
          description:
            "Permanent professional presence with daily supervision of each task verifying the proper use of resources.",
        },
        responsabilidad: {
          title: "Labor Responsibility",
          description:
            "Our company assumes control of all matters related to occupational safety, labor rights and social charges of the personnel in its charge, without any responsibility for the owner.",
        },
        sistemas: {
          title: "Construction Systems",
          description: "The Company adapts to the construction system specified by the Architectural Firm:",
          list: ["Traditional", "Dry construction", "Steel frame"],
        },
      },
    },
    valores: {
      hero: {
        title: "Our Values",
        subtitle: "The principles that guide every decision and action at HOQUI Construcciones",
      },
      intro:
        "When HOQUI Construcciones was created, we set out to base our company philosophy on customer satisfaction, relying on three basic pillars",
      pillars: {
        compromiso: {
          title: "Commitment to the Client",
          description:
            "We consider the Client as the center of our activity. For them we offer personalized treatment, continuous communication and extensive experience. The definition of a framework of clear expectations and their fulfillment is the main objective to be met. We only commit to those projects that we can provide personalized attention.",
        },
        calidad: {
          title: "Quality",
          description:
            "We perform work that exceeds our clients' expectations, meeting pre-established delivery times and seeking to detect errors before they reach the client.",
        },
        garantia: {
          title: "Warranty",
          description:
            "We offer a written warranty and after-sales service for each work. The warranty commitment of our work is carried beyond strictly legal periods through our after-sales service.",
        },
      },
      additionalIntro:
        "Throughout these years of work and together with the growth and consolidation of the base values, we have integrated as part of our idiosyncrasy, new concerns such as:",
      additional: {
        planificacion: {
          title: "Planning",
          description:
            "Proper planning is the key to the success of any project and is an integral part of our processes.",
        },
        comunicacion: {
          title: "Effective Communication",
          description:
            "We strive to achieve efficient and transparent communication in all processes, towards clients, suppliers and collaborators, ensuring that all parties are aware of the requirements and goals in each project.",
        },
        control: {
          title: "Process Control",
          description:
            "Proper control during the execution of works guarantees the good development of the project and allows timely decision-making. We have cost control and work progress systems that provide the client with detailed information on progress and investment.",
        },
        medioAmbiente: {
          title: "Respect for the Environment",
          description:
            "We try to cause the least possible environmental impact, respecting the reserve of local flora and fauna and promoting the use of elements that generate energy savings and efficiency.",
        },
        proveedores: {
          title: "Quality in Supplier Selection",
          description:
            "We have a wide portfolio of suppliers that guarantee us quality and availability of materials, in addition to responsibility at the time of delivery.",
        },
        trabajadores: {
          title: "Interest in the Well-being and Development of Workers",
          description:
            "We consider people as the key to success. Therefore, we invest in material and economic resources to develop our employees and generate an excellent work environment.",
        },
        innovacion: {
          title: "Innovation and Continuous Improvement",
          description:
            "We permanently pursue the incorporation of new work modalities, the use of new materials and the incorporation of technology in all areas of our company.",
        },
        equipo: {
          title: "Teamwork",
          description:
            "We promote teamwork throughout the organization in order to optimize communication between different areas and favor learning.",
        },
      },
    },
    nosotros: {
      hero: {
        title: "About Us",
        subtitle: "Building dreams with passion and professionalism for over two decades",
      },
      historia: {
        title: "Our Story",
        p1: "HOQUI Construcciones S.R.L. was born from the vision of creating spaces that transform people's lives. With over 20 years in the market, we have established ourselves as a leading company in high-end construction.",
        p2: "Our team is made up of highly trained professionals who share a passion for excellence and commitment to every project we undertake.",
        p3: "Every work we carry out bears our seal of quality, innovation and dedication, guaranteeing results that exceed our clients' expectations.",
      },
      stats: {
        experience: "Years of Experience",
        projects: "Completed Projects",
        clients: "Satisfied Clients",
        commitment: "Commitment",
      },
      mision: {
        title: "Our Mission",
        description:
          "To provide comprehensive construction solutions of the highest quality, exceeding our clients' expectations through innovation, professionalism and commitment to excellence.",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be the reference construction company in the high-end market, recognized for the quality of our works, customer satisfaction and our commitment to innovation and sustainability.",
      },
      equipo: {
        title: "Our Team",
        subtitle: "Professionals committed to excellence in every project",
      },
    },
    contacto: {
      hero: {
        title: "Contact",
        subtitle: "We are ready to make your project a reality. Contact us today",
      },
      form: {
        title: "Send us a Message",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send Message",
        sending: "Sending...",
        successMessage: "Message sent successfully! We will contact you soon.",
        errorMessage: "There was an error sending the message. Please try again.",
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        office: "Office",
        hours: "Business Hours",
        location: "Location",
        schedule: {
          weekdays: "Monday to Friday from 9 AM to 6 PM",
          saturday: "Saturday: 9:00 AM - 1:00 PM",
          sunday: "Sunday: Closed",
        },
      },
    },
    obras: {
      title: "Our Projects",
      subtitle: "Projects that reflect our passion for construction excellence",
    },
    proyectoCD: {
      backToProjects: "Back to Projects",
      title: "CD Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Arch. Isa Gioioso & Associates",
      surfaceLabel: "Surface",
      surface: "275 m²",
      yearLabel: "Year",
      year: "2006",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Oregon wood roof under black prepainted sheet metal cover, moloneada stone cladding and Oregon lap siding. Lenga wood windows with double glazing, black San Luis flagstone interior floors with wood details.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoCC: {
      backToProjects: "Back to Projects",
      title: "CC Project",
      locationLabel: "Location",
      location: "Av. Bustillo km 18",
      architectLabel: "Project",
      architect: "Arch. Donaldson & Associates",
      surfaceLabel: "Surface",
      surface: "1,280 m²",
      yearLabel: "Year",
      year: "2009",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Spanish slate roof on Oregon wood structure, exterior cladding in chalk-colored carved stone and Oregon lap siding, lenga wood windows with double glazing, cypress wood floors.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoCasaMaiten: {
      backToProjects: "Back to Projects",
      title: "Casa Maiten Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Masllorens Bonangelino Arch.",
      surfaceLabel: "Surface",
      surface: "830 m²",
      yearLabel: "Year",
      year: "2011",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Multi-family residence. Decka shake gravel sheet metal roof on Oregon wood structure, exterior cladding in beige carved stone and wood-like siding, oak-foiled PVC windows with double glazing, interior flagstone floors.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoB: {
      backToProjects: "Back to Projects",
      title: "B Project",
      locationLabel: "Location",
      location: "Península San Pedro, Bariloche",
      architectLabel: "Project",
      architect: "Pereyra Iraola & Valls",
      surfaceLabel: "Surface",
      surface: "1,050 m²",
      yearLabel: "Year",
      year: "2009",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Gravel membrane roof placed on lenga wood structure, exterior cladding of carved stone with pointed joints and lenga lap siding. Interior: prefinished curupai wood floors, lenga wood windows with double glazing.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoCapilla: {
      backToProjects: "Back to Projects",
      title: "Chapel Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Isa Gioioso & Associates",
      surfaceLabel: "Surface",
      surface: "150 m²",
      yearLabel: "Year",
      year: "2009",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Decka shake gravel sheet metal roof on cypress wood structure, exterior cladding in carved stone and log cabin siding, lenga wood windows with double glazing, interior regular flagstone floors with wood details.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoC: {
      backToProjects: "Back to Projects",
      title: "C Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Arch. Guarnieri Fernando",
      surfaceLabel: "Surface",
      surface: "434 m²",
      yearLabel: "Year",
      year: "2014",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Oregon wood roof under black prepainted sheet metal cover, exterior cladding in San Luis stone masonry and Oregon lap siding, wood-foiled PVC windows with double glazing, hydrolacquered lapacho wood floors.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoD: {
      backToProjects: "Back to Projects",
      title: "D Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Alric Galindez Lloveras",
      surfaceLabel: "Surface",
      surface: "428 m²",
      yearLabel: "Year",
      year: "2014",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Gravel membrane roof placed on metal structure, exterior cladding in Oregon wood and black stone contained in gabion baskets, black prepainted aluminum windows with double glazing, polished cement microfloors.",
      award: 'Award from the College of Architects of Río Negro and FADEA for "Best Built Single-Family Home 2015".',
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoArelauquen: {
      backToProjects: "Back to Projects",
      title: "Arelauquen Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Coccifi Coccifi & Associates",
      surfaceLabel: "Surface",
      surface: "760 m²",
      yearLabel: "Year",
      year: "2013",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Black prepainted sheet metal roof on Oregon wood structure, exterior cladding in Kopak surfaces wood-like panels, wood-foiled PVC windows with double glazing.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoM: {
      backToProjects: "Back to Projects",
      title: "M Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Alric Galindez Lloveras",
      surfaceLabel: "Surface",
      surface: "480 m²",
      yearLabel: "Year",
      year: "2010",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Graveled membrane roof placed on metal structure, Oregon wood exterior cladding placed on cement board, black PVC windows with double glazing.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoMarenco: {
      backToProjects: "Back to Projects",
      title: "Marenco Project",
      locationLabel: "Location",
      location: "—",
      surfaceLabel: "Surface",
      surface: "Not available",
      yearLabel: "Year",
      year: "2009",
      photosLabel: "Photos",
      photographer: "Guadalupe De la Vega",
    },
    proyectoR: {
      backToProjects: "Back to Projects",
      title: "R Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Isa Gioioso & Associates",
      surfaceLabel: "Surface",
      surface: "315 m²",
      yearLabel: "Year",
      year: "2008",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Oregon wood roof under black prepainted sheet metal cover, carved stone cladding with closed joints and Oregon lap siding. Lenga wood windows with double glazing, interior wood floors combined with flagstone.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoS: {
      backToProjects: "Back to Projects",
      title: "S Project",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Arch. Isa Gioioso & Associates",
      surfaceLabel: "Surface",
      surface: "540 m²",
      yearLabel: "Year",
      year: "2008",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Decka shake gravel sheet metal roof on Oregon wood structure, exterior cladding in carved stone and log cabin siding, lenga wood windows with double glazing, interior regular flagstone floors with wood details.",
      photosLabel: "Photos",
      photographer: "Guadalupe De La Vega",
    },
    proyectoLaFlorida: {
      backToProjects: "Back to Projects",
      title: "LA FLORIDA Housing Complex",
      locationLabel: "Location",
      location: "Av. Bustillo, Bariloche",
      architectLabel: "Project",
      architect: "Estudio BMA",
      surfaceLabel: "Surface",
      surface: "5,000 m²",
      yearLabel: "Year",
      year: "2024",
    },
    proyectoCasaRM: {
      backToProjects: "Back to Projects",
      title: "Casa R-M",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Estudio Alric Galindez",
      surfaceLabel: "Surface",
      surface: "260 m²",
      yearLabel: "Year",
      year: "2022",
    },
    proyectoSR: {
      backToProjects: "Back to Projects",
      title: "S+R",
      locationLabel: "Location",
      location: "Circuito Chico, Bariloche",
      architectLabel: "Project",
      architect: "Archs. Isa Gioioso & Martina Hoqui",
      surfaceLabel: "Surface",
      surface: "485 m²",
      yearLabel: "Year",
      year: "2022",
    },
    proyectoCasaCH: {
      backToProjects: "Back to Projects",
      title: "Casa CH",
      locationLabel: "Location",
      location: "Arelauquen Golf & Country Club, Bariloche",
      architectLabel: "Project",
      architect: "Estudio Alric Galindez",
      surfaceLabel: "Surface",
      surface: "320 m²",
      yearLabel: "Year",
      year: "2021",
    },
    desarrolloB612: {
      backToProjects: "Back to Projects",
      title: "Desarrollo B612",
      locationLabel: "Location",
      location: "Bustillo 5440, Bariloche",
      architectLabel: "Project",
      architect: "Alric Galindez Arquitectos",
      surfaceLabel: "Surface",
      surface: "3,300 m²",
      yearLabel: "Year",
      year: "2024",
      characteristicsTitle: "Characteristics",
      characteristics:
        "Multi-family residential development with contemporary architecture. Curved white prepainted sheet metal roofs on metal structure, white corrugated sheet metal exterior cladding and perforated panels, aluminum windows with double glazing, exterior metal stairs with steel cable railings.",
    },
  },
}
