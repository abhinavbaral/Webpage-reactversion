import React, { useCallback, useEffect, useState } from 'react';
import { getContent } from './lib/api.js';
import Loader from './components/Loader.jsx';
import { Nav, Hero, Manifesto } from './components/Top.jsx';
import { Stack, Metrics, Work, History, Process } from './components/Sections.jsx';
import { Contact, Footer } from './components/Contact.jsx';

export default function App() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [loaderDone, setLoaderDone] = useState(false);

  const load = useCallback(() => {
    setError(null);
    getContent()
      .then(setContent)
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleDone = useCallback(() => setLoaderDone(true), []);

  return (
    <>
      {content && (
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
      )}
      {!loaderDone && (
        <Loader
          ready={Boolean(content)}
          error={error}
          onRetry={load}
          onDone={handleDone}
        />
      )}
    </>
  );
}
