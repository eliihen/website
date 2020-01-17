import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Blurb, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Blurb />
    <Projects />
    <Contact />
  </Layout>
);
