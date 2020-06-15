import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from '../seo';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
      <SEO title="Stefan Pop | Web Developer" />
      <App />
    </>
  );
};
