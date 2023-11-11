import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import figure from "./resources/sari-and-blouse-text.glb";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import blouse from "./resources/Blouse.png";
// import sari from "./resources/Saree.png";
// import pallu from "./resources/Pallu.png";
import pallu from "./patch-500/patch-500.jpg";
import sari from "./patch-500/patch-500.jpg";
import blouse from "./patch-500/patch-500.jpg";

import { OrbitControls, Sky, useGLTF, useTexture } from "@react-three/drei";

export const Model = () => {
  // const gltf = useLoader(GLTFLoader, figure);
  // console.log(gltf);
  const { scene, nodes, materials } = useGLTF(figure);
  // const texture = new THREE.TextureLoader().load("./resources/Blouse.png");
  // const material = new THREE.MeshBasicMaterial({ map: texture });
  const sariMap = useLoader(TextureLoader, sari);
  const palluMap = useLoader(TextureLoader, pallu);
  const blouseMap = useLoader(TextureLoader, blouse);

  console.log(nodes);

  return (
    <>
      {/* <group transform scale={2.5} rotation={[Math.PI / 2, 0, 0]} position={[-0.45, -0.3, -0.1]}> */}
      <mesh geometry={nodes["Blouse"].geometry} material={nodes["Blouse"].material}>
        <meshStandardMaterial map={blouseMap} attach="material" roughness={0.6} metalness={0.8} />
      </mesh>
      <mesh geometry={nodes["Blouse-Ties"].geometry} material={nodes["Blouse-Ties"].material}>
        <meshStandardMaterial map={blouseMap} attach="material" roughness={0.6} metalness={0.8} />
      </mesh>
      <mesh geometry={nodes["Saree_1"].geometry} material={nodes["Saree_1"].material}>
        <meshStandardMaterial map={palluMap} attach="material" roughness={0.6} metalness={0.8} />
      </mesh>
      <mesh geometry={nodes["Saree_2"].geometry} material={nodes["Saree_2"].material}>
        <meshStandardMaterial map={sariMap} attach="material" roughness={0.6} metalness={0.8} />
      </mesh>
      <mesh geometry={nodes["Saree_3"].geometry} material={nodes["Saree_3"].material}>
        <meshStandardMaterial map={sariMap} attach="material" roughness={0.6} metalness={0.8} />
      </mesh>
      {/* </group> */}
      {/* <primitive object={scene} scale={0.4} /> */}
    </>
  );
};
