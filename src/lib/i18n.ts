export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    navLabel: 'Principal',
    langLabel: 'Idioma',
    navAbout: 'Sobre mí',
    navExperience: 'Trayectoria',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    viewProjects: 'Ver proyectos',
    getInTouch: 'Contactar',
    cardTitle: 'perfil.json',
    cardLocation: 'Ubicación',
    cardEducation: 'Formación',
    cardLanguages: 'Idiomas',
    aboutTitle: 'Sobre mí',
    experienceTitle: 'Trayectoria',
    educationTitle: 'Formación',
    certificationsTitle: 'Certificaciones',
    projectsTitle: 'Proyectos',
    present: 'Actualidad',
    contactTitle: 'Hablemos',
    contactText: 'Escríbeme si quieres hablar de seguridad de software, DevSecOps o colaborar en algo.',
    footer: 'Hecho con Astro',
  },
  en: {
    skip: 'Skip to content',
    navLabel: 'Main',
    langLabel: 'Language',
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    cardTitle: 'profile.json',
    cardLocation: 'Location',
    cardEducation: 'Education',
    cardLanguages: 'Languages',
    aboutTitle: 'About me',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',
    projectsTitle: 'Projects',
    present: 'Present',
    contactTitle: 'Let us talk',
    contactText: 'Write to me if you want to talk about software security, DevSecOps or working together.',
    footer: 'Built with Astro',
  },
} as const;

const localeTag: Record<Lang, string> = { es: 'es-ES', en: 'en-GB' };

/** "2026-07" -> "jul 2026" / "Jul 2026" */
export function formatMonth(ym: string, lang: Lang): string {
  return new Intl.DateTimeFormat(localeTag[lang], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${ym}-01T00:00:00Z`));
}

export function formatPeriod(start: string, end: string | null, lang: Lang): string {
  const to = end ? formatMonth(end, lang) : ui[lang].present;
  return `${formatMonth(start, lang)} — ${to}`;
}
