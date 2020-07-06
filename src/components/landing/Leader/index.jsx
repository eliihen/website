import * as React from 'react';
import { Container, Button } from 'components/common';
import personality from 'assets/illustrations/personality.svg';
import profile from 'assets/profile.pdf';
import { Wrapper, BlurbWrapper, Details, Thumbnail } from './styles';

export const Leader = () => (
  <Wrapper id="personality">
    <BlurbWrapper as={Container}>
      <Details>
        <h1>What am I like?</h1>
        <p>
          I pride myself on being an innovative and knowledgable developer. When
          given the chance I revel in the ability to discover and develop new
          technology.
        </p>
        <p>
          Leadership is important to ensure teams can realise their potential.
          My leadership style focuses on creating a culture of innovation by
          giving developers autonomy and focusing on skill development.
        </p>
        <p>Want to learn more about my personality?</p>
        <Button as="a" href={profile}>
          Read my profile
        </Button>
      </Details>
      <Thumbnail>
        <img src={personality} alt="A smart person leaving an orderly desk" />
      </Thumbnail>
    </BlurbWrapper>
  </Wrapper>
);
