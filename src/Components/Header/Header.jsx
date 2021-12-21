import React, { useState } from "react";
import pattalogo from "../Icons/pattalogo.svg";
import "./Header.css";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
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
      <nav
        className={showAll ? "nav-active" : ""}
      >
        <img
          className="icon_navbar nav-item"
          onMouseEnter={() => setShowAll(false)}
          src={pattalogo}
          alt="patta"
        />
        <p
          className={showAll ? "nav-item-active" : "nav-item all"}
          onMouseEnter={() => setShowAll(true)}
        >
          All
        </p>
        <p className="nav-item" onMouseEnter={() => setShowAll(false)}>
          NEW
        </p>
        <p className="nav-item">COMING SOON</p>
        <p className="nav-item">BRANDS</p>
        <p className="nav-item">SALES</p>
      </nav>
      <div>
        {showAll ? (
          <div onMouseLeave={() => setShowAll(false)} className="dropdown-menu">
            <p>ALL SHOES</p>
            <p>NEW</p>
            <p>SALES</p>
            <p>SPORT STYLE</p>
            <p>HIGH</p>
            <p>MIDDLE</p>
            <p>LOW</p>
            <p>BRANDS</p>
            <p>HISTORIES</p>
            <p>ABOUT US</p>
          </div>
        ) : null}
      </div>
      {/* <div>
        {showAll ? (
          <div onMouseLeave={() => setShowAll(false)} className="dropdown-menu">
            <p>ALL SHOES</p>
            <p>NEW</p>
            <p>SALES</p>
            <p>SPORT STYLE</p>
            <p>HIGH</p>
            <p>MIDDLE</p>
            <p>LOW</p>
            <p>BRANDS</p>
            <p>HISTORIES</p>
            <p>ABOUT US</p>
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default Header;
