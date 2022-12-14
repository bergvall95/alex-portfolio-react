import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bulma/css/bulma.css";
interface NavBarProps {}

interface NavBarState {}

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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item "></span>

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
                  Home
                </Link>
                <Link className="dropdown-item navbar-item" to="/projects">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/projects">
              Projects
            </Link>
          </div>

          <div className="navbar-end"></div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
