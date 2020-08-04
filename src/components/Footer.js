import React from "react";
import "./Style.css";
import Image from "react-bootstrap/Image";
import Logo from "../Assets/img/logo1.png";
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col>
            <Image src={Logo} className="logoFooter" rounded />
          </Col>
          <Col>
          <div className="redes">
            
            <div className="facebook">
              <a
                href="https://www.facebook.com/bblandiabolsos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png"
                  className="iconos"
                  alt="logo"
                />
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://instagram.com/bblandiabolsos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://es.logodownload.org/wp-content/uploads/2018/10/instagram-logo1.png"
                  className="iconos"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          

          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Footer;
