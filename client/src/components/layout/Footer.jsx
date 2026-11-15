import React from 'react';

export function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>
          GitHub:{' '}
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </span>
        <span>{profile.availability}</span>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}
