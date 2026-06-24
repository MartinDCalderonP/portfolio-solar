import type { Experience, PlanetContent } from '../../types'

const experiences: Experience[] = [
  {
    description:
      '- Desarrollé una aplicación web a medida para franquicias, centrándome en el rendimiento y la escalabilidad.\n- Mejoré los procesos de CI/CD y las pruebas para garantizar la fiabilidad del proyecto.\n- Creé una herramienta de IA para responder a los clientes de forma natural.\n- Principales tecnologías: Python, React, Jest, TypeScript y Material UI.',
    endDate: 'Presente',
    id: 'globant',
    startDate: 'Octubre 2025',
    title: 'Globant - Full Stack Developer',
  },
  {
    description:
      '- Lideré el desarrollo de aplicaciones web full stack, trabajando principalmente en proyectos desde cero y algunos legados.\n- Diseñé y consumí APIs REST, utilicé WebSockets y Service Workers para notificaciones en apps PWA.\n- Coordiné equipos, organicé reuniones de intercambio técnico, formé a perfiles junior y colaboré en la resolución de bloqueos.\n- Administré pipelines CI/CD, estructuré proyectos desde su inicio y tomé requerimientos directamente con partners.\n- Diseñé interfaces y prototipos en Figma y Adobe XD.',
    endDate: 'Presente',
    id: 'freelance',
    startDate: 'Agosto 2020',
    title: 'Contractor / Freelance - Full Stack Developer',
  },
  {
    description:
      '- Me reuní regularmente con partners de Latinoamérica y Europa para relevar necesidades de negocio y adaptar la plataforma a cada mercado.\n- Implementé tests unitarios con Vitest, mejorando la estabilidad del código y su mantenimiento.\n- Optimicé el rendimiento de la interfaz mediante estrategias de renderizado eficientes.\n- Reduje en un 30% el tiempo de onboarding de nuevos clientes gracias a mejoras en los flujos y documentación personalizada.\n- Diseñé interfaces y definí la experiencia de usuario en la plataforma.\n- Desarrollé soluciones escalables ajustadas a los requerimientos técnicos y comerciales de cada región.\n- Principales tecnologías: React, Redux, TypeScript, CSS & Vite.',
    endDate: 'Agosto 2025',
    id: 'goama',
    startDate: 'Junio 2023',
    title: 'Goama - Front End Developer',
  },
  {
    description:
      '- Lideré un equipo de desarrollo para construir una plataforma de inversión completa, definiendo el roadmap técnico y formando a desarrolladores junior.\n- Aseguré la calidad del código mediante revisiones regulares y fomenté espacios de intercambio de conocimiento.\n- Entregamos el proyecto dos semanas antes de lo previsto, mejorando el engagement con una interfaz intuitiva y altamente responsiva.\n- Principales tecnologías: React, TanStack Query, TypeScript & CSS Modules.',
    endDate: 'Julio 2023',
    id: 'openbusiness',
    startDate: 'Marzo 2023',
    title: 'OpenBusiness.AR - Front End Team Leader',
  },
  {
    description:
      '- Desarrollé desde cero un sitio de e-commerce y su sistema de backoffice, con foco en rendimiento y escalabilidad.\n- Reduje los tiempos de carga en más de un 40% e implementé un sistema de diseño modular que facilitó el mantenimiento futuro.\n- Incorporé testing con Jest y Cypress, aumentando la confiabilidad y seguridad del proyecto.\n- Principales tecnologías: React, Next, JavaScript, TypeScript & Tailwind CSS.',
    endDate: 'Octubre 2022',
    id: 'inventa',
    startDate: 'Febrero 2022',
    title: 'Inventa - Software Engineer',
  },
  {
    description:
      '- Diseño y dibujo de planos en AutoCAD.\n- Asistencia a locales para relevamiento de medidas.\n- Trámites de diverso tipo, presencial y online.',
    endDate: 'Diciembre 2018',
    id: 'nlc-consultores',
    startDate: 'Enero 2012',
    title: 'NLC Consultores - Arquitectura',
  },
  {
    description:
      '- Creación de numerosas aplicaciones web para diferentes fines.\n- Tecnologías principales: React, Next, Gatsby, JavaScript, TypeScript & Styled Components.',
    endDate: 'Diciembre 2021',
    id: 'applaudo',
    startDate: 'Septiembre 2021',
    title: 'Applaudo Studios - React Developer',
  },
]

export const planet: PlanetContent = {
  colorVar: 'var(--color-venus)',
  description:
    'A lo largo de los años fui sumando experiencia en el mundo del desarrollo web, trabajando con clientes de todo el mundo y en equipos de distinto tamaño. Algunas cosas no las puedo mostrar por acuerdos de confidencialidad, pero están no solo en mi haber y mi experiencia, sino en producción hoy en día. 💼',
  experiences,
  id: 'venus',
  name: 'Venus',
  orbitVar: 'var(--orbit-venus)',
  size: '22px',
  song: 'The Final Countdown - Europe',
  title: 'Experiencia profesional',
  youtubeId: '9jK-NcRmVcw',
}
