import React from 'react';
import Home from '../sections/Home';
import Nav from '../sections/Nav';
import QuemSomos from '../sections/Quemsomos';
import SaibaMais from '../sections/SaibaMais';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SaibaMais />
      <hr></hr>
      <QuemSomos />
     
      
      
      {/* Outros componentes da sua landing page */}
    </div>
  );
}

export default App;