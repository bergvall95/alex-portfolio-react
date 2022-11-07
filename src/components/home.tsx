import React, { Component } from "react";
import Hero from "./Hero";
import ProfilePic from "../ProfilePicSeattle.jpg";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div className="is-desktop">
        <div className="section">
          <Hero image={ProfilePic}>
            <p className="title">Alex Bergvall</p>
            <p className="subtitle">React Developer</p>
          </Hero>
        </div>
        <div className="section">
          <div className="content box">
            <p className="content">
              Hi, I'm Alex Bergvall. I'm a software engineer for General Motors
              in Austin. Welcome to my portfolio!
            </p>
            <p className="content">
              I grew up in a small Texas town called Beaumont. Most of my time
              was spent playing video games and getting annoyed by my 3 little
              brothers. I found my passion for development while pursuing my
              engineering degree at UT (Hook 'em!). I had an unreasonable amount
              of pride for creating connect 4 with assembly code. Unfortunately
              I mistimed the market on cli connect 4, so I decided to become a
              front-end developer.
            </p>
            <p className="content">
              I started in the classic young developer's tutorial trap, with all
              of the different content creators pulling me in different
              directions with the new "best" framework. At first I tried
              Angular, and loved it! After a few projects, I got my first job at
              General Motors.
            </p>
            <p className="content">
              After about 9 months, my boss took me to a start a new team to
              create a new app with React and Java as a full stack devloper. As
              of November 2022 the app is being developed and planned for
              production in 2023. I'm still learning full-stack development and
              am dedicated to becoming a top-tier developer.
            </p>
            <p className="content">
              My mission is to architect and develop robust applications.
              Contributing to open-source, learning instruments, and playing
              video games are my side quests.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
