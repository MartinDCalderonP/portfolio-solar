export interface Experience {
  description?: string
  endDate: string
  id: string
  startDate: string
  title: string
}

export interface Project {
  description?: string
  id: string
  links?: string[]
  logo?: string
  title: string
  year?: number
}

export interface PlanetContent {
  colorVar: string
  description: string
  experiences?: Experience[]
  id: string
  name: string
  orbitVar: string
  projects?: Project[]
  size: string
  song: string
  title: string
  youtubeId: string
}

export const planets: PlanetContent[] = [
  {
    id: 'sun',
    name: 'Sol',
    title: 'Bienvenido!',
    description:
      'Este es mi portfolio creativo. Mi nombre es Martín Calderón y hoy los guiaré por algunos pedazos de mi vida. Acá van a encontrar los proyectos destacados de diversos ámbitos en los que trabajé. Como estoy convencido de que la mezcla de experiencias y formación abre las puertas a nuevas formas de pensar, en mi vida fui estudiando y atravesando distintas áreas, mientras a la vez voy sumando mis intereses a las cosas que hago. Podrán observar fácilmente que actualmente trabajo en desarrollo web, me encanta la música desde que soy muy chico y me gustan cosas como la astronomía y lo relacionado a lo científico. De chico miraba El Show Creativo de Juan Gujis y creo que algo de eso también se refleja acá y en lo que hago. 🌌\n\nHay otras cosas que forman parte de mi formación pero no son tan claramente visibles, como en esta web donde (aunque no lo mencione) salen a relucir las cosas que me llaman la atención y que el buen observador sabrá encontrar. La curiosidad ha sido una guía importante, espero que ustedes también se dejen llevar por ella. Mi padre solía hacer muchos juegos de palabras, lo que me incentivó a romper los patrones de las cosas. Como dice la frase usualmente atribuida a Schopenhauer: "el humor consiste en poner algo donde no va". ✨\n\nEste portfolio está armado como un sistema solar: cada planeta es una sección de mi historia. Cuanto más lejos del Sol, más personal o lateral es el tema, pero todos orbitan alrededor de lo mismo. Hacele click a cualquier planeta para explorarlo, y al Sol para volver siempre al inicio. También funciona con Tab y Enter para navegar con teclado. No todo lo que se mueve acá es un planeta, ojo con lo que cruza por ahí. 🛰️',
    colorVar: 'var(--color-sun)',
    orbitVar: 'var(--orbit-sun)',
    size: '80px',
    song: 'Here Comes the Sun - The Beatles',
    youtubeId: 'KQetemT1sWc'
  },
  {
    id: 'mercury',
    name: 'Mercurio',
    title: 'Experiencia profesional',
    description:
      'A lo largo de los años fui sumando experiencia en el mundo del desarrollo web, trabajando con clientes de todo el mundo y en equipos de distinto tamaño. Algunas cosas no las puedo mostrar por acuerdos de confidencialidad, pero están no solo en mi haber y mi experiencia, sino en producción hoy en día.',
    colorVar: 'var(--color-mercury)',
    orbitVar: 'var(--orbit-mercury)',
    size: '16px',
    song: 'Mr. Bad Guy - Freddie Mercury',
    youtubeId: 'v_Mb25ASCr8',
    experiences: [
      {
        id: 'globant',
        title: 'Globant - Full Stack Developer',
        description:
          '- Desarrollé una aplicación web a medida para franquicias, centrándome en el rendimiento y la escalabilidad.\n- Mejoré los procesos de CI/CD y las pruebas para garantizar la fiabilidad del proyecto.\n- Creé una herramienta de IA para responder a los clientes de forma natural.\n- Principales tecnologías: Python, React, Jest, TypeScript y Material UI.',
        startDate: 'Octubre 2025',
        endDate: 'Presente'
      },
      {
        id: 'freelance',
        title: 'Contractor / Freelance - Full Stack Developer',
        description:
          '- Lideré el desarrollo de aplicaciones web full stack, trabajando principalmente en proyectos desde cero y algunos legados.\n- Diseñé y consumí APIs REST, utilicé WebSockets y Service Workers para notificaciones en apps PWA.\n- Coordiné equipos, organicé reuniones de intercambio técnico, formé a perfiles junior y colaboré en la resolución de bloqueos.\n- Administré pipelines CI/CD, estructuré proyectos desde su inicio y tomé requerimientos directamente con partners.\n- Diseñé interfaces y prototipos en Figma y Adobe XD.',
        startDate: 'Agosto 2020',
        endDate: 'Presente'
      },
      {
        id: 'goama',
        title: 'Goama - Front End Developer',
        description:
          '- Me reuní regularmente con partners de Latinoamérica y Europa para relevar necesidades de negocio y adaptar la plataforma a cada mercado.\n- Implementé tests unitarios con Vitest, mejorando la estabilidad del código y su mantenimiento.\n- Optimicé el rendimiento de la interfaz mediante estrategias de renderizado eficientes.\n- Reduje en un 30% el tiempo de onboarding de nuevos clientes gracias a mejoras en los flujos y documentación personalizada.\n- Diseñé interfaces y definí la experiencia de usuario en la plataforma.\n- Desarrollé soluciones escalables ajustadas a los requerimientos técnicos y comerciales de cada región.\n- Principales tecnologías: React, Redux, TypeScript, CSS & Vite.',
        startDate: 'Junio 2023',
        endDate: 'Agosto 2025'
      },
      {
        id: 'openbusiness',
        title: 'OpenBusiness.AR - Front End Team Leader',
        description:
          '- Lideré un equipo de desarrollo para construir una plataforma de inversión completa, definiendo el roadmap técnico y formando a desarrolladores junior.\n- Aseguré la calidad del código mediante revisiones regulares y fomenté espacios de intercambio de conocimiento.\n- Entregamos el proyecto dos semanas antes de lo previsto, mejorando el engagement con una interfaz intuitiva y altamente responsiva.\n- Principales tecnologías: React, TanStack Query, TypeScript & CSS Modules.',
        startDate: 'Marzo 2023',
        endDate: 'Julio 2023'
      },
      {
        id: 'inventa',
        title: 'Inventa - Software Engineer',
        description:
          '- Desarrollé desde cero un sitio de e-commerce y su sistema de backoffice, con foco en rendimiento y escalabilidad.\n- Reduje los tiempos de carga en más de un 40% e implementé un sistema de diseño modular que facilitó el mantenimiento futuro.\n- Incorporé testing con Jest y Cypress, aumentando la confiabilidad y seguridad del proyecto.\n- Principales tecnologías: React, Next, JavaScript, TypeScript & Tailwind CSS.',
        startDate: 'Febrero 2022',
        endDate: 'Octubre 2022'
      },
      {
        id: 'nlc-consultores',
        title: 'NLC Consultores - Arquitectura',
        description:
          '- Diseño y dibujo de planos en AutoCAD.\n- Asistencia a locales para relevamiento de medidas.\n- Trámites de diverso tipo, presencial y online.',
        startDate: 'Enero 2012',
        endDate: 'Diciembre 2018'
      },
      {
        id: 'applaudo',
        title: 'Applaudo Studios - React Developer',
        description:
          '- Creación de numerosas aplicaciones web para diferentes fines.\n- Tecnologías principales: React, Next, Gatsby, JavaScript, TypeScript & Styled Components.',
        startDate: 'Septiembre 2021',
        endDate: 'Diciembre 2021'
      }
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    title: 'Skills & Herramientas',
    description:
      'A lo largo de los años fui acumulando herramientas de distintos ámbitos (diseño, programación, comunicación, producción audiovisual, redacción y liderazgo) que hoy conviven y se potencian en mi perfil profesional.',
    colorVar: 'var(--color-venus)',
    orbitVar: 'var(--orbit-venus)',
    size: '22px',
    song: 'The Final Countdown - Europe',
    youtubeId: '9jK-NcRmVcw',
    projects: [
      {
        id: 'autocad',
        title: 'AutoCAD',
        description:
          'Diseño asistido por computadora para proyectos arquitectónicos.',
        logo: '/logos/autocad.png',
        year: 2008
      },
      {
        id: 'redaccion-opinion',
        title: 'Redacción de textos de opinión',
        description:
          'Escritura de columnas y artículos de opinión para medios digitales e impresos.',
        year: 2012
      },
      {
        id: 'java',
        title: 'Java',
        description: 'Programación orientada a objetos.',
        logo: '/logos/java.png',
        year: 2018
      },
      {
        id: 'javascript',
        title: 'JavaScript',
        description: 'Desarrollo web dinámico e interactivo.',
        logo: '/logos/javascript.png',
        year: 2019
      },
      {
        id: 'react',
        title: 'React',
        description: 'Desarrollo de interfaces web modernas.',
        logo: '/logos/react.png',
        year: 2020
      },
      {
        id: 'audacity',
        title: 'Audacity',
        description: 'Edición y producción de audio.',
        logo: '/logos/audacity.png',
        year: 2021
      },
      {
        id: 'conceptualizacion',
        title: 'Conceptualización creativa',
        description:
          'Desarrollo de conceptos e ideas para campañas y proyectos.',
        year: 2022
      },
      {
        id: 'redaccion-periodistica',
        title: 'Redacción de textos periodísticos',
        description:
          'Redacción de noticias, crónicas y contenido editorial para distintos soportes.',
        year: 2022
      },
      {
        id: 'liderazgo',
        title: 'Liderazgo de equipos de trabajo',
        description:
          'Coordinación y gestión de equipos en proyectos multidisciplinarios.',
        year: 2022
      },
      {
        id: 'copywriting',
        title: 'Copywriting',
        description: 'Redacción publicitaria y creativa.',
        year: 2023
      },
      {
        id: 'locucion',
        title: 'Locución',
        description: 'Locución y narración para proyectos audiovisuales.',
        year: 2023
      },
      {
        id: 'espanol',
        title: 'Español',
        description: 'Nativo'
      },
      {
        id: 'ingles',
        title: 'Inglés',
        description: 'Nivel avanzado · Certificado EF SET C2 Proficient'
      },
      {
        id: 'portugues',
        title: 'Portugués',
        description: 'Nivel intermedio'
      },
      {
        id: 'frances',
        title: 'Francés',
        description: 'Nivel básico'
      }
    ]
  },
  {
    id: 'earth',
    name: 'Tierra',
    title: 'Formación',
    description:
      'Recorrido académico que construyó mi base creativa y estratégica.',
    colorVar: 'var(--color-earth)',
    orbitVar: 'var(--orbit-earth)',
    size: '24px',
    song: 'Piedra en el Agua - Karamelo Santo',
    youtubeId: 'AWGhln9_7_s',
    projects: [
      {
        id: 'uba-comunicacion',
        title: 'Universidad de Buenos Aires (UBA)',
        description:
          'Licenciatura en Ciencias de la Comunicación Social en la Facultad de Ciencias Sociales (FSoc) de la UBA. Formación en comunicación, publicidad y análisis del discurso. 2019 - En curso.',
        year: 2026
      },
      {
        id: 'maestro-mayor-obras',
        title: 'Maestro Mayor de Obras',
        description:
          'ET N°17 DE 13 Brigadier General Cornelio Saavedra. Formación técnica en construcción, diseño arquitectónico y planos. 2006 - 2012.',
        year: 2012
      },
      {
        id: 'refrigeracion',
        title: 'Técnico Superior en Sistemas de Refrigeración',
        description:
          'Centro de Educación No Formal Venezuela. Formación técnica en sistemas de refrigeración y climatización. 2018.',
        year: 2018
      }
    ]
  },
  {
    id: 'mars',
    name: 'Marte',
    title: 'Proyectos destacados',
    description:
      'Proyectos académicos y personales que fui haciendo a lo largo de la carrera y que reflejan distintas facetas de mi formación como comunicador.',
    colorVar: 'var(--color-mars)',
    orbitVar: 'var(--orbit-mars)',
    size: '28px',
    song: 'I Turned into a Martian - Misfits',
    youtubeId: '9vaA8WTzmSo',
    projects: [
      {
        id: 'contienda-podcast',
        title: 'Contienda Podcast',
        description:
          'Podcast de 3 episodios sobre la Primera, Segunda y la posibilidad de una Tercera Guerra Mundial. Proyecto grupal final para Taller de Expresión III (Cátedra: María Rosa Gómez). Idea original, locución, concepto y diseño general.',
        links: ['https://open.spotify.com/show/3GUR3yx5rygh92ARyanxdL'],
        year: 2023
      },
      {
        id: 'chapa-a-mano',
        title: 'Chapa a Mano',
        description:
          'Documental sobre un taller mecánico en Lanús. Proyecto grupal para Taller de Expresión II (Cátedra: De Carli). Idea y concepto general.',
        links: [
          'https://drive.google.com/file/d/1yO3hwvlY1V9jULNAJ1T86aRnzQqE0rId/view'
        ],
        year: 2022
      },
      {
        id: 'centro-cultural',
        title: 'Centro Cultural',
        description:
          'Diseño arquitectónico para un centro cultural. Trabajo para la materia Proyectos II. Desarrollo completo de planos y memoria descriptiva.',
        links: [
          'https://drive.google.com/file/d/1GiH5wCnrbsRLkM8CPv5UhR8-E2Ju-7Ee/view'
        ],
        year: 2016
      },
      {
        id: 'youtube-clone',
        title: 'YouTube Clone',
        description:
          'Clon de YouTube con ReactJS y Material UI. Buscá videos, explorá canales y reproducí contenido usando la API de YouTube. Tema oscuro y responsive.',
        links: [
          'https://clone-6c8d2.web.app/',
          'https://github.com/MartinDCalderonP/YouTube-Clone'
        ],
        year: 2021
      }
    ]
  },
  {
    id: 'jupiter',
    name: 'Júpiter',
    title: 'Sobre mí',
    description:
      'Vengo llegando de Marte, donde dejé mis proyectos. Acá va un poco más sobre quién soy.',
    colorVar: 'var(--color-jupiter)',
    orbitVar: 'var(--orbit-jupiter)',
    size: '36px',
    song: 'Fly Me to the Moon - Frank Sinatra',
    youtubeId: 'JYuyWrkwpok',
    projects: [
      {
        id: 'exp-1',
        title: 'Agencia Creativa X',
        description:
          'Asistente de creatividad. Colaboración en campañas para clientes de consumo masivo.',
        year: 2024
      }
    ]
  },
  {
    id: 'saturn',
    name: 'Saturno',
    title: 'Reflexión final',
    description:
      'Mi paso por Creatividad Publicitaria: lo que aprendí, los desafíos y lo que me llevo.',
    colorVar: 'var(--color-saturn)',
    orbitVar: 'var(--orbit-saturn)',
    size: '30px',
    song: 'El anillo del Capitán Beto - Invisible',
    youtubeId: '38jG_1bELEs'
  },
  {
    id: 'uranus',
    name: 'Urano',
    title: 'Contacto',
    description:
      'Si querés colaborar, contratarme o simplemente charlar de ideas.',
    colorVar: 'var(--color-uranus)',
    orbitVar: 'var(--orbit-uranus)',
    size: '20px',
    song: 'Moonage Daydream - David Bowie',
    youtubeId: '6pXoQ6iYO1w',
    projects: [
      {
        id: 'contacto-linkedin',
        title: 'LinkedIn',
        links: ['https://www.linkedin.com/in/martincalderon92']
      },
      {
        id: 'contacto-x',
        title: 'X / Twitter',
        links: ['https://x.com/martomartian']
      },
      {
        id: 'contacto-github',
        title: 'GitHub',
        links: ['https://github.com/MartinDCalderonP']
      },
      {
        id: 'contacto-email',
        title: 'Correo electrónico',
        links: ['mailto:martincalderon92@outlook.com']
      }
    ]
  },
  {
    id: 'neptune',
    name: 'Neptuno',
    title: 'Extras',
    description: 'Hobbies, intereses y todo lo que me inspira fuera del aula.',
    colorVar: 'var(--color-neptune)',
    orbitVar: 'var(--orbit-neptune)',
    size: '18px',
    song: 'Sal - Cerati',
    youtubeId: '50j63cIBcvs',
    projects: [
      {
        id: 'cert-ef-set',
        title: 'EF SET English Certificate',
        description:
          '74/100 (C2 Proficient). Certificación de nivel de inglés.',
        year: 2022
      },
      {
        id: 'cert-full-stack-python',
        title: 'Curso Full Stack Python',
        description:
          'Gobierno de la Ciudad de Buenos Aires. Aptitudes: Python, lenguajes de programación.',
        year: 2020
      },
      {
        id: 'cert-scrum',
        title: 'Scrum Foundations Professional Certificate (SFPC)',
        description: 'CertiProf. Metodologías ágiles y gestión de proyectos.',
        year: 2020
      },
      {
        id: 'cert-react',
        title: 'Curso de React',
        description: 'Comunidad IT. Desarrollo de interfaces web con React.',
        year: 2020
      },
      {
        id: 'cert-british-council',
        title: 'LearnEnglish Select Blended Intermediate',
        description: 'British Council. Curso de inglés nivel intermedio.',
        year: 2020
      },
      {
        id: 'cert-git',
        title: 'Introducción a Git',
        description: 'KODOTI. Control de versiones y trabajo colaborativo.',
        year: 2020
      },
      {
        id: 'cert-desarrollo-web',
        title: 'Curso de Desarrollo Web',
        description:
          'Gobierno de la Ciudad de Buenos Aires. Aptitudes: lenguajes de programación.',
        year: 2019
      },
      {
        id: 'cert-codo-a-codo',
        title: 'Codo a Codo',
        description:
          'Gobierno de la Ciudad de Buenos Aires. Aptitudes: Java, lenguajes de programación.',
        year: 2018
      },
      {
        id: 'cert-impresion-3d',
        title: 'Curso de Impresión 3D',
        description:
          'Gobierno de la Ciudad de Buenos Aires. Fabricación digital y modelado 3D.',
        year: 2018
      }
    ]
  }
]
