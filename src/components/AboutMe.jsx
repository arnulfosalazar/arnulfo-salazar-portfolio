import React from 'react';

export default function AboutMe() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-heading">
        <p className="section-label">About</p>
        <h2 id="about-title">
          A little about me<span>.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I’m a Computer Science student focused on software development,
            backend systems, APIs, and building practical projects that help me
            understand how software works beyond the classroom.
          </p>

          <p>
            I work primarily with C++, Java, and JavaScript, and I’ve been
            building experience with Node.js, Express, MySQL, REST APIs, Git,
            Linux, and related development tools.
          </p>

          <p>
            I’m especially interested in software engineering roles where I can
            keep improving as a developer, contribute to real products, and work
            on systems that people actually use.
          </p>
        </div>

        <div className="about-details">
          <div className="about-detail">
            <span>Focus</span>
            <p>Software Engineering / Backend Development</p>
          </div>

          <div className="about-detail">
            <span>Education</span>
            <p>Computer Science</p>
          </div>

          <div className="about-detail">
            <span>Currently learning</span>
            <p>APIs, backend development, databases, and system design</p>
          </div>

          <a
            className="resume-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
        </div>
      </div>
    </section>
  );
}