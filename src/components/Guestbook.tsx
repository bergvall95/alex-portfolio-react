import * as React from "react";
import { Component } from "react";
import { Authorization } from "../features/auth/Authorization";
import { GitHubAuth } from "../features/auth/githubAuth";
import { SpotifyExample } from "../features/spotify/spotifyExample";
import GuestbookEntry from "./GuestbookEntry";
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
        <GitHubAuth></GitHubAuth>
        <GuestbookEntry></GuestbookEntry>
      </React.Fragment>
    );
  }
}

export default Guestbook;
