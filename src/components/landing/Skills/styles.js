import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  padding: 3rem 0;
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const SkillWrapper = styled.figure``;

export const SkillTitle = styled.figcaption`
  text-align: center;
  margin-top: 8px;
`;

export const Box = styled.div`
  height: 96px;
  width: 96px;
  margin: 0 auto;
  border-radius: 8px;
  background: ${props => props.bg};
  overflow: hidden;
`;

export const Logo = styled.img`
  padding: ${props => props.padding ?? '16px'};
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;
