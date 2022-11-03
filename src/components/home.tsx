import React, { Component } from "react";
import Hero from "./Hero";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {};
  render() {
    return (
      <div className="is-desktop">
        <div className="section">
          <Hero image="https://picsum.photos/200/200">
            <p className="title">Alex Bergvall</p>
            <p className="subtitle">React Developer</p>
          </Hero>
        </div>
        <div className="section">
          <div className="content box">
            <p className="content is-white">
              Hi, I'm Alex Bergvall. I'm a software engineer for General Motors
              in Austin. Welcome to my portfolio!
            </p>
            <p className="content">
              I grew up in a small Texas town with my 4 brothers. Most of my
              time was spent playing video games and getting annoyed by my
              little brothers. After a few years, I realized my professional
              gaming career wasn't going anywhere, so I decided to go with plan
              B and get an engineering degree.
            </p>
            <p>
              While purusing a biomedical engineering degree at the University
              of Texas, I found my love for coding, leadership, and building
              projects. But then, just as I was about to graduate, the pandemic
              hit and my job prospects vanished. :( As I look back at it, this
              was a blessing in disguise! I was able to shut in, practice coding
              for a year, and then land a job starting my dream career as a
              software engineer.
            </p>
            <p className="content"></p>
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
