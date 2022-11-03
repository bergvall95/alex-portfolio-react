import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          Thanks for stopping by!{" "}
          <div className="social-links">
            <Link
              to="https://www.linkedin.com/in/alex-bergvall/"
              className="social-link"
            >
              <FontAwesomeIcon icon={brands("linkedin")} size="lg" />
            </Link>
            <Link to="https://github.com/bergvall95" className="social-link">
              <FontAwesomeIcon icon={brands("github")} size="lg" />
            </Link>
          </div>
        </div>
        <div></div>
      </footer>
    );
  }
}

export default Footer;
