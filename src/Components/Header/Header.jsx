import React, { useState } from "react";
import userlogo from "../Icons/userlogo.svg";
import favoritelogo from "../Icons/favoritelogo.svg";
import searchicon from "../Icons/searchicon.svg";
import "./Header.css";
import ModalAuth from "../ModalAuth/ModalAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModalAuth, setShowModalAuth] = useState(false);
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
      <ModalAuth
        showModalAuth={showModalAuth}
        setShowModalAuth={setShowModalAuth}
      />
      <nav className="nav-active">
        <div className="user-menu">
          <img
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            onClick={() => setShowModalAuth(!showModalAuth)}
            src={userlogo}
            alt="userlogo"
          />
          <img
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            src={favoritelogo}
            alt="favoritelogo"
          />
          <img
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
            src={searchicon}
            alt="searchicon"
          />
        </div>
        <div className="navbar nav-active">
          <p className="nav-item"></p>

          <p className="nav-item all">
            <Link to="/all" style={{ textDecoration: "none" }}>
              All
            </Link>
            <div className="dropdown-menu drp_all">
              <Link
                to="/all"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>ALL SHOES</p>
              </Link>
              <p>NEW</p>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <p>HOME</p>
              </Link>
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
