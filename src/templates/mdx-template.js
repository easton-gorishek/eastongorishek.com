import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';

const MDXTemplate = ({ children, pageContext: { frontmatter } }) => {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        pathname={frontmatter.pathname}
      />
      <div
        css={css`
          width: 725px;
          padding-top: 72px;
          padding-bottom: 72px;
          max-width: 90vw;
          margin: 0 auto;
        `}
      >
        {children}
      </div>
    </Layout>
  );
};

export default MDXTemplate;
