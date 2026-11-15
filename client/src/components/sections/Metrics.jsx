import React from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { SectionHead } from '../ui/SectionHead.jsx';

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
