import React from 'react';
import Carrousel from './components/Carrousel';
//import Header from './components/Header';
import Section from './components/Section'
import NavbarPage from './components/Nav';
import CardsEcommerce from './components/CardsEcommerce';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Style.css';

function App() {
  return (
    <>
    <NavbarPage />
    <div className="App">
      
     <Carrousel />
     {/*<Header />*/}
     <Section />
     <CardsEcommerce />



     
    
    </div>
    </>
  );
}

export default App;
