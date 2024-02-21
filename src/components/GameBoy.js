import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../assets/3dmodeljsx/Gameboy";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const GameBoy = () => {
  return (
    <Container id="gameboy-model">
      <Canvas>
        <ambientLight intensity={2.5} />
        <directionalLight position={[1, 1, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default GameBoy;
