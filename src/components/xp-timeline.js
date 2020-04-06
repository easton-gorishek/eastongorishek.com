import React from 'react';
import styled from '@emotion/styled';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import theme from '../../config/theme';
import xpImg from '../images/xp-image.svg';
import xpList from './xp-list.js';

const XpHeader = styled('section')(
  theme.mq({
    margin: '0 auto',
    marginBottom: [64, 64, 128],
    width: '65em',
    maxWidth: '90vw',
    display: 'flex',
    alignItems: 'flex-end',
    '@media screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
      marginBottom: 64,
    },
  })
);

const XpTimeline = () => {
  return (
    <div
      css={theme.mq({
        width: '100%',
        paddingBottom: [150, 150, 200],
        background: theme.brand.primary,
        '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
          paddingBottom: 150,
        },
      })}
    >
      <XpHeader>
        <div
          css={theme.mq({
            width: '100%',
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'column', 'row'],
            alignItems: 'center',
            justifyContent: [
              'center',
              'center',
              'center',
              ' center',
              'space-around',
            ],
            '& .xp-image': {
              height: [250, 300, 300, 300, 275, 300],
              marginBottom: [32, 32, 32, 32, 0],
            },
            '& .xp-header': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: [40, 48, 56, 60, 60, 72],
            },
            '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'space-around',
              '& .xp-image': {
                height: 200,
                marginBottom: 0,
              },
              '& .xp-header': {
                fontSize: 48,
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
          {xpList.map(xp => (
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
