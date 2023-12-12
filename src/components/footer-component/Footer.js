import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img
            src="/Assests/Img/main-logo.png"
            alt="Get My Sponsers"
            style={{ width: "200px" }}
          />
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            <h3>Links</h3>
            <hr />
            <div>
              <Link to="/ForColleges">For Colleges</Link>
              <Link to="/ForSponsers">For Sponsers</Link>
              <a href="/#about">About</a>
              <a href="/#team">Team</a>
            </div>
          </div>
          <div className="footer-social">
            <h3>Social Links</h3>
            <hr />
            <div>
              <a href="https://www.facebook.com/GetMySponsors-101158812233799">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/getmysponsors/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/getmysponsors/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/getmysponsors">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; 2021 GetMySponsors. All rights reserved.{" "}
          <a href="/#privacy">Privacy Policy</a> |{" "}
          <a href="/#terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
