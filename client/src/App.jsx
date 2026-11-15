import React, { useCallback, useLayoutEffect, useState } from 'react';
import {
  profile,
  disciplines,
  manifesto,
  skillLegend,
  stack,
  metrics,
  projects,
  processSteps,
  history,
  languages,
} from './data/content.js';
import { bootSeen } from './lib/boot.js';
import Loader from './components/Loader/Loader.jsx';
import { Nav } from './components/layout/Nav.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Manifesto } from './components/sections/Manifesto.jsx';
import { Stack } from './components/sections/Stack.jsx';
import { Metrics } from './components/sections/Metrics.jsx';
import { Work } from './components/sections/Work.jsx';
import { History } from './components/sections/History.jsx';
import { Process } from './components/sections/Process.jsx';
import { Contact } from './components/sections/Contact.jsx';

export default function App() {
  // The intro plays once per session. Later loads go straight to the page.
  const [intro] = useState(() => !bootSeen());
  const [showSite, setShowSite] = useState(!intro);
  const [introDone, setIntroDone] = useState(!intro);

  // Without an intro there is nothing to swap, so drop the static shell.
  useLayoutEffect(() => {
    if (!intro) document.getElementById('boot')?.remove();
  }, [intro]);

  // The page mounts as the loader starts to lift, so its entrance animations
  // play in view instead of behind the loader.
  const handleLeave = useCallback(() => setShowSite(true), []);
  const handleDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      {showSite && (
        <>
          <Nav profile={profile} />
          <Hero profile={profile} disciplines={disciplines} />
          <Manifesto manifesto={manifesto} />
          <Stack stack={stack} legend={skillLegend} />
          <Metrics metrics={metrics} />
          <Work projects={projects} />
          <History history={history} languages={languages} />
          <Process steps={processSteps} />
          <Contact profile={profile} />
          <Footer profile={profile} />
        </>
      )}
      {!introDone && <Loader onLeave={handleLeave} onDone={handleDone} />}
    </>
  );
}
