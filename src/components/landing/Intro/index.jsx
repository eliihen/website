import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>
          I’m Espen and I’m a fullstack developer with a focus on
          state&#8209;of&#8209;the&#8209;art frontend!
        </h4>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="A visualization of a seated person programming" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
