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
  image?: string
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
      'Mi nombre es Martín Calderón y hoy los guiaré por algunos pedazos de mi vida. Acá van a encontrar los proyectos destacados de diversos ámbitos en los que trabajé. Como estoy convencido de que la mezcla de experiencias y formación abre las puertas a nuevas formas de pensar, en mi vida fui estudiando y atravesando distintas áreas, mientras a la vez voy sumando mis intereses a las cosas que hago. Podrán observar fácilmente que actualmente trabajo en desarrollo web, me encanta la música desde que soy muy chico y me gustan cosas como la astronomía y lo relacionado a lo científico. De chico miraba El Show Creativo de Juan Gujis y creo que algo de eso se refleja acá y en lo que hago. 🌌\n\nEste portfolio está armado como un sistema solar: cada planeta es una sección de mi historia. Cuanto más lejos del Sol, más personal o lateral es el tema, pero todos orbitan alrededor de lo mismo. Hacele click a cualquier planeta para explorarlo, y al Sol para volver siempre al inicio. Asimismo, y para mayor accesibilidad, funciona con Tab, Enter y las flechas del teclado para navegar. No todo lo que se mueve acá es un planeta, ojo con lo que cruza por ahí. 🛰️',
    colorVar: 'var(--color-sun)',
    orbitVar: 'var(--orbit-sun)',
    size: '80px',
    song: 'Here Comes the Sun - The Beatles',
    youtubeId: 'KQetemT1sWc'
  },
  {
    id: 'mercury',
    name: 'Mercurio',
    title: 'Proyectos destacados',
    description:
      'Proyectos académicos y personales que fui haciendo a lo largo de la carrera y que reflejan distintas facetas de mi formación como comunicador. 🏗️',
    colorVar: 'var(--color-mercury)',
    orbitVar: 'var(--orbit-mercury)',
    size: '16px',
    song: 'Mr. Bad Guy - Freddie Mercury',
    youtubeId: 'v_Mb25ASCr8',
    projects: [
      {
        id: 'portfolio-solar',
        title: 'Portfolio Solar',
        description:
          'Este mismo portfolio. Un sistema solar interactivo donde cada planeta representa una sección de mi perfil. Construido con Astro (no podía ser de otra manera) y TypeScript.',
        links: [
          'https://portfolio-solar-martin-calderon.vercel.app/',
          'https://github.com/MartinDCalderonP/portfolio-solar',
          'https://drive.google.com/drive/folders/1TJN2SbOd6EYoKjGW79huL6gHWerjeCJP?usp=sharing',
          'https://youtube.com/playlist?list=PLSBJK81hjmUpnCol9Szs9-68VyIX1UocL&si=DtaZG_fKwn23hOQ5'
        ],
        year: 2026
      },
      {
        id: 'news-portfolio',
        title: 'News Portfolio',
        description:
          'Web que diseñé con notas periodísticas que redacté para la Agencia de Noticias de la Carrera de Comunicación (ANCCom) de la UBA. Construida con Astro.',
        links: ['https://news-martin-calderon.vercel.app/'],
        year: 2025
      },
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
    id: 'venus',
    name: 'Venus',
    title: 'Experiencia profesional',
    description:
      'A lo largo de los años fui sumando experiencia en el mundo del desarrollo web, trabajando con clientes de todo el mundo y en equipos de distinto tamaño. Algunas cosas no las puedo mostrar por acuerdos de confidencialidad, pero están no solo en mi haber y mi experiencia, sino en producción hoy en día. 💼',
    colorVar: 'var(--color-venus)',
    orbitVar: 'var(--orbit-venus)',
    size: '22px',
    song: 'The Final Countdown - Europe',
    youtubeId: '9jK-NcRmVcw',
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
    id: 'earth',
    name: 'Tierra',
    title: 'Formación',
    description:
      'Recorrido académico que construyó mi base creativa y estratégica. 🎓',
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
    title: 'Skills & Herramientas',
    description:
      'El nombre Martín proviene del latín Martinus, derivado de Marte (el dios romano de la guerra, sincretizado con el Ares griego). Su significado es "consagrado a Marte" o "belicoso". Estas son mis armas, entre otras. ⚒️',
    colorVar: 'var(--color-mars)',
    orbitVar: 'var(--orbit-mars)',
    size: '28px',
    song: 'I Turned into a Martian - Misfits',
    youtubeId: '9vaA8WTzmSo',
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
      },
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
  },
  {
    id: 'jupiter',
    name: 'Júpiter',
    title: 'Reflexión final',
    description:
      'Aunque la cursada fue algo caótica por los factores exógenos, se hizo llevadera por las diversas modalidades que fue tomando, como salir del aula en reiteradas ocasiones, la forma de presentación de los conceptos y del trabajo en clase. 🌪️\n\nEn general, creo que fuimos aplicando los conceptos correctamente mejorando en cada iteración. Quizá faltó algo más de teoría o coordinación con otras materias similares o quizá alguna recomendación de cursada o algo de ese estilo. Habiendo sido mi primera materia de publicidad, estuve un poco descolgado en algunos momentos, pero los profesores nos dieron bastante contenido como para poder llevar la materia 💡',
    colorVar: 'var(--color-jupiter)',
    orbitVar: 'var(--orbit-jupiter)',
    size: '36px',
    song: 'Fly Me to the Moon - Frank Sinatra',
    youtubeId: 'JYuyWrkwpok'
  },
  {
    id: 'saturn',
    name: 'Saturno',
    title: 'Sobre mí',
    description:
      'Así como vos estás explorando este proyecto (y como habrás visto), a mí me encanta vivir explorando diversas cosas. Siempre trato de apuntar a la excelencia en lo que hago, tanto para proyectos personales como para laborales (es más, probablemente siga mejorando esto!). 🎯\n\nHay otras cosas que forman parte de mi formación pero no son tan claramente visibles, como en esta web donde (aunque no lo mencione) salen a relucir las cosas que me llaman la atención y que el buen observador sabrá encontrar. La curiosidad ha sido una guía importante, espero que ustedes también se dejen llevar por ella. Mi padre solía hacer muchos juegos de palabras, lo que me incentivó a romper los patrones de las cosas. Como dice la frase usualmente atribuida a Schopenhauer: "el humor consiste en poner algo donde no va". ✨\n\nSuelen preguntarme en entrevistas laborales qué tiene que ver Comunicación, Refrigeración o la Construcción con la Programación, así como en la Facultad me pasa al revés. Toda experiencia ha nutrido esto que soy. Están ahí formas de pensar, analizar, proyectar y comunicar cosas. Lo obvio es que a veces a los clientes hay que explicarles cosas técnicas, pero hay mucho más... ¿O acaso esta interfaz no me facilita que te provea de toda esta cantidad de información? 🤔\n\nEntiendo que este universo es inabarcable y trataré siempre de seguir maravillándome con él. 🔭',
    colorVar: 'var(--color-saturn)',
    orbitVar: 'var(--orbit-saturn)',
    size: '30px',
    song: 'El anillo del Capitán Beto - Invisible',
    youtubeId: '38jG_1bELEs'
  },
  {
    id: 'uranus',
    name: 'Urano',
    title: 'Extras',
    description:
      'Me encanta la música desde que tengo la memoria, canto y toco la guitarra. Los recitales son mis actividades favoritas. Como verán en la foto, me gustan mucho Los Besos (la banda!). Y, debido a que es de hace algunos años, no denota mi disfrute en hacer crecer y mantener el pelo largo. La imagen sí anticipa mi entusiasmo por El Señor de los Anillos: veo la trilogía completa al menos una vez al año, preferentemente en cines cuando la reestrenan. La vi por primera vez en su estreno original, hace 25 años, junto a mi (ya mencionado) padre. 🎸\n\nAunque paso gran parte del día frente a pantallas, valoro mucho salir a caminar por plazas, parques y reservas. La Reserva Ecológica Costanera Sur es uno de mis lugares favoritos de la Ciudad. También disfruto de las playas de la costa bonaerense y de viajar por el país para conocer nuevos lugares. Me interesa seguir formándome, probablemente en Exactas o en Económicas, o en lo que me llame la atención en su momento. ¿No tiene nada que ver con lo que ya hice? Ya veremos. 🤷🏾‍♂️',
    image: '/logos/neptune-photo.jpg',
    colorVar: 'var(--color-uranus)',
    orbitVar: 'var(--orbit-uranus)',
    size: '20px',
    song: 'Moonage Daydream - David Bowie',
    youtubeId: '6pXoQ6iYO1w'
  },
  {
    id: 'neptune',
    name: 'Neptuno',
    title: 'Contacto',
    description:
      'Acá es donde el sistema solar se encuentra con el mundo real. Si algo de lo que viste te generó curiosidad, ganas de colaborar o simplemente querés charlar de sobre algunas ideas, estas son las vías. No importa si es un proyecto, un trabajo o una pregunta random, trataré de contestarte a la brevedad. 📡',
    colorVar: 'var(--color-neptune)',
    orbitVar: 'var(--orbit-neptune)',
    size: '18px',
    song: 'Sal - Cerati',
    youtubeId: '50j63cIBcvs',
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
  }
]
