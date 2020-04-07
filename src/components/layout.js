import React from 'react';
import Helmet from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { config } from '@fortawesome/fontawesome-svg-core';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Header from './header';
import Footer from './footer';
import mdxComponents from './mdx';
import theme from '../../config/theme';
import '../fonts/fonts.css';

config.autoAddCss = false;

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    color: ${theme.colors.copy};
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.5px;
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    color: ${theme.colors.link_color};
  }

  ul {
    list-style: circle;
  }

  h1,
  h2 {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
  }
`;

const Layout = ({ children, bgColor = theme.colors.white, isMDX }) => {
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
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: ${bgColor};
        `}
      >
        <div css={{ flex: '1 0 auto', zIndex: 0 }}>
          <Header isMDX={isMDX} />
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
