export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
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
      'Bienvenido a mi portfolio solar. Soy Martín, nombre que viene de Martinus, dios romano de la guerra. Este sitio recorre mi viaje por Creatividad Publicitaria, planeta por planeta.',
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
      'Mi recorrido en el mundo de la comunicación y la publicidad.',
    colorVar: 'var(--color-mercury)',
    orbitVar: 'var(--orbit-mercury)',
    size: '16px',
    song: 'Mr. Bad Guy — Freddie Mercury',
    youtubeId: 'v_Mb25ASCr8',
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
        tags: ['Universidad', 'Comunicación'],
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
        tags: ['Campaña', 'Copy', 'Dirección de arte'],
      },
      {
        id: 'proyecto-2',
        title: 'Rediseño de Marca',
        description: 'Rebranding para un emprendimiento local. Identidad visual completa.',
        tags: ['Branding', 'Identidad visual'],
      },
      {
        id: 'proyecto-3',
        title: 'Spot Audiovisual',
        description: 'Producción y edición de un spot para redes sociales. Desde el guión hasta la post.',
        tags: ['Audiovisual', 'Edición'],
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
        tags: ['Agencia', 'Creatividad'],
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
        tags: ['Aprendizaje', 'Creatividad', 'Proceso'],
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
