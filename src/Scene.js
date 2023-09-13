import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sky } from "@react-three/drei";
import "./App.css";
import Ocean from "./Ocean";
import { Wave } from "./Wave";
import Grass from "./Grass";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";

export function Scene(props) {
  return (
    <Canvas camera={{ fov: 12, position: [-400, 150, 0] }}>
      <Suspense maxDuration={5000} fallback={null}>
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 10, 10]} />
        <pointLight position={[-10, 10, -10]} />
        <pointLight position={[-10, -10, -10]} />
        <pointLight position={[10, -10, 10]} />
        {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}

        {/* <Sky /> */}
        <Sky
          sunPosition={[-3200, 2, -10000]}
          inclination={2.98}
          azimuth={0.23}
          mieDirectionalG={1.2}
          mieCoefficient={0}
          rayleigh={0.6}
          turbidity={100}
        />
        {/* <Sky sunPosition={[100, 20, 100]} inclination={0} azimuth={0.25} /> */}

        {/* <group
          transform
          // scale={[2, 2 , 2]}
          position={[0, -8, -3.5]}
        > */}
        {/* <Grass /> */}
        <Ocean />
        {/* </group> */}
        {/* <Wave file={[require("./posters/elaine.jpg")]} position={[0, 0, 0]} planeGeometryArgs={[0.4, 0.4 * (8 / 5), 16, 16]} />
        <Wave file={[require("./posters/elaine2.jpg")]} position={[0.65, 0, 0]} planeGeometryArgs={[0.5, 0.5 * (8 / 5), 16, 16]} />
        <Wave file={[require("./posters/elaine3.jpg")]} position={[-0.65, 0, 0]} planeGeometryArgs={[0.6, 0.6 * (8 / 5), 16, 16]} /> */}

        <group transform scale={[10, 10, 10]} position={[0, 3.5, -1.5]}>
          {props.allPhotos.map((item, index) => (
            <Wave
              key={index}
              file={item.file}
              position={[Math.random() * 10 - 2.5, Math.random() * 4, Math.random()]}
              planeGeometryArgs={[0.6, 0.6, 16, 16]}
            />
          ))}
        </group>

        {/* 
        //TODO:
        // make positioning of photos better so scattered across page
        */}

        {/* <Html position={[0.1, -0.35, 0]} scale={(0.1, 0.1, 0.1)} color="black">
          <a href="https://tinyurl.com/elainePHD">RSVP</a>
        </Html> */}
        {/* <Html position={[0.24, 0.5, 0]} scale={(0.1, 0.1, 0.1)} color="black">
          <p> * ‧̍̊˙· 𓆝.° </p>
        </Html>
        <Html position={[-0.3, 0, 0]} scale={(0.1, 0.1, 0.1)} color="black">
          <p> ｡˚𓆛˚｡ °.𓆞 ·˙‧̍̊</p>
        </Html> */}
        {/* <Html position={[-0.31, 0.5, 0]} scale={(0.1, 0.1, 0.1)} color="black">
          <a href="https://tinyurl.com/elainePHD">RSVP</a>
        </Html> */}
        {/* <Html position={[0.3, 0, 0]} scale={(0.1, 0.1, 0.1)} color="black">
          <a href="https://tinyurl.com/elainePHD">RSVP</a>
        </Html> */}
        {/* <OrbitControls minDistance={400} maxDistance={1000} /> */}

        <EffectComposer>
          <Pixelation granularity={5} />
        </EffectComposer>

        <OrbitControls
          enablePan={false}
          minDistance={100}
          maxDistance={500}
          maxAzimuthAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 3}
          minPolarAngle={Math.PI / 6}
        />
      </Suspense>
    </Canvas>
  );
}
