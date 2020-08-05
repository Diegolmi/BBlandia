import React from 'react';
import Quienes from '../Assets/img/quienesSomos2.png'
import Familia from '../Assets/img/familia.jpg';
    
import './Style.css';
 const About = () => {
    return (
        <>
        <div >
            <img src={Quienes} alt="" className="quien" />
            <img src={Familia} alt="" md={{ span: 6, offset: 3 }} className="familia" />
        </div>
        <div>
            <p> Hola!! <br />
            Te cuento un poco de nosotros!!<br />
            Somos una familia que vivimos en San Miguel de Tucuman, Diego, Naty, Nacho y Benicio.
            Siempre nos caracterizamos por ser super emprendedores. <br />
            Hace un poquito mas de 3 años cuando estaba en reposo absoluto embarazada de Beni, se me ocurrio
            armar algo para vender articulos para bebes y mamás. <br />
            Comence vendiendo bolsos maternales de unas chicas de Buenos Aires que estaban increibles.<br /> 
            Ya con el nacimiento de Beni decidi incursionar tambien en la ropita para los bebés. <br />
            Asi fue como de a poco fui poniendo cada dia mas prendas.   
            </p>

        </div>
        </>
    )
}

export default About