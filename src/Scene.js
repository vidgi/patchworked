import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import "./App.css";
import { Wave } from "./Wave";
import Grass from "./Grass";
import { EffectComposer } from "@react-three/postprocessing";
import { DepthOfField } from "@react-three/postprocessing";

export function Scene(props) {
  return (
    <Canvas camera={{ fov: 12, position: [-100, 10, 0] }}>
      <Suspense maxDuration={5000} fallback={null}>
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 10, 10]} />

        <Sky sunPosition={[100, 20, 100]} inclination={0} azimuth={0.25} />

        <group transform scale={[2, 2, 2]} position={[0, -12, -20]}>
          <Grass />
        </group>

        <group transform position={[0, 4, 0]} rotation={[0, -Math.PI / 3, 0]} scale={[20, 20, 20]} onClick={props.onClick}>
          <Wave file={props.selectedPhoto.file} planeGeometryArgs={[0.6, 0.6, 16, 16]} />
        </group>

        <EffectComposer>
          <DepthOfField
            focusDistance={0.12} // where to focus
            focalLength={0.14} // focal length
            bokehScale={10} // bokeh size
          />
        </EffectComposer>

        <OrbitControls
          enablePan={false}
          minDistance={100}
          maxDistance={140}
          maxAzimuthAngle={Math.PI / 10}
          maxPolarAngle={Math.PI / 2.15}
          minAzimuthAngle={-Math.PI / 2}
          minPolarAngle={Math.PI / 3.2}
        />
      </Suspense>
    </Canvas>
  );
}
