import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);

  text-transform: uppercase;
  font-size: var(--fontBig);
  z-index: 1;

  color: var(--white);
  font-family: var(--fontS);

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontlg);
    transform: none;
    left: 2rem;
    top: 2rem;
    width: 50%;
  }
`;

const Battery = styled.ul`
  position: absolute;
  right: 4rem;
  list-style: none;
  background-color: var(--dark);
  border: 3px solid var(--white);
  border-radius: 30px;
  padding: 0.5rem;
  width: 15rem;

  li {
    width: 100%;
    height: 5rem;
    background-color: var(--white);
    background-image: linear-gradient(270deg, var(--gradient2));
    border-radius: 25px;
    opacity: 0;
  }

  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 48em) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BatterySection = () => {
  const battery = useRef(null);

  let elements = gsap.utils.selector(battery);

  useLayoutEffect(() => {
    let tl = gsap.timeline({});

    elements("li").forEach((el) => {
      tl.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        opacity: 1,
      });
    });

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section id="battery">
      <Title>All Day Battery Life</Title>
      <Battery ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </Battery>
    </Section>
  );
};

export default BatterySection;
