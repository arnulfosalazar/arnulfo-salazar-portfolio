import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#top"
        aria-label="Back to top"
      >
        <span className="monogram">
          AS<span className="brand-period">.</span>
        </span>

        <span className="wordmark-label">
          Portfolio
        </span>
      </a>

      <nav
        className="main-nav"
        aria-label="Main navigation"
      >
        <a
          className="nav-work"
          href="#work"
        >
          Work <span>03</span>
        </a>
      </nav>
    </header>
  );
}