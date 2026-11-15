import React from 'react';
import { useReveal } from '../../hooks/useReveal.js';
import { SectionHead } from '../ui/SectionHead.jsx';

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
