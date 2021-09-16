import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const TimelineEvents = styled.dl`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: normal;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 40px auto;
  text-align: center;
  gap: 16px;
`;

export const Time = styled.dt`
  text-align: center;
  font-weight: normal;
  padding-bottom: 8px;

  &::after {
    content: ' ';
    display: block;
    background-color: #0074d9;
    width: 15px;
    height: 15px;
    border-radius: 25px;
    position: relative;
    top: 3px;
    left: 47%;
  }
`;

export const Text = styled.dd`
  scroll-snap-align: center;
  min-width: 200px;
  text-align: center;
`;

export const Line = styled.div`
  border: 1px solid #0074d9;
  width: 100%;
  position: relative;
  top: 30px;
`;
