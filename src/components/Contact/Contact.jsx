import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Title from '../Title/Title';
import { contactData } from '../../mock/data';

const Contact = () => {
  const { cta, btn, email } = contactData;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={100} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : '/'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
