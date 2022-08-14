import React, { Component } from "react";
import "./Hero.css";

interface HeroProps {
  children: any;
  hasImage: boolean;
  image?: string;
}

interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  render() {
    return (
      <section className="level">
        <div className="level-left">
          <div>{this.props.children}</div>
        </div>
        <div className={"level-right"} hidden={!this.props.hasImage}>
          <figure style={{ float: "right" }} className="image is-128x128">
            <img src={this.props.image} alt="" className="is-rounded" />
          </figure>
        </div>
      </section>
    );
  }
}

export default Hero;
