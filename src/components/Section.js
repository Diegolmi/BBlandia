import React from 'react';
//import banner from '../Assets/img/cta_bg.png';
import Globo from '../Assets/img/globoynubes.png';
import { Animated } from "react-animated-css";

import { Container, Row, Col } from 'react-bootstrap';
import './Style.css';

const Section = () => {
    return (

        <Container fluid>
            <Row>
                <Col xs={6} md={4} style={{ width: '18rem' }}>
                    <div className="card">
                        <div className="foto1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                            <div className="content">
                                <h2>BBlandia</h2>
                                <p> Ropa para bebes y niños</p>
                                <a href="facebook.com/bblandiabolsos"> Click</a>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col xs={6} md={4} style={{ width: '18rem' }}>
                    <div className="card">
                        <div className="foto2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                                <h2>BBlandia</h2>
                                <p> Modelo Benicio</p>
                                <a href="facebook.com/bblandiabolsos"> Click</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4} style={{ width: '18rem' }}>
                    <div className="card">
                        <div className="foto3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                                <h2>BBlandia</h2>
                                <p> Ropa para bebes y niños</p>
                                <a href="facebook.com/bblandiabolsos"> Click</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4} style={{ width: '18rem' }}>
                    <div className="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                        <div className="content">
                            <h2>BBlandia</h2>
                            <p> Ropa para bebes y niños</p>
                            <a href="facebook.com/bblandiabolsos"> Click</a>
                        </div>

                    </div>
                </Col>
                <Col xs={6} md={4} style={{ width: '18rem' }}>
                    <div className="card">
                        <div className="foto5">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                                <h2>BBlandia</h2>
                                <p> Modelo Martina</p>
                                <a href="facebook.com/bblandiabolsos"> Click</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4} style={{ width: '18rem' }}>
                    <div className="card">
                        <div className="foto6">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                                <h2>BBlandia</h2>
                                <p> Modelo Ignacio</p>
                                <a href="facebook.com/bblandiabolsos"> Click</a>
                            </div>
                        </div>
                    </div>
                </Col>


            </Row>
            <Container>
                <Row>
                    <Col xs={6} md={4} style={{ width: '18rem' }}>
                        <div className="divisor">
                            <img src={Globo} alt="" className="globo" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Animated
                            animationIn="bounceInLeft"
                            animationInDuration={6000}
                            animationOut="fadeOut"
                            isVisible={true} >
                            <div>
                                <h3>Ventas por mayor y por menor  </h3>
                            </div>
                        </Animated>
                    </Col>
                </Row>
            </Container>

        </Container >


    )
}

export default Section
