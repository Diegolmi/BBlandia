import React from 'react';
import Globo from '../Assets/img/globoynubes.png'
import './Style.css';

const Header = () => {
    return (
        <div>
            <img src={Globo}
            className="globoynubes" 
            alt="#"/>
        </div>
    )
}

export default Header
