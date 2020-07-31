import React from 'react';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import NavbarPage from './components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarPage />
     <Carrousel />
     <Header />


     
    
    </div>
  );
}

export default App;
