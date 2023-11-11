import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import "./App.css";
import { Wave } from "./Wave";
import Grass from "./Grass";
import { EffectComposer } from "@react-three/postprocessing";
import { DepthOfField } from "@react-three/postprocessing";

import { Model } from "./Model";
// import pallu from "./patch-500/patch-517.jpg";

export function Scene(props) {
  const palluTexture = [require("./patch-500/patch-517.jpg")];
  const sareeTexture = [require("./resources/Saree.png")];

  // const palluTexture = [require("./resources/Pallu.png")];
  // const sareeTexture = [require("./resources/Saree.png")];

  return (
    <Canvas camera={{ fov: 12, position: [-100, 10, 0] }}>
      <Suspense maxDuration={5000} fallback={null}>
        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 10, 10]} />
        <pointLight position={[-10, 10, -10]} />
        <pointLight position={[-10, -10, -10]} />
        <pointLight position={[10, -10, 10]} />
        <Sky sunPosition={[100, 20, 100]} inclination={0} azimuth={0.25} />

        <group transform scale={[2, 2, 2]} position={[0, -12, -20]}>
          <Grass />
        </group>

        {props.isSariMode ? (
          <>
            <group transform position={[-15, 4, -5]} rotation={[0, -Math.PI / 3, 0]} scale={[20, 20, 20]} onClick={props.onClick}>
              {/* <Wave file={props.selectedPhoto.file} planeGeometryArgs={[0.6, 0.6, 16, 16]} /> */}
              <Wave file={palluTexture} planeGeometryArgs={[0.6, 0.6, 16, 16]} />
            </group>

            <group transform position={[5, 4, 5]} rotation={[0, -Math.PI / 3, 0]} scale={[20, 20, 20]} onClick={props.onClick}>
              {/* <Wave file={props.selectedPhoto.file} planeGeometryArgs={[0.6, 0.6, 16, 16]} /> */}
              <Wave file={sareeTexture} planeGeometryArgs={[0.6, 0.6, 16, 16]} />
            </group>
            {/* <EffectComposer>
              <DepthOfField
                focusDistance={1} // where to focus
                focalLength={10} // focal length
                bokehScale={20} // bokeh size
              />
            </EffectComposer> */}
          </>
        ) : (
          <>
            <group transform rotation={[0, -Math.PI / 2.5, 0]} scale={[15, 15, 15]} position={[0, -10, 0]}>
              <Model />
            </group>
          </>
        )}

        <OrbitControls
          enablePan={false}
          minDistance={150}
          maxDistance={400}
          maxAzimuthAngle={Math.PI / 7}
          maxPolarAngle={Math.PI / 2.15}
          minAzimuthAngle={-Math.PI / 1.8}
          minPolarAngle={Math.PI / 3.2}
        />
      </Suspense>
    </Canvas>
  );
}
