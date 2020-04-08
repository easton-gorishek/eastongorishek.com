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
    font-family: 'Roboto Regular', sans-serif;
    letter-spacing: 1.5px;
    font-size: 18px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    font-family: 'Roboto Medium', sans-serif;
    letter-spacing: 1.1px;
    color: ${theme.colors.link_color};
    &:hover {
      color: ${theme.colors.link_color_hover};
    }
  }

  ul {
    list-style: circle;
  }

  h1 {
    font-family: 'Archivo Bold', sans-serif;
  }

  h2 {
    font-family: 'Archivo SemiBold', sans-serif;
  }

  h1,
  h2 {
    letter-spacing: 1px;
    line-height: 1.1;
    text-transform: uppercase;
  }
`;

const Layout = ({ children, bgColor = theme.colors.bg_color_light, isMdx = false }) => {
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
          <Header isMdx={isMdx} />
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
