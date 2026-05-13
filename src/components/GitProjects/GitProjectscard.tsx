import { useRef, useState, type MouseEvent } from "react";
import type { Repo } from "../../types";
import "./GitProjectscard.css";

interface ProjectCardProps {
  repo: Repo;
  image?: string;
}

export default function ProjectCard({ repo, image }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltX(x * 8);
    setTiltY(-y * 8);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--tilt-x": `${tiltX}deg`, "--tilt-y": `${tiltY}deg` } as React.CSSProperties}
    >
      {image ? (
        <div className="project-card__image-wrap">
          <img
            src={image}
            alt={repo.name}
            loading="lazy"
            className="project-card__image"
          />
          <div className="project-card__image-overlay" />
        </div>
      ) : (
        <div className="project-card__dot-grid" />
      )}

      <div className="project-card__body">
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
            {repo.topics.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-card__links">
          <a
            href={repo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
            aria-label={`${repo.name} GitHub repository`}
          >
            GitHub
          </a>
          {repo.liveDemo && (
            <a
              href={repo.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="project-card__link project-card__link--demo"
              aria-label={`${repo.name} live demo`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
