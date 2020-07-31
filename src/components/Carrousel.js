import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carrousel1 from '../src/img/carrousel1.png';
import Carrousel2 from '../src/img/carrousel2.png';
import Carrousel3 from '../src/img/carrousel3.png';
import './style.css';

 const Carrousel = () => {

    
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      



    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carusel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrousel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrousel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel
