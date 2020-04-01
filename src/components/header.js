import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../config/theme';

const NavLink = styled(Link)({
  color: theme.colors.copy,
  '& + &': { marginLeft: 50 },
  '@media (max-width: 480px)': {
    '& + &': {
      marginLeft: 25
    }
  },
  '&:hover': {
    color: theme.colors.link_color_hover,
  },
});

function Header({ bgColor = '#100c08' }) {
  return (
    <header
      css={css`
        display: flex;
        width: 100%;
        height: 100px;
        background: ${bgColor};
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
          <NavLink to="/about/">contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
