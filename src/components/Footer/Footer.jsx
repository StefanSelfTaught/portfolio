import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - {' '}
          <a href="https://github.com/stefanselftaught" target="_blank" rel="noopener noreferrer">
            Stefan Pop
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
