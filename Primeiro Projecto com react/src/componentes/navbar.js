import React from "react";

const Navbar = () => {
  return (
    <header className="header" >
      <div className="headers">
        <a href="#" className="LOGO">
          React First
        </a>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
