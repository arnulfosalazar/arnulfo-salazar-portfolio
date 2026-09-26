import React, { useEffect } from 'react';

import portfolio from './data/portfolio.json';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import Footer from './components/Footer.jsx';

function useProjectRevealAnimations() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const animations = [];
    const projects = Array.from(
      document.querySelectorAll('[data-project]')
    );

    const revealed = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            !entry.isIntersecting ||
            revealed.has(entry.target)
          ) {
            return;
          }

          revealed.add(entry.target);
          observer.unobserve(entry.target);

          if (
            reducedMotion.matches ||
            !HTMLElement.prototype.animate
          ) {
            return;
          }

          const isMobile = window.innerWidth < 760;

          entry.target
            .querySelectorAll('[data-reveal]')
            .forEach((element, index) => {
              const startingTransform = isMobile
                ? 'translate3d(0, 35px, 0)'
                : `translate3d(${index === 0 ? '-38vw' : '42vw'}, 0, 0)`;

              const animation = element.animate(
                [
                  {
                    transform: startingTransform,
                  },
                  {
                    transform: 'translate3d(0, 0, 0)',
                  },
                ],
                {
                  duration: isMobile ? 650 : 1000,
                  delay: index * 65,
                  easing: 'cubic-bezier(.22, 1, .36, 1)',
                  fill: 'backwards',
                }
              );

              animations.push(animation);
            });
        });
      },
      {
        threshold: 0.16,
      }
    );

    projects.forEach((project) => observer.observe(project));

    const handleReducedMotionChange = () => {
      if (reducedMotion.matches) {
        animations.forEach((animation) => animation.cancel());
      }
    };

    reducedMotion.addEventListener(
      'change',
      handleReducedMotionChange
    );

    return () => {
      observer.disconnect();

      animations.forEach((animation) => {
        animation.cancel();
      });

      reducedMotion.removeEventListener(
        'change',
        handleReducedMotionChange
      );
    };
  }, []);
}

export default function App() {
  useProjectRevealAnimations();

  const data = portfolio;

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>

      <div className="portfolio" id="top">
        <Header />

        <main>
          <Hero data={data} />

          <section
            className="work-section"
            id="work"
            aria-labelledby="work-title"
          >
            <div className="work-heading">
              <h2 id="work-title">
                Selected work<span>.</span>
              </h2>

              <p>A few things I've been building.</p>
            </div>

            {data.projects.map((project, index) => (
              <ProjectSection
                key={project.id || index}
                project={project}
                index={index}
              />
            ))}
          </section>
        </main>

        <Footer data={data} />
      </div>
    </>
  );
}