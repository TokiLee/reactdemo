import React from 'react';
import Icon1 from '../../assets/images/golf.svg';
import {
  LessonsContainer,
  LessonsWrapper,
  LessonsH1,
  LessonsH2,
  LessonsP,
  LessonsCard,
  LessonsIcon,
} from './LessonsElement';

const Lessons = () => {
  return (
    <>
      <LessonsContainer id='lessons'>
        <LessonsH1>Lessons Available</LessonsH1>
        <LessonsWrapper>
          <LessonsCard>
            <LessonsIcon src={Icon1} />
            <LessonsH2>Lorem Ipsum</LessonsH2>
            <LessonsP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, nulla rem.
            </LessonsP>
          </LessonsCard>
          <LessonsCard>
            <LessonsIcon src={Icon1} />
            <LessonsH2>Lorem Ipsum</LessonsH2>
            <LessonsP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, nulla rem.
            </LessonsP>
          </LessonsCard>
          <LessonsCard>
            <LessonsIcon src={Icon1} />
            <LessonsH2>Lorem Ipsum</LessonsH2>
            <LessonsP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, nulla rem.
            </LessonsP>
          </LessonsCard>
        </LessonsWrapper>
      </LessonsContainer>
    </>
  );
};

export default Lessons;
