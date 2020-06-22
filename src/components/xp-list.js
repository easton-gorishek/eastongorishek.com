import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../config/theme';
import beach from '../images/beach.png';
import lab from '../images/lab.png';
import southAmerica from '../images/south-america.png';
import boat from '../images/boat.png';
import backpack from '../images/backpack.png';
import code from '../images/code.png';
import search from '../images/search.png';
import school from '../images/school.png';
import Link from '../components/link';

const Icon = ({ img }) => {
  return (
    <img
      src={img}
      css={css`
        width: 55%;
        object-fit: cover;
      `}
    />
  );
};

const NavLink = styled(Link)({
  color: '#81ccb8',
  '&:hover': {
    color: '#81ccb8',
  },
});

const KickstandText = () => {
  return (
    <>
      Landed my first role professionally as a software engineer. I was part of
      an agency that consulted, managed, and developed web applications. I
      worked as a full-stack engineer for{' '}
      <NavLink to="https://fig.co">Fig</NavLink>, a crowdfunding and investment
      platform for video games, and a frontend engineer for{' '}
      <NavLink to="https://tothesource.com">Source</NavLink>, a digital library
      platform for building resource materials.
    </>
  );
};

const xpContent = [
  {
    title: 'In search of next adventure',
    location: 'Salt Lake City, UT',
    date: 'Present',
    text:
      "In need of a software engineer? I'm available and eager to make an impact!",
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={search} />,
  },
  {
    title: 'Software Engineer at Kickstand',
    location: 'Portland, OR',
    date: '2019 - 2020',
    text: <KickstandText />,
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={code} />,
  },
  {
    title: 'Teacher Assistant at Alchemy Code Lab',
    location: 'Portland, OR',
    date: '2019',
    text:
      'After graduating from Alchemy Code Lab I had the opportunity to stick around as a teaching assistant. Not only was it fulfilling to assist and teach students modern web technologies, but it helped solidify and deepen my understanding of them too.',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={school} />,
  },
  {
    title: 'Student at Alchemy Code Lab',
    location: 'Portland, OR',
    date: '2018',
    text:
      'I made a decision to become a software engineer and enrolled in Alchemy Code Lab’s Full-Stack JavaScript program. I went from not knowing how to open a terminal to building full-fledged web applications within six months. This experience was pivotal to the path I’m on now.',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={backpack} />,
  },
  {
    title: 'Fisherman',
    location: 'Kodiak, AK',
    date: '2017',
    text:
      'I decided to spend the summer on a fishing boat in Alaska. I think this may go down in history as the hardest damn work I’ve ever done but in the same breath it was such an amazing experience. The time fully emerged with nature and wildlife will never be forgotten.',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={boat} />,
  },
  {
    title: 'Traveler',
    location: 'South America',
    date: '2016-2017',
    text:
      'Spent time traveling abroad with my family expanding my view of the world and gaining valuable life experiences.',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={southAmerica} />,
  },
  {
    title: 'Lab Technician at ARUP Laboratories',
    location: 'Salt Lake City, UT',
    date: '2010 - 2015',
    text:
      'Spent five years in a medical laboratory and worked my way from a Specimen Processor to a Problem Resolution Specialist for Anatomic Pathology and Oncology Department.',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={lab} />,
  },
  {
    title: 'Barista + Surfer',
    location: 'Oahu, HI',
    date: '2009 - 2010',
    text:
      'My 18 year old self decided I wanted to learn how to surf so what better place than Hawaii? I sold my belongings and took a one way ticket to Oahu. I got a job working as a barista at Starbucks, and found friends who were kind enough to teach this haole how to surf. This was an amazing start to the past decade plus of my life.',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={beach} />,
  },
];

export default xpContent;
