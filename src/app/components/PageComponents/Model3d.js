// import React from "react";
// import { useGLTF } from "@react-three/drei";
// let urlLink = "";
// const Model3d = ({ url }) => {
//   urlLink = url;
//   const { nodes, materials } = useGLTF(url);
//   return (
//     <group dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.mesh_0.geometry}
//         material={nodes.mesh_0.material}
//       >
//         <meshStandardMaterial color="white" attach="material" />
//       </mesh>
//     </group>
//   );
// };

// useGLTF.preload(urlLink);
// export default Model3d;

import React from "react";
import { useGLTF } from "@react-three/drei";

const Model3d = ({ url, color }) => {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      scale={10}
      onPointerOver={(e) => (
        e.stopPropagation(), e.object.material.color.set(color)
      )}
    />
  );
};

export default Model3d;
