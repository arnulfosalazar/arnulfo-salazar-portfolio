import React from 'react';
import Portrait from './Portrait.jsx';
import { ArrowDown, SocialIcon, ArrowUpRight } from './Icons.jsx';

export default function Hero({ data }) {
  const socials = [
    ['linkedin', 'LinkedIn'],
    ['github', 'GitHub'],
    ['leetcode', 'LeetCode'],
    ['discord', 'Discord'],
  ];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-heading">
          <div className="hero-titles">
            <p className="hero-name">{data.name}</p>

            <h1 id="hero-title">
              <span>{data.headline}</span>
              <span className="hero-secondary">
                {data.subheadline}
              </span>
            </h1>
          </div>

          <Portrait
            url={data.portraitUrl}
            alt={data.portraitAlt}
            name={data.name}
          />
        </div>

        <p className="hero-introduction">
          {data.introduction}
        </p>

        <div className="social-links" aria-label="Social profiles">
          {socials.map(([key, label]) => {
            const url = data.socials?.[key];

            if (!url) return null;

            return (
              <a
                key={key}
                className="social-link"
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} profile`}
              >
                <SocialIcon name={key} />
                <span>{label}</span>
                <ArrowUpRight className="social-arrow" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="hero-bottom">
        <span className="hero-footnote">
          Ideas, made real.
        </span>

        <a className="work-cue" href="#work">
          Selected work
          <span className="work-cue-arrow">
            <ArrowDown />
          </span>
        </a>

        <span className="hero-footnote hero-footnote-right">
          A collection of three
        </span>
      </div>
    </section>
  );
}