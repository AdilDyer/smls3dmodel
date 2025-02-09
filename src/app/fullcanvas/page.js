"use client";
import React from "react";
import FullCanvas from "../components/FullCanvas";

const StickyLogo = () => {
  return (
    <div className="stickyLogo fixed bottom-8 left-8 rounded-xl w-60 p-8 h-20 flex justify-center items-center z-50 bg-neutral-200 cursor-pointer">
      <img
        src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1713022989/nfsu_1_otrxkf.png"
        alt="NFSU Logo"
      ></img>
    </div>
  );
};
const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <a href="/">
        <StickyLogo></StickyLogo>
      </a>
      <FullCanvas></FullCanvas>
    </div>
  );
};

export default Home;
