import "./GitProjectscard.css";

interface Repo {
  name: string;
  description: string | null;
  topics: string[];
  githubUrl: string;
  liveDemo: string | null;
  language: string | null;
}

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <div className="project-card">
      <div className="project-card__top">
        <h3 className="project-card__name">{repo.name}</h3>
        {repo.language && (
          <span className="project-card__lang">{repo.language}</span>
        )}
      </div>

      <p className="project-card__desc">
        {repo.description || "No description provided."}
      </p>

      {repo.topics?.length > 0 && (
        <div className="project-card__tags">
          {repo.topics.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="project-card__links">
        <a href={repo.githubUrl} target="_blank" rel="noreferrer" className="project-card__link">
          GitHub
        </a>
        {repo.liveDemo && (
          <a href={repo.liveDemo} target="_blank" rel="noreferrer" className="project-card__link project-card__link--demo">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}