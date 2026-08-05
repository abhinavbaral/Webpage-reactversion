import React, { useEffect, useState } from 'react';
import { getContent } from './lib/api.js';
import { Nav, Hero, Manifesto } from './components/Top.jsx';
import { Stack, Metrics, Work, History, Process } from './components/Sections.jsx';
import { Contact, Footer } from './components/Contact.jsx';

export default function App() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getContent().then(setContent).catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="boot">
        Could not reach the server. Is it running on port 4000?
      </div>
    );
  }

  if (!content) {
    return <div className="boot">Loading…</div>;
  }

  return (
    <>
      <Nav profile={content.profile} />
      <Hero profile={content.profile} disciplines={content.disciplines} />
      <Manifesto manifesto={content.manifesto} />
      <Stack stack={content.stack} legend={content.skillLegend} />
      <Metrics metrics={content.metrics} />
      <Work projects={content.projects} />
      <History history={content.history} languages={content.languages} />
      <Process steps={content.process} />
      <Contact profile={content.profile} />
      <Footer profile={content.profile} />
    </>
  );
}
