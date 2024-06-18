import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Header />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/">
        <li>Retourner sur la page d'accueil</li>
      </NavLink>
      <Footer />
    </div>
  );
};

export default Error;
