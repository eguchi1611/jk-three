"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Controllers, Hands, VRButton, XR } from "@react-three/xr";
import { MyAnimatedBox } from "./MyAnimatedBox";

export function MyStage() {
  return (
    <div id="canvas-container" style={{ height: "100vh" }}>
      <VRButton />
      <Canvas>
        <Stage preset="rembrandt" intensity={1} environment="city">
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <XR>
            <Controllers />
            <Hands />
            <mesh>
              <MyAnimatedBox />
            </mesh>
          </XR>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Stage>
      </Canvas>
    </div>
  );
}
