import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import theme from '../../config/theme';
import xpImg from '../images/xp-image.svg';
import xpContent from './xp.js';

const XpHeader = styled('section')(
  theme.mq({
    margin: '0 auto 128px',
    marginBottom: [64, 64, 128, 128, 128, 128],
    paddingTop: [0, 64, 128, 128, 128, 128],
    width: '65em',
    maxWidth: '90vw',
    minHeight: 500,
    display: 'flex',
    alignItems: 'flex-end',
    '@media screen and (max-width: 820px) and (orientation: landscape)': {
      paddingTop: 0,
      marginBottom: 40,
      minHeight: 350,
    },
    '@media screen and (max-width: 576px) and (orientation: landscape)': {
      minHeight: 300,
    },
  })
);

const XpTimeline = () => {
  return (
    <div
      css={css`
        width: 100%;
        background: ${theme.brand.primary};
        @media screen and (max-width: 820px) and (orientation: landscape) {
          padding-top: 64px;
        }
      `}
    >
      <XpHeader>
        <div
          css={theme.mq({
            width: '100%',
            display: 'flex',
            flexDirection: [
              'column',
              'column',
              'column',
              'column',
              'column',
              'row',
            ],
            alignItems: 'center',
            justifyContent: [
              'center',
              'center',
              'center',
              'center',
              'center',
              'space-between',
            ],
            '& .xp-image': {
              height: [250, 300, 400, 400, 400, 400],
              marginBottom: [32, 32, 32, 32, 32, 0],
            },
            '& .xp-header': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: [44, 48, 70, 70, 70, 70],
            },
            '@media screen and (max-width: 820px) and (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'space-around',
              '& .xp-header': {
                fontSize: 48,
              },
              '& .xp-image': {
                height: 250,
              },
            },
            '@media screen and (max-width: 576px) and (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'space-around',

              '& .xp-header': {
                fontSize: 40,
              },
              '& .xp-image': {
                height: 200,
              },
            },
          })}
        >
          <img src={xpImg} className="xp-image" />
          <h1 className="xp-header">
            <span>Life & Work</span>
            <span>Experience</span>
          </h1>
        </div>
      </XpHeader>
      <div
        css={theme.mq({
          width: '65em',
          maxWidth: '90vw',
          margin: '0 auto',
          '& .vertical-timeline::before': {
            background: `${theme.colors.white}`,
          },

          // '& .vertical-timeline-element-icon': {
          //   boxShadow: `none`,
          // },
          '& .vertical-timeline.vertical-timeline--two-columns': {
            width: '100%',
          },
        })}
      >
        <VerticalTimeline>
          {xpContent.map(xp => (
            <VerticalTimelineElement
              contentStyle={{
                background: xp.background,
                color: xp.color,
                boxShadow: 'none',
              }}
              contentArrowStyle={{
                borderRight: xp.arrowStyle,
              }}
              date={xp.date}
              iconStyle={{
                background: theme.colors.white,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              icon={xp.icon}
              key={xp.title}
            >
              <h3 className="vertical-timeline-element-title">{xp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {xp.location}
              </h4>
              <p>{xp.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default XpTimeline;
