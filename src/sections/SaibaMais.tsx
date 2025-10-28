import React from "react";
import saibaMais from "../assets/image.png";
import "../styles/SaibaMais.css";

const QuemSomos: React.FC = () => {
  return (
    <section className="Saiba-mais-section">
      {/* Imagem */}
      
      <div className="saiba-mais-imagem-container">
        <img src={saibaMais} alt="logo" className="logo-img" />
      </div>

      {/* Texto */}
      <div className="saiba-mais-texto-container">
        <h2 className="saiba-mais-titulo">
          Seja mais tecnologico e crie um melhor ecossistema de trabalho.
        </h2>
        <p className="saiba-mais-paragrafo">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
          tincidunt molestie, massa nunc varius arcu, ac scelerisque elit erat et
          magna. Donec quis erat et libero ultrices mollis. In hac habitasse platea
          dictumst. Vivamus vehicula leo dui, at porta nisl facilisis finibus.
          In euismod augue vitae nisi ultrices, non aliquet urna tincidunt. Integer
          in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis
          est, finibus et nisl ac, hendrerit venenatis libero. Donec consectetur
          faucibus ipsum id gravida.
        </p>
        <button className="Saiba-mais-button">

          Saiba Mais

        </button>

      </div>
    </section>
  );
};

export default QuemSomos;