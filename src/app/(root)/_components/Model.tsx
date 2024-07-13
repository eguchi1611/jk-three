import { useGLTF } from "@react-three/drei";

export function Model() {
  const gltf = useGLTF("/DiffuseTransmissionTeacup.glb");

  return <primitive object={gltf.scene} scale="20" />;
}
