import React from 'react';
import { ArrowUpRight, SocialIcon } from './Icons.jsx';
import MediaFrame from './MediaFrame.jsx';

export default function ProjectSection({ project, index }) {
  return (
    <article
      className="project-row"
      id={project.id || `project-${index + 1}`}
      aria-labelledby={`project-${index + 1}-title`}
      data-project
    >
      <div className="project-copy" data-reveal>
        <span className="project-number" aria-hidden="true">
          0{index + 1}
          <span>/ 03</span>
        </span>

        <h3 id={`project-${index + 1}-title`}>
          {project.title}
        </h3>

        <p className="project-category">
          {project.category}
        </p>

        <p className="project-description">
          {project.description}
        </p>

        <ul className="technology-list" aria-label="Technologies">
          {project.technologies.map((tech, i) => (
            <li key={`${tech}-${i}`}>
              {tech.trim()}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="project-live"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              View project
              <ArrowUpRight />
            </a>
          )}

          {project.sourceUrl && (
            <a
              className="project-source"
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon name="github" />
              Source code
            </a>
          )}
        </div>
      </div>

      <div className="project-preview" data-reveal>
        <MediaFrame
          project={project}
          index={index}
        />
      </div>
    </article>
  );
}