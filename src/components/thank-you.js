import React from 'react';
import Link from './link';
import { css } from '@emotion/core';
import theme from '../../config/theme';

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
              marginBottom: 16,
            },
            '.additional-pages li': {
              marginBottom: 16,
            },
            '.additional-container': {
              borderLeft: `4px solid ${theme.colors.electric_purple}`,
              paddingLeft: 16,
            },
            a: {
              fontSize: [18, 20, 24],
            },
          })}
        >
          <p className="emojis">🥳 🍻</p>
          <p className="thank-you-copy">
            Holy cow 🐮 you made it to the end! Thank you for checking out my
            website. I&apos;m currently available and seeking a full-time or
            contract position as a software engineer with an emphasis on the
            frontend.
          </p>
          <div className="additional-container">
            <p className="still-curious">
              Still curious? Here are some other pages you are able to check
              out.
            </p>
            <ul className="additional-pages">
              <li>
                <Link to="/about/">About</Link> - Learn more about me
              </li>
              <li>
                <Link to="/contact/">Contact</Link> - Let&apos;s connect.
                I&apos;d love to chat!
              </li>
              <li>
                <a href="/easton-gorishek-resume.pdf" target="_blank">
                  Resume
                </a>{' '}
                - View my resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
