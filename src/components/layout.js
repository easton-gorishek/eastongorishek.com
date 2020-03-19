import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Header from './header';
import theme from '../../config/theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    color: ${theme.brand.primary};
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.5px;
    font-size: 18px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${theme.brand.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    line-height: 1.4;
  }
`;

const Layout = ({ children, bgColor }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          padding-top: 32px;
          ${bgColor && `background: ${bgColor}`};
        `}
      >
        <div css={{ flex: '1 0 auto' }}>
          <Header bgColor={bgColor} />
          <main>{children}</main>
          <footer></footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
