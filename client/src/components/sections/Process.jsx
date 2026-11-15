import React from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { SectionHead } from '../ui/SectionHead.jsx';

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
