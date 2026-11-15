import React from 'react';
import { useReveal } from '../../hooks/useReveal.js';

export function Manifesto({ manifesto }) {
  const ref = useReveal();

  return (
    <section className="manifesto">
      <div className="shell reveal" ref={ref}>
        <p className="eyebrow">// {manifesto.eyebrow}</p>
        <h2 className="manifesto__head">
          {manifesto.lead}{' '}
          <span className="manifesto__mark">{manifesto.highlight}</span>
        </h2>
        <p className="manifesto__body">{manifesto.body}</p>
      </div>
    </section>
  );
}
