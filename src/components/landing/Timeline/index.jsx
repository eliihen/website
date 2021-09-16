import * as React from 'react';
import { Container } from 'components/common';
import { Wrapper, TimelineEvents, Text, Time, Line } from './styles';

const events = [
  {
    title: 'Born in Hønefoss',
    time: '1991',
  },
  {
    title: 'Graduated High School',
    time: '2010',
  },
  {
    title: 'Middlesex University for one year',
    time: '2011',
  },
  {
    title: 'Picked up jujutsu and music production',
    time: '2012',
  },
  {
    title: 'Met my soulmate',
    time: '2013',
  },
  {
    title: 'Learned web dev, databases, photography, videography, design',
    time: '2011–2014',
  },
  {
    title: 'Finished bachelor building CMS and ecommerce platform from scratch',
    time: '2014',
  },
  {
    title: 'Graduated University w/ Bsc. Multimedia computing and -design',
    time: '2014',
  },
  {
    title: 'Joined Oslo Market Solutions (OMS) as junior web developer',
    time: '2014',
  },
  {
    title:
      'Got really into Linux and has been using it on desktops and servers since',
    time: '2015',
  },
  {
    title: 'Migrated most OMS projects from Angular.js to React',
    time: '2016',
  },
  {
    title:
      'Developed libraries and frameworks for interfacing with websockets and realtime market data',
    time: '2016',
  },
  {
    title: 'Learned C, C++ and Rust',
    time: '2016',
  },
  {
    title:
      'Got into security and privacy, started self-hosting email, CalDAV, CardDAV, NextCloud, etc.',
    time: '2017',
  },
  {
    title: 'Promoted to team lead, got HR and architect responsibilities',
    time: '2017',
  },
  {
    title: 'Moved to Slemmestad and commuted by boat for a few years',
    time: '2017',
  },
  {
    title: 'Bought a car and roadtripped Norway',
    time: '2018',
  },
  {
    title: 'Started playing pen & paper RPGs',
    time: '2018',
  },
  {
    title: "Entered OMS' extended managment group, reporting directly to CEO",
    time: '2018',
  },
  {
    title: 'Bought house and moved "back home"',
    time: '2019',
  },
  {
    title: 'Euronext aquires Oslo Børs VPS and OMS',
    time: '2019',
  },
  {
    title:
      'Spearheaded comprehensive stability initiatives including migration to TypeScript and workflow changes',
    time: '2019',
  },
  {
    title: 'Built OpenShift-infrastructure platform',
    time: '2020',
  },
  {
    title: 'Euronext divests non-core assets and sells OMS to Infront',
    time: '2021',
  },
  {
    title: 'Bought another car and roadtripped Norway (again!)',
    time: '2021',
  },
  {
    title: 'Joined Kartverket as Senior Engineer',
    time: '2021',
  },
];

export const Timeline = () => (
  <Wrapper as={Container} id="timeline">
    <h2>My life in a nutshell</h2>
    <Line />
    <TimelineEvents>
      {events.map(({ title, time }) => (
        <>
          <Time>{time}</Time>
          <Text>{title}</Text>
        </>
      ))}
    </TimelineEvents>
  </Wrapper>
);
