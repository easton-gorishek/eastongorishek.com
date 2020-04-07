import React from 'react';
import Link from './link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../config/theme';
import { darken } from 'polished';

const NavLink = styled(Link)(
  theme.mq({
    color: theme.colors.electric_purple,
    textTransform: 'initial',
    fontSize: [18, 20, 24],
    '&:hover': {
      color: darken(0.05, theme.colors.electric_purple),
    },
  })
);

const ThankYou = () => {
  return (
    <div
      css={css`
        width: 100%;
        padding-bottom: 150px;
        background: ${theme.brand.primary};
      `}
    >
      <div
        css={theme.mq({
          width: '65em',
          maxWidth: '90vw',
          margin: '0 auto',
        })}
      >
        <div
          css={theme.mq({
            maxWidth: 700,
            borderRadius: '.25em',
            '.thank-you-copy': {
              fontSize: [18, 20, 24],
              marginBottom: 32,
            },
            '.emojis': {
              fontSize: 48,
            },
            '.still-curious, .additional-pages': {
              fontSize: [18, 20, 24],
              fontStyle: 'italic',
            },
            '.still-curious': {
              marginBottom: 16
            },
            '.additional-pages li': {
              marginBottom: 16,
            },
            '.additional-container': {
              borderLeft: `4px solid ${theme.colors.electric_purple}`,
              paddingLeft: 16,
            },
          })}
        >
          <p className="emojis">🥳 🍻</p>
          <p className="thank-you-copy">
            Holy cow 🐮 you made it to the end! Thank you for checking out my
            website. I&apos;m currently available and seeking a full-time or
            contract position as a frontend engineer.
          </p>
          <div className="additional-container">
            <p className="still-curious">
              Still curious? Here are some other pages you are able to check
              out.
            </p>
            <ul className="additional-pages">
              <li>
                <NavLink to="/about/">About</NavLink> - Learn more about me
              </li>
              <li>
                <NavLink to="/contact/">Contact</NavLink> - Let&apos;s
                connect. I&apos;d love to chat!
              </li>
              <li>
                <NavLink to="/resume/">Resume</NavLink> - View my resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
