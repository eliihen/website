import React from 'react';
import { SkillWrapper, SkillTitle, Box, Logo } from './styles';

const Skill = ({ title, logo, padding, bg }) => (
  <SkillWrapper>
    <Box bg={bg}>
      <Logo src={logo} alt={title} padding={padding} />
    </Box>
    <SkillTitle>{title}</SkillTitle>
  </SkillWrapper>
);

export default Skill;
