import React from 'react';
import {
  About,
  Contact,
  Home,
  NavBar,
  Portfolio,
  Skills,
  SocialLinks,
} from './components';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;
