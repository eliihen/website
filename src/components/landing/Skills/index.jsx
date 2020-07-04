import * as React from 'react';
import { Container } from 'components/common';
import react from 'assets/icons/react.svg';
import javascript from 'assets/icons/javascript.svg';
import linux from 'assets/icons/linux.png';
import openshift from 'assets/icons/openshift.png';
import climbing from 'assets/icons/climbing.jpg';
import rocket from 'assets/icons/rocket.jpg';

import Skill from './Skill';
import { Wrapper, SkillsWrapper } from './styles';

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Skill title="React" logo={react} padding="0" bg="#20232a">
        <p>
          I have over {new Date().getFullYear() - 2015} years of experience with
          React, and with it by my side as my tool of choice, I consider myself
          a seasoned veteran.
        </p>

        <p>
          Through my travels with React I have built internal libraries that are
          critical to the day-to-day operations of my company like component
          libraries, data fetching frameworks and design systems. I have also
          developed libraries that are consumed by external users and monetized
          as a product offering where API stability and documentation is
          paramount.
        </p>

        <p>
          Having worked for many years developing industry-leading technology
          for the financial sector, I know a thing or two about working with
          complex projects that have strict standards in terms of uptime and
          reliability. This experience is something I take with me in everything
          I do, foreseeing the consequences of decisions before they are taken.
        </p>

        <p>
          An advantage of having worked with React for a while is the ability to
          reflect over the trends of the library. Trends come and go like the
          seasons, and I often find myself being able to relate the newest thing
          with a library or technique that came out a while ago, merging the
          best of both worlds into something that is better than the sum of
          their parts.
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
          This transition was exhilarating and ushered in a tidal-wave of
          innovation into the front-end space. All throughout this time I have
          been paying close attention to the trends of the ecosystem, forwarding
          any relevant innovations to my team. Because of this immersion I am
          often a person that is consulted by my peers, and I'm always quick to
          help when needs be.
        </p>

        <p>
          A few noteable libraries that I have worked with a fair amount are:
        </p>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Angular.js</li>
          <li>Moment.js</li>
          <li>date-fns</li>
          <li>Highcharts</li>
          <li>Redux</li>
          <li>Prettier</li>
          <li>ESLint</li>
          <li>Lerna</li>
          <li>Redux Form & Final Form</li>
          <li>react-query</li>
          <li>CSS preprocessors (LESS, SCSS, PostCSS, CSS modules)</li>
          <li>CSS-in-JS (styled-components, emotion, xstyled)</li>
          <li>GraphQL (Apollo)</li>
          <li>Gatsby</li>
          <li>Next.js</li>
          <li>Sentry.io</li>
        </ul>
        <p>
          <i>
            Please note that this list is in arbitrary order, seldom updated and
            non-exhaustive.
          </i>
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
            rel="noopener noreferrer"
          >
            RSI
          </a>
          . All these conditions affect our ability to use websites in a
          "normal" manner. This is why accessibility is important - it's about
          making the web accessible for everyone, even ourselves in the future.
        </p>

        <p>
          It's important to rely on best practices for developing websites, as
          these will not only help users with reduced motor functions, it also
          helps power users use the website more effectively! By using
          techniques that are recognized by the browser like sematic elements,
          keyboard shortcuts and browser assistance like auto-fill and native UI
          like date pickers work out-of-the-box. Users will also appreciate
          colors with a decent contrast, as it will make websites read better
          when read on a phone in the bright sun.
        </p>

        <p>
          These techniques are something a developer learns over time by
          acknowledging the need to develop websites in an accessible manner and
          then doing it for some time. As a developer who feels accessibility is
          paramount, I have many years of experience with designing and
          developing accessible experiences.
        </p>
        <p>
          Notice, for example, the trapping of the keyboard navigation within
          this dialogue. A press of the tab key will cycle between the
          interactive elements of this modal. When this dialogue is closed, the
          the focus is returned back to the place you were previously so that
          you kan keep tabbing through the page without being reset to the top.
        </p>
      </Skill>

      <Skill title="Privacy + Security" logo={rocket} padding="0" bg="#f3f3f3">
        <p>
          While technology is the building block of the modern world, It's also
          terrifying to be on the inside and see just how fragile the house of
          cards we've built is. As developers we have a responsibility to all
          our users to ensure their data is kept safe and their devices secure.
        </p>
        <p>
          As a developer I take security seriously. Through hosting my own
          servers and learning from experts in the field of infosec, I have
          gained good experience in the field of cyber security. This experience
          is put into use all throughout the process of producing software, from
          identifying vulnerable architecture in the planning process, writing
          secure code and reviewing other people's code and also identifying
          threats and security vulnerabilities in existing solutions.
        </p>
        <p>
          I'm no stranger to the practical applications of security in my daily
          life either. I am a multi-year user of GPG, YubiKey, encrypted backups
          and have gone through several projects of hardening my personal
          devices.
        </p>
      </Skill>
    </SkillsWrapper>
  </Wrapper>
);
