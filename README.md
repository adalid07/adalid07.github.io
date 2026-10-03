# Portafolio de Adalid Claure G.

Web estática y bilingüe (ES/EN) hecha con Astro. Todo el contenido sale de un solo archivo.

## Cómo actualizar

- **Experiencia, estudios, habilidades, enlaces:** edita `src/data/profile.json` (cada texto tiene versión `es` y `en`).
- **Proyectos desde GitHub:** ponle el tema (topic) `portfolio` a un repositorio y aparecerá solo. Se actualiza en cada publicación y cada lunes.
- **Color de acento:** campo `accent` de `profile.json`.

## Probar en local

```bash
npm install
npm run dev
```

Se abre en http://localhost:4321 (redirige a `/es/` o `/en/`).

## Publicar en GitHub Pages

1. Crea un repositorio llamado `adalid07.github.io` y sube este proyecto a la rama `main`.
2. En Settings → Pages, en "Source" elige **GitHub Actions**.
3. Cada `git push` a `main` vuelve a publicar la web.
