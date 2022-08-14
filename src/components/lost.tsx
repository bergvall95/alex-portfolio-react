import React, { Component } from "react";

interface LostProps {}

interface LostState {}

class Lost extends React.Component<LostProps, LostState> {
  state = {};
  render() {
    return (
      <div className="title mt-6">
        Howdy partner, looks like you're lost? Hope you find your way back there
        good buddy.
      </div>
    );
  }
}

export default Lost;
