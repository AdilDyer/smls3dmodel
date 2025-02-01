import React from "react";

const HeroContent = () => {
  return (
    <div className="heroContent">
      <div className="leftPart">
        <p style={{ fontStyle: "italic" }}>Greetings from, </p>
        <br />
        <h1 className="heroTitle">
          <strong>
            The School Of <br />
            Medico-Legal <br />
            Studies
          </strong>
        </h1>
        <p className="heroSubTitle">
          <img
            src={
              "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1713022989/nfsu1_w88qok.png"
            }
          ></img>{" "}
          <strong>National Forensic Sciences University</strong>
        </p>
        <p className="heroDesc">
          The School of Medico-Legal Studies (SMLS) at National Forensic
          Sciences University (NFSU) focuses on the intersection of medicine and
          law, offering specialized programs in forensic medicine, medical
          jurisprudence, and healthcare law. It plays a crucial role in training
          professionals in forensic pathology, toxicology, and legal medicine,
          equipping them with expertise to assist in criminal investigations,
          legal proceedings, and policy-making. The school collaborates with law
          enforcement, judiciary, and healthcare institutions to bridge the gap
          between medical science and the justice system.
        </p>
      </div>
      <div className="rightPart">
        {/* <img
          src={
            "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1711016540/NFSU_10_Upper_Auditorium_asamvx.jpg"
          }
        ></img> */}
        <video
          src="https://res.cloudinary.com/ddxv0iwcs/video/upload/v1706865013/samples/sea-turtle.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default HeroContent;
