import * as React from 'react';
import { Layout, SEO } from 'components/common';
import {
  Intro,
  Blurb,
  Leader,
  Skills,
  Contact,
  Projects,
  Timeline,
} from 'components/landing';

const LandingPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Blurb />
    <Leader />
    <Timeline />
    <Projects />
    <Contact />
  </Layout>
);

export default LandingPage;
