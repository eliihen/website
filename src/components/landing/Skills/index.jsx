import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import react from 'assets/icons/react.svg';
import javascript from 'assets/icons/javascript.svg';
import linux from 'assets/icons/linux.png';
import openshift from 'assets/icons/openshift.png';

import Skill from './Skill';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Skill title="React" logo={react} padding="0" />
      <Skill title="JavaScript" logo={javascript} padding="0" />
      <Skill title="Linux" logo={linux} />
      <Skill title="Containerization" logo={openshift} />
      <Skill title="Accessibility" logo={react} />
      <Skill title="FinTech" logo={react} />
    </SkillsWrapper>
  </Wrapper>
);
