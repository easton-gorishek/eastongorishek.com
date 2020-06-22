import React from 'react';
import styled from '@emotion/styled';
import heroImg from '../images/hero-image.svg';
import Link from '../components/link';
import theme from '../../config/theme';

const HeroBackground = styled.div(
  theme.mq({
    width: '100%',
    minHeight: [500, 600, 600, 600, 850],
    background: `linear-gradient(${theme.colors.smoke_black}, 35%, ${theme.brand.primary})`,
    '@media screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
      minHeight: 500
    }
  })
);

const Hero = () => {
  return (
    <HeroBackground>
      <div
        css={theme.mq({
          width: '65em',
          maxWidth: '90vw',
          margin: '0 auto',
          position: 'relative',
          '& .hero-container': {
            paddingTop: [100, 100, 100, 100, 175],
            position: 'relative',
            zIndex: 1
          },
          '& .hero-header': {
            fontSize: [40, 48, 56, 60, 60, 72],
            marginBottom: 8
          },
          '& .hero-copy': {
            fontSize: [18, 20, 24],
            maxWidth: [550, 550, 550, 550, 550, 600],
            marginBottom: 8
          },
          '& .hero-image': {
            display: ['none', 'none', 'none', 'none', 'block', 'block'],
            position: 'absolute',
            right: -100,
            top: 100
          },
          a: {
            fontSize: [18, 20, 24]
          },
          '@media screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
            '& .hero-header': {
              fontSize: 48
            },
            '& .hero-container': {
              paddingTop: 40
            },
            '& .hero-image': {
              display: 'block',
              height: 350,
              top: 0
            },
            '& .hero-copy': {
              width: 500,
              fontSize: 20
            },
            '& .hero-link': {
              fontSize: 20
            }
          }
        })}
      >
        <div className="hero-container">
          <h1 className="hero-header">Hello!</h1>
          <p className="hero-copy">
            I&apos;m Easton Gorishek. I&apos;m a software engineer based in
            Salt Lake City, UT. I love to explore and bring ideas to life through code
            while sipping on a hot cup of coffee.
          </p>
          <Link className="hero-link" to="/about/">
            Read more &rarr;
          </Link>
        </div>
        <img
          className="hero-image"
          src={heroImg}
          height={525}
          alt="Illustration of trees"
        />
      </div>
    </HeroBackground>
  );
};

export default Hero;
