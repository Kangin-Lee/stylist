import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const btns = ["HOME", "Color Match", "Weather", "OutFit"];
  return (
    <div className="footer">
      <Container className="footer-content">
        <div className="footer-text">
          <h1>Stylist</h1>
          <p>
            Stylist is a site that has most of the information related to
            fashion.
          </p>
          <p>So you don't have to look for information in multiple places.</p>
          <p>
            It is also a smart website that works with smart mirrors and apps.
          </p>
        </div>

        <div className="footer-icons">
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTiktok} />
          </span>
        </div>

        <div>
          {btns.map((menu) => (
            <button className="footer-btns">{menu}</button>
          ))}
        </div>

        <div className="copyright">
          <p>Copyright 2023. SmartStylist all right reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
