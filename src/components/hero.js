import React from 'react';
import styled from '@emotion/styled';
import heroImg from '../images/hero-image.svg';
import Link from '../components/link';
import theme from '../../config/theme';

const NavLink = styled(Link)(
  theme.mq({
    color: `${theme.colors.link_color}`,
    fontSize: [18, 20, 24, 24, 24, 24],
    '&:hover': {
      color: `${theme.colors.link_color_hover}`,
    },
  })
);

const HeroBackground = styled.div(
  theme.mq({
    width: '100%',
    minHeight: [500, 500, 500, 500, 750, 750],
    background: `linear-gradient(${theme.colors.smoke_black}, 35%, ${theme.brand.primary})`,
    '@media screen and (max-width: 820px) and (orientation: landscape)': {
      minHeight: 400,
    },
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
            paddingTop: [100, 100, 100, 100, 200, 200, 200],
            position: 'relative',
            zIndex: 1,
          },
          '& .hero-header': {
            fontSize: [48, 56, 70, 70, 70, 70],
          },
          '& .hero-copy': {
            fontSize: [18, 20, 24, 24, 24, 24],
            maxWidth: [550, 550, 550, 550, 550, 600],
            marginBottom: '16px',
          },
          '& .hero-image': {
            display: [
              'none',
              'none',
              'none',
              'none',
              'block',
              'block',
              'block',
            ],
            position: 'absolute',
            right: -100,
            top: 100,
          },
          '@media screen and (max-width: 820px) and (orientation: landscape)': {
            '& .hero-image': {
              height: 375,
              top: 50,
            },
            '& .hero-container': {
              paddingTop: 100,
            },
          },
        })}
      >
        <div className="hero-container">
          <h2 className="hero-header">hello!</h2>
          <p className="hero-copy">
            I&apos;m Easton Gorishek. I&apos;m a software engineer based in
            Portland, OR. I love to bring ideas to life through code while
            sipping on a hot cup of joe.
          </p>
          <NavLink to="/about/">Read more &rarr;</NavLink>
        </div>
        <img className="hero-image" src={heroImg} height={550} />
      </div>
    </HeroBackground>
  );
};

export default Hero;
