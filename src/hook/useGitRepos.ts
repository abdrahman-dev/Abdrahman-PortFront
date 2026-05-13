import { useState, useEffect } from "react";
import type { Repo, GitHubRepoResponse } from "../types";
import data from "../data/portfolioData";

const { featuredRepos } = data;
const GITHUB_USERNAME = "abdrahman-dev";
const CACHE_KEY = "github_repos_cache";
const CACHE_TTL = 60 * 60 * 1000;

interface CacheEntry {
  data: Repo[];
  timestamp: number;
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
    /* localStorage unavailable */
  }
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    async function fetchRepos() {
      const cached = getCache();
      if (cached) {
        setRepos(cached);
        setLoading(false);
        return;
      }

      try {
        const names = featuredRepos.map((r) => r.name);

        const results = await Promise.allSettled(
          names.map((name) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`)
              .then((res) => {
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
          .map((r) => {
            const repo = r.value;
            const extra = featuredRepos.find((f) => f.name === repo.name);
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
  }, [retryCount]);

  const retry = () => {
    setError(null);
    setLoading(true);
    setRetryCount((c) => c + 1);
  };

  return { repos, loading, error, retry };
}
