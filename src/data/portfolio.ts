export interface Project {
  description: string;
  id: string;
  link?: string;
  title: string;
  year: number;
}

export interface PlanetContent {
  colorVar: string;
  description: string;
  id: string;
  name: string;
  orbitVar: string;
  projects?: Project[];
  size: string;
  song: string;
  title: string;
  youtubeId: string;
}

export const planets: PlanetContent[] = [
  {
    id: 'sun',
    name: 'Sol',
    title: 'Bienvenido!',
    description:
      'Este es mi portfolio creativo. Mi nombre es Martín Calderón y hoy los guiaré por algunos pedazos de mi vida. Acá van a encontrar los proyectos destacados de diversos ámbitos en los que trabajé. Como estoy convencido de que la mezcla de experiencias y formación abre las puertas a nuevas formas de pensar, en mi vida fui estudiando y atravesando distintas áreas, mientras a la vez voy sumando mis intereses a las cosas que hago. Podrán observar fácilmente que actualmente trabajo en desarrollo web, me encanta la música desde que soy muy chico y me gustan cosas como la astronomía y lo relacionado a lo científico. 🌌\n\nHay otras cosas que forman parte de mi formación pero no son tan claramente visibles, como en esta web donde (aunque no lo mencione) salen a relucir las cosas que me llaman la atención y que el buen observador sabrá encontrar. La curiosidad ha sido una guía importante, espero que ustedes también se dejen llevar por ella. Mi padre solía hacer muchos juegos de palabras, lo que me incentivó a romper los patrones de las cosas. Como dice la frase usualmente atribuida a Schopenhauer: "el humor consiste en poner algo donde no va". ✨\n\nEste portfolio está armado como un sistema solar: cada planeta es una sección de mi historia. Cuanto más lejos del Sol, más personal o lateral es el tema, pero todos orbitan alrededor de lo mismo. Hacele click a cualquier planeta para explorarlo, y al Sol para volver siempre al inicio. No todo lo que se mueve acá es un planeta, ojo con lo que cruza por ahí. 🛰️',
    colorVar: 'var(--color-sun)',
    orbitVar: 'var(--orbit-sun)',
    size: '80px',
    song: 'Here Comes the Sun — The Beatles',
    youtubeId: 'KQetemT1sWc',
  },
  {
    id: 'mercury',
    name: 'Mercurio',
    title: 'Experiencia',
    description:
      'A lo largo de la cursada fui sumando trabajos que me formaron como comunicador. Desde proyectos grupales hasta producciones propias, cada uno me enseñó algo distinto.',
    colorVar: 'var(--color-mercury)',
    orbitVar: 'var(--orbit-mercury)',
    size: '16px',
    song: 'Mr. Bad Guy — Freddie Mercury',
    youtubeId: 'v_Mb25ASCr8',
    projects: [
      {
        id: 'contienda-podcast',
        title: 'Contienda Podcast',
        description: 'Podcast de 3 episodios sobre la Primera, Segunda y la posibilidad de una Tercera Guerra Mundial. Proyecto grupal final para Taller de Expresión III (Cátedra: María Rosa Gómez). Idea original, locución, concepto y diseño general.',
        link: 'https://open.spotify.com/show/3GUR3yx5rygh92ARyanxdL',
        year: 2022,
      },
    ],
  },
  {
    id: 'venus',
    name: 'Venus',
    title: 'Skills & Herramientas',
    description:
      'Las herramientas que uso para dar vida a las ideas.',
    colorVar: 'var(--color-venus)',
    orbitVar: 'var(--orbit-venus)',
    size: '22px',
    song: 'The Final Countdown — Europe',
    youtubeId: '9jK-NcRmVcw',
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
    song: 'Piedra en el Agua — Karamelo Santo',
    youtubeId: 'AWGhln9_7_s',
    projects: [
      {
        id: 'formacion-1',
        title: 'UBA - Ciencias de la Comunicación',
        description: 'Facultad de Ciencias Sociales. Formación en comunicación, publicidad y análisis del discurso.',
        year: 2025,
      },
    ],
  },
  {
    id: 'mars',
    name: 'Marte',
    title: 'Proyectos destacados',
    description:
      'Mis trabajos más relevantes. De Marte vengo —literalmente— y estas son mis piezas.',
    colorVar: 'var(--color-mars)',
    orbitVar: 'var(--orbit-mars)',
    size: '28px',
    song: 'I Turned into a Martian — Misfits',
    youtubeId: '9vaA8WTzmSo',
    projects: [
      {
        id: 'proyecto-1',
        title: 'Campaña Concientización',
        description: 'Pieza publicitaria para una ONG ambiental. Concepto, copy y dirección de arte.',
        year: 2025,
      },
      {
        id: 'proyecto-2',
        title: 'Rediseño de Marca',
        description: 'Rebranding para un emprendimiento local. Identidad visual completa.',
        year: 2024,
      },
      {
        id: 'proyecto-3',
        title: 'Spot Audiovisual',
        description: 'Producción y edición de un spot para redes sociales. Desde el guión hasta la post.',
        year: 2025,
      },
    ],
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
    song: 'Fly Me to the Moon — Frank Sinatra',
    youtubeId: 'JYuyWrkwpok',
    projects: [
      {
        id: 'exp-1',
        title: 'Agencia Creativa X',
        description: 'Asistente de creatividad. Colaboración en campañas para clientes de consumo masivo.',
        year: 2024,
      },
    ],
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
    song: 'El anillo del Capitán Beto — Invisible',
    youtubeId: '38jG_1bELEs',
  },
  {
    id: 'uranus',
    name: 'Urano',
    title: 'Contacto',
    description:
      'Conectemos. Si querés colaborar, contratarme o simplemente charlar de ideas.',
    colorVar: 'var(--color-uranus)',
    orbitVar: 'var(--orbit-uranus)',
    size: '20px',
    song: 'Moonage Daydream — David Bowie',
    youtubeId: '6pXoQ6iYO1w',
    projects: [
      {
        id: 'reflexion-1',
        title: 'Mi viaje en la materia',
        description:
          'A lo largo de la cursada descubrí que la creatividad no es solo inspiración, sino proceso. Aprendí a conceptualizar, a mirar desde otras perspectivas y a defender mis ideas con argumentos. El desafío más grande fue salir de mi zona de confort y animarme a proponer sin miedo al error. Me llevo herramientas para toda la carrera.',
        year: 2026,
      },
    ],
  },
  {
    id: 'neptune',
    name: 'Neptuno',
    title: 'Extras',
    description:
      'Hobbies, intereses y todo lo que me inspira fuera del aula.',
    colorVar: 'var(--color-neptune)',
    orbitVar: 'var(--orbit-neptune)',
    size: '18px',
    song: 'Sal — Cerati',
    youtubeId: '50j63cIBcvs',
  },
];
