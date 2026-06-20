export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PlanetContent {
  id: string;
  name: string;
  title: string;
  description: string;
  colorVar: string;
  orbitVar: string;
  size: string;
  projects: Project[];
}

export const planets: PlanetContent[] = [
  {
    id: 'sol',
    name: 'Sol',
    title: 'Martín Calderón',
    description:
      'Centro creativo del sistema. Estudiante de Comunicación apasionado por la publicidad, el diseño y contar historias que conectan.',
    colorVar: 'var(--color-sol)',
    orbitVar: 'var(--orbit-sol)',
    size: '80px',
    projects: [],
  },
  {
    id: 'mercurio',
    name: 'Mercurio',
    title: 'Skills & Herramientas',
    description:
      'Las herramientas que uso para dar vida a las ideas. Siempre aprendiendo y sumando nuevas.',
    colorVar: 'var(--color-mercurio)',
    orbitVar: 'var(--orbit-mercurio)',
    size: '16px',
    projects: [],
  },
  {
    id: 'venus',
    name: 'Venus',
    title: 'Sobre mí',
    description:
      'Creativo en formación, curioso por naturaleza. Me gusta encontrar el concepto detrás de cada idea y llevarlo a cabo con atención al detalle.',
    colorVar: 'var(--color-venus)',
    orbitVar: 'var(--orbit-venus)',
    size: '22px',
    projects: [],
  },
  {
    id: 'tierra',
    name: 'Tierra',
    title: 'Formación',
    description:
      'Recorrido académico que construyó mi base creativa y estratégica.',
    colorVar: 'var(--color-tierra)',
    orbitVar: 'var(--orbit-tierra)',
    size: '24px',
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
    id: 'marte',
    name: 'Marte',
    title: 'Proyectos destacados',
    description:
      'Mis trabajos más relevantes. Piezas publicitarias, campañas y proyectos creativos.',
    colorVar: 'var(--color-marte)',
    orbitVar: 'var(--orbit-marte)',
    size: '28px',
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
    title: 'Experiencia',
    description:
      'Experiencia laboral y colaboraciones en el mundo de la comunicación y la publicidad.',
    colorVar: 'var(--color-jupiter)',
    orbitVar: 'var(--orbit-jupiter)',
    size: '36px',
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
    id: 'saturno',
    name: 'Saturno',
    title: 'Contacto',
    description:
      'Conectemos. Si querés colaborar, contratarme o simplemente charlar de ideas.',
    colorVar: 'var(--color-saturno)',
    orbitVar: 'var(--orbit-saturno)',
    size: '30px',
    projects: [],
  },
  {
    id: 'urano',
    name: 'Urano',
    title: 'Reflexión final',
    description:
      'Mi paso por Creatividad Publicitaria: lo que aprendí, los desafíos y lo que me llevo.',
    colorVar: 'var(--color-urano)',
    orbitVar: 'var(--orbit-urano)',
    size: '20px',
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
    id: 'neptuno',
    name: 'Neptuno',
    title: 'Extras',
    description:
      'Hobbies, intereses y todo lo que me inspira fuera del aula.',
    colorVar: 'var(--color-neptuno)',
    orbitVar: 'var(--orbit-neptuno)',
    size: '18px',
    projects: [],
  },
];
