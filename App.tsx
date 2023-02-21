import * as React from 'react';
import './style.css';
import Topbar from './Topbar';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Music from './Music';
import Resume from './Resume';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <Topbar />
      <Intro />
      <Portfolio />
      <Music />
      <Resume />
      <Contact />
    </div>
  );
}
