import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import XpTimeline from '../components/xp-timeline';
import Skillset from '../components/skillset';

export default () => {
  return (
    <>
      <Layout>
        <Hero />
        <XpTimeline />
        <Skillset />
      </Layout>
    </>
  );
};
