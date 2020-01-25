import * as React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Blurb, Skills, Contact, Projects } from 'components/landing';

const LandingPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Blurb />
    <Projects />
    <Contact />
  </Layout>
);

export default LandingPage;
