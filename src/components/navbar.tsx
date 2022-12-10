import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bulma/css/bulma.css";
interface NavBarProps {}

interface NavBarState {}

const RESUME_LINK =
  "https://docs.google.com/document/d/1gzacHqFc-NfhgDDP8g7jf5g8lRDc0Ewm/edit?usp=sharing&ouid=115288814253044666717&rtpof=true&sd=true";
class NavBar extends React.Component<NavBarProps, NavBarState> {
  state = { isClicked: false };

  handleClick = () => {
    let isClicked = this.state.isClicked === true ? false : true;
    this.setState({ isClicked: isClicked });
  };
  render() {
    let classes = "dropdown";
    classes += this.state.isClicked === true ? " is-active" : "";
    return (
      <nav
        className="navbar is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <a
                onClick={this.handleClick}
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <Link className="dropdown-item navbar-item" to="/">
                  home
                </Link>
                <Link className="dropdown-item navbar-item" to="/projects">
                  projects
                </Link>
                <Link className="dropdown-item navbar-item" to="/guestbook">
                  guestbook
                </Link>
                <Link className="dropdown-item navbar-item" to="/experience">
                  experience
                </Link>
                <a className="navbar-item" href={RESUME_LINK} target="_blank">
                  {" "}
                  resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-menu" style={{ justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="navbar-item" to="/">
              home
            </Link>
            <Link className="navbar-item" to="/projects">
              projects
            </Link>
            <Link className="navbar-item" to="/guestbook">
              guestbook
            </Link>
            <Link className="navbar-item" to="/experience">
              experience
            </Link>
            <a className="navbar-item" target="_blank" href={RESUME_LINK}>
              {" "}
              resume
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
