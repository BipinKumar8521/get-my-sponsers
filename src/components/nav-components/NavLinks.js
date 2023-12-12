import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks(props) {
  return (
    <nav className="nav-links" onClick={props.onClick}>
      <Link className="nav-link" to="/ForColleges">
        For Colleges
      </Link>
      <Link className="nav-link" to="/ForSponsers">
        For Sponsers
      </Link>
      <a className="nav-link" href="/#about">
        About
      </a>
      <a className="nav-link" href="/#team">
        Team
      </a>
    </nav>
  );
}
