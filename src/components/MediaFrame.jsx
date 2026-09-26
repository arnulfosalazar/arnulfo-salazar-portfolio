import React from 'react';

export default function MediaFrame({ project, index }) {
  const mediaUrl = project.mediaUrl?.trim();
  const mediaType = project.mediaType || 'image';

  return (
    <div className="media-frame">
      <div className="media-chrome">
        <span />
        <span />
        <span />
      </div>

      <div className="media-stage">
        {mediaUrl ? (
          mediaType === 'video' ? (
            <video
              className="project-media"
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${project.title} demonstration`}
            />
          ) : (
            <img
              className="project-media"
              src={mediaUrl}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
            />
          )
        ) : (
          <div className="media-empty">
            <span className="media-empty-number">
              0{index + 1}
            </span>

            <span className="media-empty-label">
              Project preview
            </span>
          </div>
        )}
      </div>
    </div>
  );
}