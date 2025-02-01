import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="footerBrandDiv">
              <Footer.Brand
                className="footerBrand"
                href="/"
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1713022989/nfsu1_w88qok.png"
                name="School of Medico-Legal Studies National Forensic Sciences University"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title style={{ color: "#000" }} title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#about">About Us</Footer.Link>
                  <Footer.Link href="https://nfsu.ac.in/">
                    NFSU Academics
                  </Footer.Link>
                  <Footer.Link href="/">Home</Footer.Link>
                  <Footer.Link href="#homeModels">Browse Models</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title style={{ color: "#000" }} title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title style={{ color: "#000" }} title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              style={{
                color: "midnightblue",
              }}
              href="https://www.linkedin.com/in/adildyer/"
              by="SMLS, NFSU. All Rights Reserved. Designed and Developed with &hearts; by Adil Dyer."
              year={2025}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                style={{ color: "#1877F2" }}
                icon={BsFacebook}
              />
              <Footer.Icon
                href="#"
                style={{ color: "#FD1D1D" }}
                icon={BsInstagram}
              />
              <Footer.Icon href="#" style={{ color: "#000" }} icon={BsGithub} />
              <Footer.Icon
                href="#"
                style={{ color: "#ea4c89" }}
                icon={BsDribbble}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;
