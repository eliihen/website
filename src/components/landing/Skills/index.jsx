import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import react from 'assets/icons/react.svg';
import javascript from 'assets/icons/javascript.svg';
import linux from 'assets/icons/linux.png';
import openshift from 'assets/icons/openshift.png';
import climbing from 'assets/icons/climbing.jpg';
import rocket from 'assets/icons/rocket.jpg';

import Skill from './Skill';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Skill title="React" logo={react} padding="0" bg="#20232a" />
      <Skill title="JavaScript + TypeScript" logo={javascript} padding="0" />
      <Skill title="Linux" logo={linux} bg="#333333" />
      <Skill title="Containerization" logo={openshift} bg="#f2f2f2" />
      <Skill title="Accessibility" logo={climbing} padding="0" />
      <Skill title="FinTech" logo={rocket} padding="0" />
    </SkillsWrapper>
  </Wrapper>
);
