import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from './HeroElements';
import GolfImg from '../../assets/images/golf.png';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg src={GolfImg} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Lorem ipsum</HeroH1>
          <HeroP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            rutrum enim, eget porta massa. Maecenas vitae efficitur nisl, vel
            rutrum odio.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='signup'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
