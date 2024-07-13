import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Model } from "./Model";

export function MyAnimatedBox() {
  const myMesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (myMesh.current) {
      myMesh.current.rotation.y = clock.getElapsedTime();
      // myMesh.current.rotation.x = 10;
    }
  });

  return (
    <mesh ref={myMesh}>
      {/* <boxGeometry />
      <meshBasicMaterial color="royalblue" /> */}
      <Model />
    </mesh>
  );
}
