import React from "react";
import OpaqueButton from "./UiComponents/OpaqueButton";
import TransparentButton from "./UiComponents/TransparentButton";

import { Canvas } from "@react-three/fiber";
import Model3d from "./PageComponents/Model3d";
import { OrbitControls } from "@react-three/drei";
const ModelPage = () => {
  return (
    <div className="modelPage">
      <div className="title">
        <p>Denture Mandible Maxillary Defect Model</p>
      </div>
      <div className="modelDescWindow">
        <div className="modelDescNonText">
          <div className="modelDesc3dModel">
            <Canvas
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
                intensity={1}
                color="white"
                castShadow
              />
              <directionalLight
                position={[5, -5, 5]}
                intensity={1}
                color="white"
                castShadow
              />

              <ambientLight intensity={1} color="#ffffff" />
              <directionalLight position={[-5, 5, 5]} />
              <Model3d url="/denture.gltf"></Model3d>
            </Canvas>
          </div>
          <div className="buttons">
            <OpaqueButton text={"Full Screen ⛶"}></OpaqueButton>
            <OpaqueButton text={"Download 🔽 "}></OpaqueButton>
          </div>
          <div className="modelDescMetadata">
            <div className="heading">
              <p>Details:</p>
            </div>
            <hr />
            <div className="detailsTable">
              <div className="row">
                <div className="colFirst">Date: </div>
                <div className="colSecond">17-12-2024</div>
              </div>
              <div className="row">
                <div className="colFirst">Category:</div>
                <div className="colSecond">
                  <OpaqueButton text={"Liver"} />
                  <OpaqueButton text={"Heart"} />
                  <OpaqueButton text={"Kidney"} />
                  <OpaqueButton text={"Brain"} />
                </div>
              </div>
              <div className="row">
                <div className="colFirst">Description:</div>
                <div className="colSecond">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, temporibus sed! Minus, alias officia. Consectetur
                  quae dicta nemo, eaque tenetur maiores amet quia ducimus
                  lakjsd.
                </div>
              </div>

              <div className="row">
                <div className="colFirst">Highlights:</div>
                <div className="colSecond">
                  <ol>
                    <li>&bull; One thing</li>
                    <li>&bull; Other thing</li>
                    <li>&bull; One more thing</li>
                  </ol>
                </div>
              </div>
              <div className="row">
                <div className="colFirst">Model Dimensions:</div>
                <div className="colSecond">
                  <ul>
                    <li>Length: 10cm</li>
                    <li>Width: 5cm</li>
                    <li>Height: 15cm</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="colFirst">Comments:</div>
                <div className="colSecond">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="row">
                <div className="colFirst">Resource Links:</div>
                <div className="colSecond"> See all Resources &#128279;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="modelDescText">
          <strong>1. Introduction</strong>
          <p>
            Overview: A <a href="/">fractured jaw</a>, or mandibular fracture,
            is one of the most common facial injuries encountered in forensic
            and medical fields. Understanding its causes, implications, and
            treatment options is crucial for medico-legal investigations and
            patient care.
          </p>
          <p>
            Importance in Forensics: In forensic scenarios, a fractured jaw
            often provides critical evidence in cases of assault, accidents, or
            abuse. It aids in reconstructing the sequence of events leading to
            the injury.
          </p>
          <hr />
          <strong>2. Anatomy of the Jaw Mandibular Structure:</strong>
          <p>
            The{" "}
            <a href="https://en.wikipedia.org/wiki/Mandibular_fracture">
              mandible
            </a>
            , or lower jawbone, is the largest and strongest bone in the face.
            It consists of: Body: The horizontal portion housing the teeth.
            Ramus: The vertical portion connecting to the skull at the
            temporomandibular joint (TMJ). Condyle: The rounded end articulating
            with the temporal bone. Coronoid Process: A projection serving as an
            attachment for muscles. Blood Supply and Nerves: Supplied by the
            mandibular branch of the maxillary artery. Innervated by the
            inferior alveolar nerve, a branch of the
            <a href="https://en.wikipedia.org/wiki/Mandibular_nerve">
              mandibular nerve
            </a>
            .
          </p>
          <hr />
          <img
            src="https://media.faro.com/-/media/Project/FARO/FARO/FARO/Images/Resources/2021/01/15/22/30/forensic-ls.jpg?rev=7e127aabf38142d39cc920f13543c75f"
            alt=""
            style={{ width: "100%" }}
          />
          3. Types of Jaw Fractures Based on Location: Body Fracture: Affects
          the horizontal portion, often involving the teeth. Ramus Fracture:
          Rare, involving the vertical arm. Condylar Fracture: Can disrupt the
          TMJ and cause alignment issues. Angle Fracture: Occurs at the junction
          of the body and ramus. Based on Severity: Simple Fracture: Bone breaks
          cleanly without piercing the skin. Compound Fracture: <br /> <br />
          The bone pierces the skin or oral mucosa. Comminuted Fracture: Bone
          fragments into multiple pieces. Forensic Implications: Compound or
          comminuted fractures often suggest high-impact trauma, such as assault
          or vehicular accidents.
          <hr />
          <img
            src="https://media2.giphy.com/media/yxqaBtV0fy81jqf0X5/200w.gif?cid=6c09b952toxyparn56vzd461kw2d981xf0wg45ywxmma8cka&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt=""
            style={{ width: "100%" }}
          />
          4. Causes of Jaw Fractures Traumatic Causes: Blunt Force Trauma:
          Common in cases of assault or physical altercations. Vehicular
          Accidents: High-speed collisions often result in severe facial
          injuries. Falls: Particularly in the elderly or intoxicated
          individuals. Pathological Causes: Osteoporosis: Weakens the bone
          structure. Tumors: Bone malignancies may predispose the jaw to
          fractures. Infections: Osteomyelitis can weaken the mandible.
          <hr />
          5. Diagnosing a Broken Jaw Clinical Examination: Symptoms: Pain and
          swelling in the jaw area. Difficulty in opening or closing the mouth.
          Malocclusion (misalignment of teeth). Bruising or deformity around the
          jawline. Signs: Crepitus (grating sound) during movement. Numbness due
          to nerve damage. Imaging Techniques: X-rays: Provide a two-dimensional
          view of the fracture. CT Scans: Offer detailed three-dimensional
          imaging, crucial for complex fractures. 3D Reconstruction: Enhances
          understanding of fracture patterns, especially useful in
          medico-forensic analysis.
          <hr />
          6. Treatment Options Non-Surgical Management: Maxillomandibular
          Fixation (MMF): Using wires or elastic bands to immobilize the jaw.
          Common for simple fractures. Surgical Intervention: Open Reduction and
          Internal Fixation (ORIF): Plates and screws are used to stabilize the
          fracture. Ideal for comminuted or displaced fractures. Bone Grafts:
          Necessary for severe bone loss or infection. Rehabilitation:
          Physiotherapy to restore jaw function. Nutritional support through a
          liquid or soft diet.
          <hr />
          <img
            src="https://pub.mdpi-res.com/healthcare/healthcare-09-01545/article_deploy/html/images/healthcare-09-01545-ag.png?1638240605"
            alt=""
            style={{ width: "100%" }}
          />
          7. Medico-Forensic Significance Evidence in Legal Cases: Jaw fractures
          can indicate the nature and direction of force applied. Patterns of
          injury can differentiate between accidental and intentional trauma.
          Associated injuries, such as bruising or abrasions, help reconstruct
          the timeline of events. Age Estimation: The healing process of
          fractures can be used to estimate the time of injury. Bone density and
          structure assist in determining the age of individuals. DNA
          Collection: In compound fractures, bone fragments may preserve DNA for
          identification.
          <hr />
          8. Interactive 3D Model Features: Rotate and zoom into the model to
          explore fracture locations. Highlight specific areas such as the
          condyle or ramus. Overlay soft tissue and blood vessel mapping for a
          holistic view. Educational Value: Ideal for medical students, forensic
          experts, and legal professionals. Allows better understanding of
          real-world cases.
          <hr />
          9. Preventive Measures Personal Safety: Wearing protective gear during
          sports or high-risk activities. Ensuring proper safety restraints in
          vehicles. Community Awareness: Campaigns against domestic violence and
          physical abuse. Healthcare Access: Early diagnosis and treatment of
          bone conditions.
          <hr />
          Example Layout for the Webpage Section Description Introduction
          Provides a brief overview of jaw fractures and their forensic
          relevance. Anatomy of the Jaw Detailed explanation of jaw structure
          and its significance. Types of Fractures Categorizes fractures based
          on location and severity. Causes Lists traumatic and pathological
          causes. Diagnostics Outlines clinical symptoms and imaging techniques.
          Treatment Options Covers surgical and non-surgical treatments.
          Forensic Significance Highlights medico-legal importance in injury
          analysis. Interactive 3D Model Describes features of the model and its
          educational value. Preventive Measures Suggests ways to reduce the
          risk of jaw fractures.
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
