import React from "react";
import logo from "../Pics/logo.png";
import "./header.css";

function Header({ className }) {
  return (
    <header className={className}>
      <img src={logo} alt="logo" className="logo" />
      <h1>Upcycle</h1>
      <p>Upcycling for a better tomorrow</p>
    </header>
  );
}

export default Header;
