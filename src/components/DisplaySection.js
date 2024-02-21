import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  overflow: hidden;

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }

  @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }

  & > *:nth-child(odd) {
    margin-left: 4rem;
  }

  @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
  }
`;

const MainTitle = styled.h1`
  font-size: var(--fontxxl);
  font-family: var(--fontP);
  text-transform: uppercase;

  background-image: linear-gradient(0deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;

const TextBlockL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  color: var(--greyLight);
`;

const TextBlockR = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;

  color: var(--greyLight);
`;

const Title = styled.div`
  font-size: var(--fontlg);
  font-family: var(--fontP);
  margin-bottom: 1em;

  @media screen and (max-width: 64em) {
    font-size: var(--fontmd);
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  font-family: var(--fontP);
  margin-bottom: 0.55em;
  width: 55%;

  @media screen and (max-width: 64em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
`;

const MovingText = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontS);
  padding: 1rem;

  background-image: linear-gradient(180deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontxl);
  }
`;

const DisplaySection = () => {
  const container = useRef(null);
  const textOne = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(
        textOne.current,
        { x: "-120%", delay: 1 },
        { x: "100%", duration: 5 }
      );

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <Section>
      <MainTitle>
        Liquid Crystal <br /> display
      </MainTitle>
      <TextBlockR>
        <Title>8 Bit Color</Title>
        <Text>with 160 x 144 pixels and can display upto 32,768 colors</Text>
      </TextBlockR>
      <TextBlockL ref={container}>
        <Title>Amazing Sound</Title>
        <Text>with mono speaker and a stereo headphone jack</Text>
      </TextBlockL>

      <TextContainer>
        <MovingText ref={textOne}>Faster Than Ever</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;
