import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

function SectionHead({ no, title, aside }) {
  return (
    <div className="section-head">
      <span className="section-head__no">({no})</span>
      <h2 className="section-head__title">{title}</h2>
      {aside ? <span className="section-head__aside">// {aside}</span> : null}
    </div>
  );
}

export function Stack({ stack, legend = [] }) {
  const ref = useReveal();

  return (
    <section className="section shell" id="stack">
      <div className="reveal" ref={ref}>
        <SectionHead no="01" title="What I work with" aside="Three disciplines" />

        {legend.length > 0 ? (
          <ul className="legend">
            {legend.map((item) => (
              <li className={`legend__item legend__item--${item.level}`} key={item.level}>
                <span className="legend__swatch" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        ) : null}

        {stack.map((row) => (
          <div
            className={`stack__row${row.feature ? ' stack__row--feature' : ''}`}
            key={row.id}
          >
            <span className="stack__no">{row.id}</span>
            <div>
              <h3 className="stack__title">{row.title}</h3>
              <p className="stack__body">{row.body}</p>
            </div>
            <div className="tags">
              {row.tags.map((tag) => (
                <span className={`tag tag--${tag.level}`} key={tag.name}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Metrics({ metrics }) {
  const ref = useReveal();
  if (!metrics?.enabled) return null;

  return (
    <section className="section shell" id="proof">
      <div className="reveal" ref={ref}>
        <SectionHead no="02" title="Proof" aside={metrics.eyebrow} />
        <p className="metrics__note">{metrics.note}</p>

        {metrics.rows.map((row) => (
          <div className="metric" key={row.label}>
            <span className="metric__label">
              {row.label}
              <span className="metric__project">{row.project}</span>
            </span>
            <span className="metric__from">
              {row.from}
              {row.unit}
            </span>
            <span className="metric__to">
              {row.to}
              {row.unit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

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

export function Process({ steps }) {
  const ref = useReveal();

  return (
    <section className="section shell" id="process">
      <div className="reveal" ref={ref}>
        <SectionHead no="04" title="How the work goes" aside="Four steps, no mystery" />

        <div className="process">
          {steps.map((step) => (
            <div className="step" key={step.no}>
              <div className="step__disc">{step.no}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Track({ label, items }) {
  return (
    <div className="track">
      <h3 className="track__label">{label}</h3>
      <ol className="track__list">
        {items.map((item) => (
          <li className={`entry${item.current ? ' entry--current' : ''}`} key={item.year + item.title}>
            <span className="entry__year">{item.year}</span>
            <div>
              <h4 className="entry__title">
                {item.title}
                {item.current ? <span className="entry__now">Now</span> : null}
              </h4>
              <p className="entry__place">{item.place}</p>
              {item.note ? <p className="entry__note">{item.note}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function History({ history, languages = [] }) {
  const ref = useReveal();
  if (!history) return null;

  return (
    <section className="section shell" id="history">
      <div className="reveal" ref={ref}>
        <SectionHead no="03" title="Studied & worked" aside="They overlap" />

        <div className="history">
          <Track label="Studied" items={history.studied} />
          <Track label="Worked" items={history.worked} />
        </div>

        {languages.length > 0 ? (
          <div className="langs">
            <h3 className="track__label">Writes and speaks</h3>
            <ul className="langs__list">
              {languages.map((lang) => (
                <li className="lang" key={lang.name}>
                  <span className="lang__name">{lang.name}</span>
                  <span className="lang__dots" aria-hidden="true">
                    {[1, 2, 3, 4].map((n) => (
                      <i className={n <= lang.dots ? 'on' : ''} key={n} />
                    ))}
                  </span>
                  <span className="lang__level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
