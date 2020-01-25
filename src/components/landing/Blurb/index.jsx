import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, BlurbWrapper, Details, Thumbnail } from './styles';

export const Blurb = () => (
  <Wrapper id="about">
    <BlurbWrapper as={Container}>
      <Thumbnail>
        <img
          src={dev}
          alt="An illustration of a person seated before a browser window displaying dummy visualizations"
        />
      </Thumbnail>
      <Details>
        <h1>Who am I?</h1>
        <p>
          Since 2014 I've been working to make the web more inclusive and user
          friendly. From the beautiful Tyrifjord near the Norwegian capital of
          Oslo I alternate between working from home and commuting to Oslo to
          work with my awesome team.
        </p>
        <p>Have a question? I'm always happy to answer!</p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </BlurbWrapper>
  </Wrapper>
);
