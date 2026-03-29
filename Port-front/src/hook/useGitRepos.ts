import { useState, useEffect } from "react";
import data from "../data/portfolioData";
const { featuredRepos } = data;


const GITHUB_USERNAME = "abdrahman-dev";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  topics: string[];
  githubUrl: string;
  liveDemo: string | null;
  language: string | null;
  stars: number;
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const names = featuredRepos.map((r: { name: string }) => r.name);

        const results = await Promise.all(
          names.map((name: string) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`)
              .then(res => {
                if (!res.ok) throw new Error(`Repo not found: ${name}`);
                return res.json();
              })
          )
        );

        const merged: Repo[] = results.map((repo: any) => {
          const extra = featuredRepos.find((r: { name: string }) => r.name === repo.name);
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            topics: repo.topics ?? [],
            githubUrl: repo.html_url,
            liveDemo: extra?.liveDemo ?? null,
            language: repo.language,
            stars: repo.stargazers_count,
          };
        });

        setRepos(merged);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}