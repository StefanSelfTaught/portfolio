import React, { useContext, useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, role, subtitle, cta1, cta2 } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
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
        <ToggleTheme />
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title} <span className="text-color-main">{name}</span>
              <br />
              {role}
            </h1>
            <h2 className="hero-subtitle">{subtitle}</h2>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
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
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Header;
