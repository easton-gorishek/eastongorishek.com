import React from 'react';
import { css } from '@emotion/core';
import theme from '../../config/theme';
import knowledgeImg from '../images/knowledge.svg';

const SkillsetBlock = ({ header, skills }) => {
  return (
    <div
      css={theme.mq({
        marginBottom: [64, 64, 64, 64, 0],
        '.skillset-block-header': {
          fontSize: [32, 40],
        },
        '.skillset-item': {
          fontSize: [18, 20, 24],
        },
        '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
          marginBottom: 0,
          '.skillset-block-header': {
            fontSize: 28,
          },
          '.skillset-item': {
            fontSize: 18,
          },
        },
      })}
    >
      <h2 className="skillset-block-header">{header}</h2>
      <ul>
        {skills.map(skill => (
          <li className="skillset-item" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skillset = () => {
  return (
    <div
      css={theme.mq({
        paddingTop: 64,
        paddingBottom: 256,
        width: '100%',
        minHeight: 750,
        background: theme.brand.primary,
      })}
    >
      <div
        css={css`
          width: 65em;
          max-width: 90vw;
          margin: 0 auto;
        `}
      >
        <div
          css={theme.mq({
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'column', 'row'],
            alignItems: 'center',
            justifyContent: [
              'center',
              'center',
              'center',
              'center',
              'space-around',
            ],
            '.skillset-header': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: [40, 48, 56, 60, 60, 72],
              marginBottom: [32, 32, 32, 32, 0],
            },
            '.skillset-image': {
              height: [250, 300],
            },
            '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'space-around',
              '& .skillset-iamge': {
                height: 200,
                marginBottom: 0,
              },
              '& .skillset-header': {
                fontSize: 48,
              },
            },
          })}
        >
          <h1 className="skillset-header">
            <span>Skillset</span>
            <span>&</span>
            <span>Interests</span>
          </h1>
          <img className="skillset-image" src={knowledgeImg} height={300} />
        </div>
        <div
          css={theme.mq({
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'column', 'row'],
            justifyContent: [
              'center',
              'center',
              'center',
              'center',
              'space-between',
            ],
            marginTop: 128,
            marginBottom: 16,
            '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 64,
            },
          })}
        >
          <SkillsetBlock
            header="Core"
            skills={['JavaScript', 'Ruby', 'Node.js', 'HTML5', 'CSS3']}
            position="flex-start"
          />
          <SkillsetBlock
            header="Libraries"
            skills={[
              'React',
              'Express.js',
              'Ruby on Rails',
              'TensorFlow *',
              'Keras *',
              'D3.js *',
            ]}
            position="flex-end"
          />
          <SkillsetBlock
            header="Services"
            skills={['Heroku', 'Netlify', 'Docker']}
            position="flex-start"
          />
        </div>
        <p>* currently exploring</p>
      </div>
    </div>
  );
};

export default Skillset;
