import { useGitHubRepos } from "../../hook/useGitRepos";
import ProjectCard from "./GitProjectscard";
import ScrollReveal from "../ui/ScrollReveal";
import data from "../../data/portfolioData";
import "./GitProjects.css";

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton skeleton--title" />
    <div className="skeleton skeleton--text" />
    <div className="skeleton skeleton--text skeleton--short" />
    <div className="skeleton skeleton--btn" />
  </div>
);

const githubUsername =
  data.contact.links
    .find((l) => l.name === "GitHub")
    ?.url.replace("https://github.com/", "")
    .replace(/\/$/, "") ?? "";

export default function Projects() {
  const { repos, loading, error, retry } = useGitHubRepos();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">// projects</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2>Projects</h2>
        </ScrollReveal>

        {loading && (
          <div className="projects__grid">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {error && (
          <div className="projects__error">
            <p>Couldn&apos;t load projects.</p>
            <button onClick={retry} className="projects__retry">
              Try again
            </button>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="projects__grid">
            {repos.map((repo) => {
              const featured = data.featuredRepos.find(
                (f) => f.name === repo.name
              );
              const image =
                featured?.image ??
                `https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}`;
              return (
                <ProjectCard key={repo.id} repo={repo} image={image} />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
