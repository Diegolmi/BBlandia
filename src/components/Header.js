import React from 'react';
import Globo from '../src/img/globoynubes.png'
import './style.css';

const Header = () => {
    return (
        <div>
            <img src={Globo}
            classname="globoynubes" 
            alt="#"/>
        </div>
    )
}

export default Header
