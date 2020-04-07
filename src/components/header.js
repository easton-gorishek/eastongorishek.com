import React from 'react';
import Link from './link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../config/theme';

const NavLink = styled(Link)({
  fontFamily: 'Archivo SemiBold, sans-serif',
  textTransform: 'uppercase',
  color: theme.colors.copy,
  '& + &': { marginLeft: 50 },
  '@media (max-width: 480px)': {
    '& + &': {
      marginLeft: 25,
    },
  },
  '&:hover': {
    color: theme.colors.electric_purple,
  },
});

function Header({ isMDX }) {
  return (
    <header
      css={css`
        display: flex;
        width: 100%;
        height: 80px;
        background: ${theme.colors.smoke_black};
        ${isMDX &&
          `background: linear-gradient(to left, ${theme.brand.primary}, ${theme.brand.primary})`}
      `}
    >
      <nav
        css={theme.mq({
          width: '60em',
          maxWidth: '80vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
          '& span': {
            fontSize: '36px',
          },
        })}
      >
        <NavLink to="/">
          <span>eg</span>
        </NavLink>
        <div
          css={css`
            display: flex;
          `}
        >
          <NavLink to="/about/">about</NavLink>
          <NavLink to="/contact/">contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
