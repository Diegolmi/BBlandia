import React from "react";
import "./Style.css";
import Image from "react-bootstrap/Image";
import Logo from "../Assets/img/logo1.png";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col>
            <Image src={Logo} className="logoFooter" rounded />
          </Col>
          <Col className="nTitulo">
            <h3> Nuestras redes sociales</h3>

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
          <Col>
            <div
              id="map-container-fluid"
              className="mapa rounded z-depth-1-half map-container"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4201645258413!2d-65.20747548574539!3d-26.82658538316473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1728bd972b%3A0xbe945287c822a09a!2sPcia%20de%20C%C3%B3rdoba%20601%2C%20T4000DGM%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1596644748477!5m2!1ses!2sar"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
