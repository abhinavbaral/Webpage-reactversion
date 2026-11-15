import React from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { SectionHead } from '../ui/SectionHead.jsx';

export function Work({ projects }) {
  const ref = useReveal();

  return (
    <section className="section" id="work">
      <div className="shell reveal" ref={ref}>
        <SectionHead no="02" title="Selected work" aside="Scroll sideways" />
      </div>

      <div className="shell" style={{ maxWidth: 'var(--shell)' }}>
        <div className="work__scroller">
          {projects.map((project) => (
            <article className={`card card--${project.tone}`} key={project.name}>
              <p className="card__meta">
                <span className="card__kind">{project.kind}</span>
                №{project.no}
                {project.year ? ` — ${project.year}` : ''}
              </p>
              <h3 className="card__name">{project.name}</h3>
              <p className="card__body">{project.body}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card__foot">
                {project.link ? (
                  <a
                    className="card__link"
                    href={project.link.href}
                    target={project.link.download ? undefined : '_blank'}
                    rel={project.link.download ? undefined : 'noreferrer'}
                    download={project.link.download ? '' : undefined}
                  >
                    {project.link.label}
                  </a>
                ) : null}
                <span className="card__status">{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
