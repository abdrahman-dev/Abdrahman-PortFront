export type Theme = "dark" | "light";

export interface TerminalLine {
  type: "cmd" | "info" | "success" | "cursor";
  text?: string;
}

export interface HeroData {
  name: string;
  title: string;
  bio: string;
  cvPath: string;
  terminal: TerminalLine[];
}

export interface AboutData {
  intro: string;
  focus: string;
  extra: string;
  mindset: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface CodewarsData {
  username: string;
  badgeUrl: string;
  profileUrl: string;
  description: string;
}

export interface Service {
  name: string;
  description: string;
  img?: string;
}

export interface ContactLink {
  name: string;
  url: string;
  img?: string;
  description?: string;
}

export interface FeaturedRepo {
  name: string;
  liveDemo: string | null;
  image?: string;
  liveUrl?: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: Record<string, SkillItem[]>;
  codewars: CodewarsData;
  services: Service[];
  contact: { links: ContactLink[] };
  featuredRepos: FeaturedRepo[];
}

export interface GitHubRepoResponse {
  id: number;
  name: string;
  description: string | null;
  topics: string[];
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  topics: string[];
  githubUrl: string;
  liveDemo: string | null;
  language: string | null;
  stars: number;
}
