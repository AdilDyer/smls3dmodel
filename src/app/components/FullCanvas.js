// import React from "react";

// import { Canvas } from "@react-three/fiber";
// import Model3d from "./PageComponents/Model3d";
// import { OrbitControls } from "@react-three/drei";
// const FullCanvas = () => {
//   return (
//     <div className="fullCanvas">
//       <Canvas
//         className="canvas"
//         camera={{
//           position: [0, 0, 140], // Adjust the camera's default position for better zoom
//           fov: 40, // Field of View: lower values make the model appear larger
//         }}
//       >
//         <OrbitControls
//           target={[0, 20, 0]} // Focus the camera on the model's center
//         ></OrbitControls>
//         <directionalLight
//           position={[5, 5, 5]}
//           intensity={1}
//           color="white"
//           castShadow
//         />
//         <directionalLight
//           position={[5, -5, 5]}
//           intensity={1}
//           color="white"
//           castShadow
//         />

//         <ambientLight intensity={1} color="#ffffff" />
//         <directionalLight position={[-5, 5, 5]} />
//         <Model3d url="/denture.gltf"></Model3d>
//       </Canvas>
//     </div>
//   );
// };

// export default FullCanvas;

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model3d from "./PageComponents/Model3d";
import { OrbitControls, Environment } from "@react-three/drei";

import { Label, Select } from "flowbite-react";
import { RangeSlider } from "flowbite-react";

const FullCanvas = () => {
  // State hooks for customization
  const [lightIntensity, setLightIntensity] = useState(1);
  const [lightColor, setLightColor] = useState("#ffffff");
  const [modelColor, setModelColor] = useState("#ffffff");
  const [environment, setEnvironment] = useState("studio");

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* UI Controls for Light and Model Customization */}
      <div className="w-full max-w-md p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-3">Customize Model View</h2>

        {/* Light Intensity Slider */}
        <label className="block text-sm mb-1">
          Light Intensity ({lightIntensity})
        </label>
        <RangeSlider
          min={0}
          max={3}
          step={0.1}
          value={[lightIntensity]}
          onValueChange={(val) => setLightIntensity(val[0])}
        />

        {/* Light Color Picker */}
        <label className="block text-sm mt-3">Light Color</label>
        <input
          type="color"
          value={lightColor}
          onChange={(e) => setLightColor(e.target.value)}
          className="w-full p-1 mt-1 rounded-md"
        />

        {/* Model Color Picker */}
        <label className="block text-sm mt-3">Model Color</label>
        <input
          type="color"
          value={modelColor}
          onChange={(e) => setModelColor(e.target.value)}
          className="w-full p-1 mt-1 rounded-md"
        />

        {/* Environment Selection */}
        <label className="block text-sm mt-3">Environment</label>
        <Select onValueChange={setEnvironment} defaultValue={environment}>
          <option placeholder="Select Environment" />

          <option value="studio">Studio</option>
          <option value="sunset">Sunset</option>
          <option value="forest">Forest</option>
          <option value="warehouse">Warehouse</option>
        </Select>
      </div>

      {/* 3D Canvas */}
      <Canvas
        className="canvas border border-gray-600"
        camera={{ position: [0, 0, 140], fov: 40 }}
      >
        {/* Controls */}
        <OrbitControls target={[0, 20, 0]} />

        {/* Lights - Controlled via State */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={lightIntensity}
          color={lightColor}
          castShadow
        />
        <ambientLight intensity={0.5} color={lightColor} />

        {/* Environment Map - Changes based on selection */}
        <Environment preset={environment} background />

        {/* 3D Model with Dynamic Color */}
        <Model3d url="/denture.gltf" color={modelColor} />
      </Canvas>
    </div>
  );
};

export default FullCanvas;
