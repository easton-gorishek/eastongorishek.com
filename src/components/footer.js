import React from 'react';
import { css } from '@emotion/core';
import theme from '../../config/theme';

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      height: 200px;
      background: ${theme.colors.smoke_black};
    `}
  ></footer>
);

export default Footer;
