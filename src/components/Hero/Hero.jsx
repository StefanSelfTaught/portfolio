import React from 'react';
import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { heroData } from '../../mock/data';

const Header = () => {
  const { title, name, role, subtitle, cta1, cta2 } = heroData;

  return (
    <>
      <a style={{ color: '#fff' }} href="#contact">
        <button type="button" className="contact-me">
          Contact me
        </button>
      </a>
      <ToggleTheme />
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 110,
              density: {
                enable: false,
              },
            },
            color: {
              value: '#02aab0',
            },
            size: {
              value: 6,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <section id="hero">
        <Container>
          <h1 data-sal="slide-up" className="hero-title">
            {title} <span className="text-color-main">{name}</span>
            <br />
            {role}
          </h1>
          <h2 data-sal="slide-up" className="hero-subtitle">
            {subtitle}
          </h2>
          <div className="cta-container">
            <p className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#about">
                {cta1}
              </a>
            </p>
            <p className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#projects">
                {cta2}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
