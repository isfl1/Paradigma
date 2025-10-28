import React from "react";
import quemsomos from "../assets/quemsomo.png";
import "../styles/QuemSomos.css";

const QuemSomos: React.FC = () => {
  return (
    <section className="quem-somos-section">
      {/* Imagem */}
      <div className="quem-somos-imagem-container">
        <img src={quemsomos} alt="logo" className="logo-img" />
      </div>

      {/* Texto */}
      <div className="quem-somos-texto-container">
        <h2 className="quem-somos-titulo">
          Quem somos
        </h2>
        <p className="quem-somos-paragrafo">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
          tincidunt molestie, massa nunc varius arcu, ac scelerisque elit erat et
          magna. Donec quis erat et libero ultrices mollis. In hac habitasse platea
          dictumst. Vivamus vehicula leo dui, at porta nisl facilisis finibus.
          In euismod augue vitae nisi ultrices, non aliquet urna tincidunt. Integer
          in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis
          est, finibus et nisl ac, hendrerit venenatis libero. Donec consectetur
          faucibus ipsum id gravida.
        </p>
      </div>
    </section>
  );
};

export default QuemSomos;