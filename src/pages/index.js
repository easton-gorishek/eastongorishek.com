import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import theme from '../../config/theme';
import douglasFirImg from '../images/douglas-fir-trees.png';

export default () => {
  return (
    <Layout bgColor={theme.colors.bg_color_dark}>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          margin-top: 64px;
          font-size: 24px;
          max-width: 1024px;
        `}
      >
        <div
          css={css`
            width: 50%;
            padding-top: 10%;
          `}
        >
          <p
            css={css`
              margin-bottom: 16px;
            `}
          >
            Hi, I&apos;m Easton Gorishek. I&apos;m a software engineer based in
            Portland, OR. I love creating intuitive apps that plug into
            interesting APIs.
          </p>
          <Link
            css={css`
              margin-top: 50px;
              color: ${theme.brand.secondary};
            `}
            to="/about/"
          >
            Read more &rarr;
          </Link>
        </div>
        <img width="45%" src={douglasFirImg} alt="" />
      </div>
    </Layout>
  );
};
