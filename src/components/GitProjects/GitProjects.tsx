import { useGitHubRepos } from "../../hook/useGitRepos";
import ProjectCard from "./GitProjectscard";
import "./GitProjects.css";

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos();

  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <span className="section-label">What I built</span>
        <h2>Projects</h2>
      </div>

      {loading && <p className="projects__state">Fetching repos...</p>}
      {error && <p className="projects__state projects__state--error">Couldn't load projects.</p>}

      <div className="projects__grid">
        {repos.map(repo => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}