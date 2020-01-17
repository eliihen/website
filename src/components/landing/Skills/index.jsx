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

      <Skill title="Linux" logo={linux} bg="#333333">
        <p>
          I love Linux and am always happy to be given a chance to work with it.
          Ever since my days in high school I have been exploring different
          distributions, desktop environments and window managers to optimize my
          workflow.
        </p>

        <p>
          For many years I used to run my own e-mail server, CalDAV+CardDAV
          server, LDAP server, file sync with OwnCloud/Nextcloud as well as
          various other services like privacy-respecting analytics. This was a
          great learning experience, but recently I have started to scale back
          this, mainly due to the concern of being able to securely maintain and
          patch many different servers with security patches as they come out.
        </p>

        <p>
          Because of this experience I am familiar with systemd, DNS, compiling
          custom kernels, LUKS encrypted drives, lvm, firewalld, NetworkManager,
          SELinux, various package managers (including maintaining packages) as
          well as a plethora of tools that are to be expected of a seasoned
          sysadmin like vim, less, rsync, ssh, gpg and more.
        </p>
      </Skill>

      <Skill title="Containerization" logo={openshift} bg="#f2f2f2" />

      <Skill title="Accessibility" logo={climbing} padding="0" />

      <Skill title="FinTech" logo={rocket} padding="0" />
    </SkillsWrapper>
  </Wrapper>
);
