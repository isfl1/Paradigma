import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import QuemSomos from './components/Quemsomos';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <QuemSomos />
      
      {/* Outros componentes da sua landing page */}
    </div>
  );
}

export default App;