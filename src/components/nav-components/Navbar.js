import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../Shared/UIElements/Backdrop";

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // const openDrawer = () => {
  //   setDrawerIsOpen(true);
  // };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <header>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      <SideDrawer show={drawerIsOpen}>
        <nav className="drawer-nav">
          <NavLinks onClick={closeDrawer} />
        </nav>
      </SideDrawer>
      <div className="logo">
        <Link to="/">
          <img
            src="/Assests/Img/main-logo.png"
            alt="Get My Sponsers"
            style={{ width: "60px" }}
          />
        </Link>
      </div>
      <button
        className={`hamburger ${drawerIsOpen ? "active" : ""}`}
        onClick={() => setDrawerIsOpen((drawerIsOpen) => !drawerIsOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="nav-links-container">
        <NavLinks />
      </div>
    </header>
  );
}
