import { projects } from "../config";

// Live star counts at build time. Falls back to the numbers in config when
// GitHub rate-limits the build machine.
export async function getProjects() {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  const token = import.meta.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const withStars = await Promise.all(
    projects.map(async (project) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${project.repo}`, { headers });
        if (!res.ok) return project;
        const { stargazers_count } = await res.json();
        return { ...project, stars: stargazers_count };
      } catch {
        return project;
      }
    }),
  );

  return withStars.sort((a, b) => b.stars - a.stars);
}
