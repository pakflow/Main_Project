import React, { useState } from "react";
import pattalogo from "../Icons/pattalogo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        position: "fixed",
        width: "100%",
        zIndex: 2,
      }}
    >
      <nav className="nav-active">
      <div>user</div>
      <div></div>
        <img className="icon_navbar nav-item" src={pattalogo} alt="patta" />
        <p className="nav-item all">
          All
          <div className="dropdown-menu drp_all">
            <p>ALL SHOES</p>
            <p>NEW</p>
            <p>HOME</p>
            <p>LIMITED EDITION</p>
            <p>HIGH</p>
            <p>MIDDLE</p>
            <p>LOW</p>
            <p>BRANDS</p>
            <p>HISTORIES</p>
            <p>ACCESSORIES</p>
          </div>
        </p>
        <p className="nav-item new">
          NEW
          <div className="dropdown-menu drp_new">
            <p>SHOES</p>
            <p>COLLECTIONS</p>
            <p>COLLABORATIONS</p>
            <p>TECHNOLOGIES</p>
            <p>HIGH</p>
            <p>MIDDLE</p>
            <p>LOW</p>
            <p>BRANDS</p>
            <p>ACCESSORIES</p>
            <p>SNEAKERNEWS</p>
          </div>
        </p>
        <p className="nav-item">COMING SOON</p>
        <p className="nav-item">BRANDS</p>
        <p className="nav-item">SALES</p>
      </nav>
    </div>
  );
};

export default Header;
