import * as React from "react";
import { Component } from "react";
import { Authorization } from "../features/auth/Authorization";
import { SpotifyExample } from "../features/spotify/spotifyExample";
import Hero from "./Hero";

interface GuestbookProps {}

interface GuestbookState {}

class Guestbook extends React.Component<GuestbookProps, GuestbookState> {
  state = {};
  componentDidMount() {
    fetch("https");
  }
  render() {
    return (
      <React.Fragment>
        <Hero hasImage={false}>
          <p className="title">Guestbook</p>
          <p className="content">
            Leave a message. I like music recommendations, advice, video games,
            or bad dad jokes!
          </p>
        </Hero>
        <Authorization />
        <SpotifyExample />
      </React.Fragment>
    );
  }
}

export default Guestbook;
