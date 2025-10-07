import React from 'react';

import meuLogo from '../assets/image.png';


interface HomeProps {}


const Home: React.FC<HomeProps> = () => {

  return (

    <main className="landing-page-container">

      <div className="content-container">

        <h1>Transformando gestão em obra-prima.</h1>

        <p>Já pensou em alavancar sua empresa com métodos digitais?</p>

        <button className="register-button">

          Register

        </button>

      </div>

      <div className="image-container">

        <img src={meuLogo} alt="Descrição da imagem" />

      </div>

    </main>

  );

};


export default Home; 