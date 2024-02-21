import React from "react";
import styled, { keyframes } from "styled-components";
import chip from "../assets/Images/chip.webp";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--dark);
  overflow: hidden;
  color: var(--white);
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  font-size: var(--fontBig);
  font-family: var(--fontS);

  background-image: linear-gradient(-180deg, var(--gradient));
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
`;

const glow = keyframes`
  0% {
    filter: drop-shadow(0 0 1.5rem rgba(50, 192, 253, 0.36));
  }
  50% {
    filter: drop-shadow(0 0 5rem rgba(50, 192, 253, 0.36));
  }
  100% {
    filter: drop-shadow(0 0 1.5rem rgba(50, 192, 253, 0.36));
  }
`;

const Processor = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 5s ease infinite;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 48em) {
    top: 30%;
    display: block; 
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0.2rem 0rem;
    padding-left: 2rem;
  }

  font-family: var(--fontP);

  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;

const ProcessorSection = () => {
  return (
    <Section>
      <Title>Custom Hybrid Processor</Title>
      <Processor>
        <img src={chip} alt="intel processor" />
      </Processor>
      <Text>
        <span>
          Inside the heart of the Gameboy Color beats a powerful engine, ticking
          at 8 MHz, bringing forth a speed reminiscent of the original Game Boy.
        </span>
        <span>
          Meet its brain, the Sharp Corporation LR35902, a unique fusion of
          Intel 8080 and Zilog Z80, adding that extra touch of magic to your
          gaming experience.
        </span>
      </Text>
    </Section>
  );
};

export default ProcessorSection;
