import React from 'react';
import theme from '../../config/theme';
import knowledgeImg from '../images/knowledge.svg';

const SkillsetBlock = ({ header, skills, children }) => {
  return (
    <div
      css={theme.mq({
        '.skillset-block-header': {
          fontSize: [32, 32],
        },
        '.skillset-item': {
          fontSize: [18, 20, 24],
        },
        marginBottom: [24, 24, 24, 24, 0],
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
      {children}
    </div>
  );
};

const Skillset = () => {
  return (
    <div
      css={theme.mq({
        paddingBottom: [150, 150, 200],
        width: '100%',
        minHeight: 750,
        background: theme.brand.primary,
        '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
          paddingBottom: 150,
        },
      })}
    >
      <div
        css={theme.mq({
          display: 'flex',
          flexDirection: 'column',
          width: '65em',
          maxWidth: '90vw',
          margin: '0 auto',
        })}
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
            marginBottom: [64, 64, 128],
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
            '.exploring': {
              textAlign: 'center',
              fontSize: 16,
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
            '@media screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
              marginBottom: 64,
            },
          })}
        >
          <h1 className="skillset-header">
            <span>Skillset</span>
            <span>&</span>
            <span>Interests</span>
          </h1>
          <div>
            <img className="skillset-image" src={knowledgeImg} height={300} />
            <p className="exploring">* currently exploring</p>
          </div>
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
              'space-around',
            ],
            '@media only screen and (max-width: 1024px) and (max-height: 420px) and (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          })}
        >
          <SkillsetBlock
            header="Core"
            skills={[
              'JavaScript',
              'Ruby',
              'Node.js',
              'HTML5',
              'CSS3',
              'MongoDB',
              'PostgreSQL'
            ]}
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
          />
          <SkillsetBlock
            header="Services"
            skills={['Heroku', 'Netlify', 'Docker', 'AWS *']}
          />
        </div>
      </div>
    </div>
  );
};

export default Skillset;
