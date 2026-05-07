import { useState, useEffect } from "react";
import data from "../data/portfolioData";

const { featuredRepos } = data;
const GITHUB_USERNAME = "abdrahman-dev";
const CACHE_KEY = "github_repos_cache";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

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

interface CacheEntry {
  data: Repo[];
  timestamp: number;
}

interface GitHubRepoResponse {
  id: number;
  name: string;
  description: string | null;
  topics: string[];
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

function getCache(): Repo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.timestamp > CACHE_TTL) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function setCache(repos: Repo[]): void {
  try {
    const entry: CacheEntry = { data: repos, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // localStorage unavailable — fail silently
  }
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      // serve from cache if fresh
      const cached = getCache();
      if (cached) {
        setRepos(cached);
        setLoading(false);
        return;
      }

      try {
        const names = featuredRepos.map((r: { name: string }) => r.name);

        const results = await Promise.allSettled(
          names.map((name: string) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`)
              .then(res => {
                if (!res.ok) throw new Error(`Repo not found: ${name}`);
                return res.json() as Promise<GitHubRepoResponse>;
              })
          )
        );

        const merged: Repo[] = results
          .filter(
            (r): r is PromiseFulfilledResult<GitHubRepoResponse> =>
              r.status === "fulfilled"
          )
          .map(r => {
            const repo = r.value;
            const extra = featuredRepos.find(
              (f: { name: string }) => f.name === repo.name
            );
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

        setCache(merged);
        setRepos(merged);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to load repos");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}