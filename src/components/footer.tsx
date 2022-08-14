import React, { Component } from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          Thanks for checking out my site,{" "}
          <Link to="/guestbook">leave a message if you'd like :)</Link>
        </div>
        <div></div>
      </footer>
    );
  }
}

export default Footer;
