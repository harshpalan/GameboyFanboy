import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import Model2 from "../assets/3dmodeljsx/Gameboy2";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: rgb(255, 69, 0, 0.25);
`;
const GameBoy = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(104, 104, 104, 0.3);
  padding: 0.5rem;
  border-radius: 30px;

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Color = styled.li`
  list-style: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;

  @media screen and (max-width: 64em) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--grey);
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  font-family: var(--fontR);
`;

const ColorSection = () => {
  const { materials } = useGLTF("/3dmodel/gameboycolor.glb");
  const sectionRef = useRef(null);
  materials.Body.color.set("#FF4500");
  materials["default.001"].color.set("#666666");

  let updateColor = (color, rgbColor) => {
    materials.Body.color.set(color);
    sectionRef.current.style.backgroundColor = `rgb(${rgbColor},0.25)`;
  };

  return (
    <Container>
      <Section ref={sectionRef}>
        <GameBoy>
          <IndicatorText>360&deg; &#x27F2; </IndicatorText>
          <Canvas camera={{ fov: 2 }}>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model2 />
            </Suspense>
            <Environment preset="apartment" intensity={1.7} />
            <OrbitControls enableZoom={false} />
          </Canvas>
          <Colors>
            <Colors>
              <Color
                color="#6A5ACD"
                onClick={() => updateColor("#6A5ACD", "106, 90, 205")}
              />
              <Color
                color="#FF4500"
                onClick={() => updateColor("#FF4500", "255, 69, 0")}
              />
              <Color
                color="#8B4789"
                onClick={() => updateColor("#8B4789", "139, 71, 137")}
              />
              <Color
                color="#FFD700"
                onClick={() => updateColor("#FFD700", "255, 215, 0")}
              />
              <Color
                color="#6F2DA8"
                onClick={() => updateColor("#6F2DA8", "111, 45, 168")}
              />
              <Color
                color="#39FF14"
                onClick={() => updateColor("#39FF14", "57, 255, 20")}
              />
              <Color
                color="#008080"
                onClick={() => updateColor("#008080", "0, 128, 128")}
              />
              <Color
                color="#B0E0E6"
                onClick={() => updateColor("#B0E0E6", "176, 224, 230")}
              />
              <Color
                color="#8F9474"
                onClick={() => updateColor("#8F9474", "143, 148, 116")}
              />
              <Color
                color="#FFFFFF"
                onClick={() => updateColor("#FFFFFF", "255, 255, 255")}
              />
              <Color
                color="#000000"
                onClick={() => updateColor("#000000", "0, 0, 0")}
              />
            </Colors>
          </Colors>
        </GameBoy>
        <ButtonContainer>
          <Btn href="#">Back to Top &nbsp; &#x2191;</Btn>
        </ButtonContainer>
      </Section>
    </Container>
  );
};

export default ColorSection;
