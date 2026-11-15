import React from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { SectionHead } from '../ui/SectionHead.jsx';

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
