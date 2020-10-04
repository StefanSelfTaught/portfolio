import React from 'react';
import * as Sentry from '@sentry/gatsby';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const App = () => (
  <Sentry.ErrorBoundary fallback="An error has occured">
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Sentry.ErrorBoundary>
);

export default App;
