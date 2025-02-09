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
  const [environment, setEnvironment] = useState("park");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

   const MenuButton = () => {
     return (
       <div
         onClick={handleMenuClick}
         className="menuButton"
         style={{
           position: "fixed",
           top: "20px",
           right: "20px",
           width: "50px",
           height: "50px",
           borderRadius: ".8rem",
           backgroundColor: "white",
           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           cursor: "pointer",
           zIndex: "100",
         }}
       >
         <div className="menuButtonInner">
           <div className="menuButtonIcon">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="feather feather-menu"
             >
               <line x1="3" y1="12" x2="21" y2="12"></line>
               <line x1="3" y1="6" x2="21" y2="6"></line>
               <line x1="3" y1="18" x2="21" y2="18"></line>
             </svg>
           </div>
         </div>
       </div>
     );
   };

  return (
    <div className="fullCanvas">
      <Canvas
        className="canvas"
        camera={{
          position: [0, 0, 140], // Adjust the camera's default position for better zoom
          fov: 40, // Field of View: lower values make the model appear larger
        }}
      >
        <OrbitControls
          target={[0, 20, 0]} // Focus the camera on the model's center
        ></OrbitControls>
        <directionalLight
          position={[5, 5, 5]}
          intensity={lightIntensity}
          color={lightColor}
          castShadow
        />
        <directionalLight
          position={[5, -5, 5]}
          intensity={1}
          color="white"
          castShadow
        />

        {/* <ambientLight intensity={.1} color="#ffffff" /> */}
        <ambientLight intensity={0.5} color={lightColor} />
        <directionalLight position={[-5, 5, 5]} />

        {environment === "white" ? (
          <color attach="background" args={["white"]} />
        ) : environment === "black" ? (
          <color attach="background" args={["black"]} />
        ) : (
          <Environment preset={environment} background />
        )}

        <Model3d url="/denture.gltf" color={modelColor} />
      </Canvas>
      <MenuButton></MenuButton>
      <div
        // className="rightPart"
        className={`rightPart ${isMenuOpen ? "block" : "hidden"}`}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="rightPartInner">
          <h2 className="text-lg font-semibold mb-3">Customize Model View</h2>
          <br />
          {/* Light Intensity Slider */}

          <label className="block text-sm mb-1">
            Light Intensity ({lightIntensity})
          </label>
          <RangeSlider
            min={0}
            max={3}
            step={0.1}
            value={lightIntensity} // Make it controlled
            sizing="sm"
            onChange={(e) => setLightIntensity(parseFloat(e.target.value))} // Correct event handling
          />

          {/* Light Color Picker */}
          <label className="block text-sm mt-3">Light Color</label>
          <input
            type="color"
            value={lightColor}
            onChange={(e) => setLightColor(e.target.value)}
            className="w-full p-1 mt-1 rounded-md h-14 bg-white"
          />

          {/* Model Color Picker */}
          <label className="block text-sm mt-3">Model Color</label>
          <input
            type="color"
            value={modelColor}
            onChange={(e) => setModelColor(e.target.value)}
            className="w-full p-1 mt-1 rounded-md h-14 bg-white"
          />

          {/* Environment Selection */}
          <label className="block text-sm mt-3">Environment</label>
          <Select
            defaultValue={environment}
            onChange={(e) => setEnvironment(e.target.value)}
          >
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="park">Park</option>
            <option value="night">Night</option>
            <option value="lobby">Lobby</option>
            <option value="dawn">Dawn</option>
            <option value="city">City</option>
            <option value="apartment">Apartment</option>
            <option value="sunset">Sunset</option>
            <option value="studio">Studio</option>
            <option value="forest">Forest</option>
            <option value="warehouse">Warehouse</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FullCanvas;
