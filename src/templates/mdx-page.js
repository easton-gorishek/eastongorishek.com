import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import theme from '../../config/theme';

const MDXPage = ({ children }) => {
  return (
    <Layout headerBg={theme.brand.primary} isMDX={true}>
      <div
        css={css`
          width: 850px;
          padding-bottom: 80px;
          max-width: 90vw;
          margin: 0 auto;
        `}
      >
        {children}
      </div>
    </Layout>
  );
};

export default MDXPage;
