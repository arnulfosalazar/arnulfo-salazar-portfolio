import React from 'react';

export default function Portrait({ url, alt, name }) {
  return (
    <div className={`portrait-frame${url ? ' has-portrait' : ''}`}>
      {url ? (
        <img
          src={url}
          alt={alt || `Portrait of ${name}`}
          width="272"
          height="320"
          decoding="async"
        />
      ) : (
        <span className="portrait-placeholder">
          <svg
            width="31"
            height="31"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>

          <span>Your portrait</span>
        </span>
      )}
    </div>
  );
}