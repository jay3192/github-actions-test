import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min";

const NavBar = () => {
  useEffect(() => {
    // activate mobile sidenav
    window.addEventListener("load", () => {
      const elem = document.querySelector(".sidenav");
      const instance = M.Sidenav.init(elem);

      // close sidenav on link click
      elem.querySelectorAll("a").forEach((item) => {
        item.addEventListener("click", () => {
          instance.close();
        });
      });
    });
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link to="/github-actions-test/" className="brand-logo navbar-logo">
            Recipe Search
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/github-actions-test/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/github-actions-test/about" className="navbar-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/github-actions-test/">Home</Link>
        </li>
        <li>
          <Link to="/github-actions-test/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
