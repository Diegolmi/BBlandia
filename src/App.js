import React from 'react';
import Carrousel from './components/Carrousel';
//import Header from './components/Header';
import Section from './components/Section'
import NavbarPage from './components/Nav';
import CardsEcommerce from './components/CardsEcommerce';
import Footer from './components/Footer';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Style.css';
import Alerta from './components/Alerta';

function App() {
  return (
    <>
    
    <div className="App">
      <Alerta />
    <NavbarPage />
     <Carrousel />
     {/*<Header />*/}
     <Section />
     <CardsEcommerce />
     <About />

     

    </div>
    <Footer />
    </>
  );
}

export default App;
