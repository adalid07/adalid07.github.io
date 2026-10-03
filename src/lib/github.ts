import profile from '../data/profile.json';

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
}

interface ApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  topics?: string[];
}

/**
 * Lee tus repositorios públicos de GitHub durante la compilación y devuelve
 * los que tengan el tema (topic) indicado en profile.json. Si falla, devuelve [].
 */
export async function getGithubProjects(): Promise<Repo[]> {
  const { user, topic, max } = profile.githubProjects;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'portafolio-build',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`,
      { headers },
    );
    if (!res.ok) {
      console.warn(`[github] ${res.status} al leer los repositorios de ${user}`);
      return [];
    }
    const repos = (await res.json()) as ApiRepo[];
    return repos
      .filter((r) => !r.fork && !r.archived && r.topics?.includes(topic))
      .slice(0, max)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
      }));
  } catch (error) {
    console.warn('[github] no se pudieron leer los repositorios', error);
    return [];
  }
}
