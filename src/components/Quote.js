import React, { useEffect, useRef, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
`;
const move = keyframes`
    100%{
        transform: translateY(0);
    }
`;

const Text = styled.h1`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${move};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontP);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 70em) {
    width: 70%;
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    height: var(--fontsm);
  }
  @media screen and (max-width: 40em) {
    width: 90%;
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontxs);
  }
`;

const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let element = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: element,
      start: "top+=150 top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <TextContainer>
        <Text delay="0.1s">
          <span>Back to Basics</span>
        </Text>
        <Text delay="0.4s">
          <span>Press Play and Step Back</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;
