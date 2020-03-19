import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../config/theme';

const NavLink = styled(Link)(
  {
    lineHeight: '80px',
    textTransform: 'uppercase',
    '& + &': { marginLeft: 50 },
    borderBottom: '3px solid transparent',
  },
  props => ({
    '&:hover': {
      color: theme.brand.secondary,
      borderColor: props.bordercolor
        ? props.bordercolor
        : theme.brand.secondary,
    },
  })
);

function Header({ maxWidth = 1024, bgColor }) {
  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        display: flex;
        width: 100%;
        height: 80px;
        background: ${bgColor};
      `}
    >
      <nav
        css={css`
          width: 100%;
          max-width: ${maxWidth}px;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: stretch;
          margin: 0 auto;
          span {
            font-size: 36px;
          }
        `}
      >
        <NavLink to="/" bordercolor={'transparent'}>
          <span>eg</span>
        </NavLink>
        <div
          css={css`
            display: flex;
            height: 100%;
          `}
        >
          <NavLink to="/about/">about</NavLink>
          <NavLink to="/about/">contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
