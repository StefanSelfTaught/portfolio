import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const { url, author, title } = site.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
};

export default SEO;
