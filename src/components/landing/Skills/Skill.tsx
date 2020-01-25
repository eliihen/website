import React, { useState, useRef } from 'react';
import { useId } from "@reach/auto-id";
import { SkillWrapper, SkillTitle, Box, Logo, StyledDialogContent, Hero, CardText } from './styles';

import { Button } from 'components/common';
import VisuallyHidden from '@reach/visually-hidden';
import { Dialog, DialogOverlay } from '@reach/dialog';
import { animated, useTransition } from 'react-spring';
import '@reach/dialog/styles.css';

type Props = {
  title: string,
  logo: string,
  children: React.Node,
  padding: number,
  bg: string,
};

const Skill: React.FC<Props> = ({ title, logo, children, padding, bg }) => {
  const id = useId();
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(StyledDialogContent);
  const transitions = useTransition(showDialog, null, {
    from: { opacity: 0, y: -100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -100 },
  });


  return (
    <>
      <SkillWrapper onClick={open}>
        <Box bg={bg}>
          <Logo src={logo} alt={title} padding={padding} />
        </Box>
        <SkillTitle id={id}>{title}</SkillTitle>
      </SkillWrapper>
      {transitions.map(
        ({ item, key, props: styles }) =>
          item && (
            <AnimatedDialogOverlay key={key} style={{ opacity: styles.opacity }}>
              <AnimatedDialogContent
                style={{
                  transform: styles.y.interpolate(
                    value => `translate3d(0px, ${value}px, 0px)`,
                  ),
                }}
                aria-labelledby={id}
              >
                <Hero bg={bg}>
                  <img src={logo} alt={title} />
                </Hero>
                <CardText>
                  <h2>{title}</h2>
                  {children}
                  <Button onClick={close}>
                    Close
                  </Button>
                </CardText>
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          ),
      )}
    </>
  );
};

export default Skill;
