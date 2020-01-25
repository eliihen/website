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
      <Skill title="React" logo={react} padding="0" bg="#20232a">
        <p>
          I have over {new Date().getFullYear() - 2015} years of experience with
          React, and consider myself a seasoned veteran.
        </p>

        <p>
          More information to come.
        </p>
      </Skill>

      <Skill
        title="JavaScript + TypeScript"
        logo={javascript}
        padding="0"
        bg="#f7df1e"
      >
        <p>
          The transition from ES5 to ES6 marked a huge shift in the JavaScript
          ecosystem. From modules to constants and classes, this release enabled
          innovation to proceed at a swift pace thanks to the new features and
          patterns this enabled. As part of the wave of developers that took
          part in the ES6 transition, I am confident in both the modern and
          classic standards.
        </p>

        <p>
          Around this time, 6to5 (later renamed babel) was released. This, too,
          was a milestone in modern web development and launched a flurry of
          innovation around the compilation of projects, resulting in projects
          like Webpack, Parcel and Svelte.
        </p>

        <p>
          More information to come.
        </p>
      </Skill>

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

      <Skill title="Containerization" logo={openshift} bg="#f2f2f2">
        <p>
          I was part of a team that introduced OpenShift to a company that had
          never used containers in production. This was a massive project
          involving all teams of the company and re-implementing everything from
          CI/CD, application runtimes, development- and production environments
          and more.
        </p>

        <p>
          Suffice to say, this was a huge undertaking and meant the working
          group had to understand all concepts of OpenShift, Kubernetes and
          Docker in detail.
        </p>
      </Skill>

      <Skill title="Accessibility" logo={climbing} padding="0" bg="#000000">
        <p>
          We often forget that most people are temporarily-abled. We get old,
          lose our vision, break arms after falling or get{' '}
          <a
            href="https://en.wikipedia.org/wiki/Repetitive_strain_injury"
            target="_blank"
            rel="noopener noreferer"
          >
            RSI
          </a>. All these conditions affect our ability to use websites in a
          "normal" manner. This is why accessibility is important - it's about
          making the web accessible for everyone, even ourselves in the future.
        </p>

        <p>
          Using best practices for developing websites will also make .
          Using colors with a decent contrast will make websites read better
          when read on a phone in the bright sun, using semantic elements allows
          power users to use keyboard navigation like pressing
          <code>Enter</code> to submit a form.
        </p>

        <p>
          More information to come.
        </p>
      </Skill>

      <Skill title="Privacy + Security" logo={rocket} padding="0" bg="#f3f3f3">
        <p>
          More information to come
        </p>
      </Skill>
    </SkillsWrapper>
  </Wrapper>
);
