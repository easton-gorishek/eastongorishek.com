import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import XpTimeline from '../components/xp-timeline';
import Skillset from '../components/skillset';
import ThankYou from '../components/thank-you';

export default () => {
  return (
    <Layout isHome={true}>
      <Hero />
      <XpTimeline />
      <Skillset />
      <ThankYou />
    </Layout>
  );
};
