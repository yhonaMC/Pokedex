import React from "react";
import logo from "../../assets/img/logo.png";
const Header = () => {
  return (
    <header className="container-header mb-5 col-xs-12 col-lg-12">
      <div>
        <div className="text-center">
          <img title="logo-pokedex" alt="logo-pokedex" src={logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
