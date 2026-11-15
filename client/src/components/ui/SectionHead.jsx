import React from 'react';

export function SectionHead({ no, title, aside }) {
  return (
    <div className="section-head">
      <span className="section-head__no">({no})</span>
      <h2 className="section-head__title">{title}</h2>
      {aside ? <span className="section-head__aside">// {aside}</span> : null}
    </div>
  );
}
