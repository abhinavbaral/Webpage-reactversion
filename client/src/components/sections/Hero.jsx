import React from 'react';
import profileImg from '../../assets/img/profile.jpg';
import { Arrow } from '../ui/Arrow.jsx';

export function Hero({ profile, disciplines = [] }) {
  const [first, ...rest] = profile.name.split(' ');
  const last = rest.join(' ');

  return (
    <header className="hero shell" id="top">
      <div className="hero__meta">
        <p className="eyebrow">
          {profile.name} — {profile.role.toLowerCase()}
        </p>
        <p className="eyebrow">{profile.availability}</p>
      </div>
      <hr className="rule-dashed" />

      <div className="hero__grid">
        <div>
          <h1 className="display hero__name">
            <span className="line-1">{first}</span>
            <span className="line-2">{last}</span>
          </h1>

          {disciplines.length > 0 ? (
            <ul className="disciplines">
              {disciplines.map((d) => (
                <li className="disciplines__item" key={d}>
                  {d}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="hero__promise">// {profile.promise}</p>

          <div className="hero__actions">
            <a className="btn btn--fill" href="#contact">
              Start a project <Arrow />
            </a>
            <a className="btn btn--ghost" href="#work">
              See the work
            </a>
          </div>
        </div>

        <aside className="hero__card">
          <dl>
            <div className="row">
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="row">
              <dt>Builds</dt>
              <dd>Full-stack · Mobile</dd>
            </div>
            <div className="row">
              <dt>Status</dt>
              <dd>Open for work</dd>
            </div>
          </dl>
          <div className="hero__stamp">// {profile.promise}</div>
        </aside>
      </div>

      <div className="hero__badge" aria-hidden="true">
  <img src={profileImg} alt="Profile" />
</div>
    </header>
  );
}
