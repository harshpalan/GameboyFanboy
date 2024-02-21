import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";


export default function Model2(props) {
  const { nodes, materials } = useGLTF("/3dmodel/gameboycolor.glb");
  let camera = useThree((state) => state.camera);
    
  useLayoutEffect(() => {
        let mm = gsap.matchMedia();
  
    mm.add({
      isDesktop: `(min-width: 48em)`,
      isMobile: `(max-width:48em`,
    }, (context) => {
      let { isDesktop, isMobile } = context.conditions;


      if (isMobile) {
        camera.fov = 3;
        camera.updateProjectionMatrix();
      }
    });

    

  }, []);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.568, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_1.geometry}
          material={materials["Cheap_Toy_Plastic.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_4.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_5.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_6.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_7.geometry}
          material={materials["default.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_8.geometry}
          material={materials.Black_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_9.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_10.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_11.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_12.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_Cheap_Toy_Plastic003_0_13.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3dmodel/gameboycolor.glb");
