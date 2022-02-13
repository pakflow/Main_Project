import React, { useState } from "react";
import userlogo from "../Icons/userlogo.svg";
import favoritelogo from "../Icons/favoritelogo.svg";
import searchicon from "../Icons/searchicon.svg";
// import "./Header.scss";
import ModalAuth from "../ModalAuth/ModalAuth";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import cn from "classnames";

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
      <nav className={s.nav}>
        <div className={s.userMenu}>
          <img
            className={s.iconNavbar}
            onClick={() => setShowModalAuth(!showModalAuth)}
            src={userlogo}
            alt="userlogo"
          />
          <img className={s.iconNavbar} src={favoritelogo} alt="favoritelogo" />
          <img className={s.iconNavbar} src={searchicon} alt="searchicon" />
        </div>
        <div
          className={cn(s.navbar, s.navActive)}
          // className="navbar nav-active"
        >
          <p className={s.navItem}></p>

          <p className={cn(s.navItem, s.all)}>
            <Link to="/all" style={{ textDecoration: "none" }}>
              All
            </Link>
            <div className={s.dropdownMenu}>
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

          <p className={cn(s.navItem, s.new)}>
            NEW
            <div className={s.dropdownMenu}>
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
          <p className={s.navItem}>COMING SOON</p>
          <p className={s.navItem}>BRANDS</p>
          <p className={s.navItem}>SALES</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
