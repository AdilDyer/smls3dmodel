import React from "react";
import TransparentButton from "../UiComponents/TransparentButton";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="leftPart">
        <a href="/">
          <TransparentButton text={"HOME"}></TransparentButton>
        </a>
        <a href="#footer">
          <TransparentButton text={"CONTACT"}></TransparentButton>
        </a>
        <a href="https://www.youtube.com/">
          <TransparentButton text={"YOUTUBE"}></TransparentButton>
        </a>
        <a href="#homeModels">
          <TransparentButton text={"3D MODELS"}></TransparentButton>
        </a>
        <a href="#about">
          <TransparentButton text={"ABOUT"}></TransparentButton>
        </a>
        <TransparentButton text={"LOGIN"}></TransparentButton>
      </div>
      <div className="rightPart">
        <img
          src={
            "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1713022989/nfsu_1_otrxkf.png"
          }
        ></img>
      </div>
    </div>
  );
};

export default TopBar;
