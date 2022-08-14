import React, { Component } from "react";

interface ProjectTilesProps {
  title: string;
  skills: string[];
  desc: string;
}

interface ProjectTilesState {}

class ProjectTiles extends React.Component<
  ProjectTilesProps,
  ProjectTilesState
> {
  state = {};
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile is-parent">
            <article className="tile is-child notification is-black">
              <p className="title">{this.props.title}</p>
            </article>
          </div>

          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-warning">
              <p className="title">Skills</p>
              <p className="Content subtitle">
                {this.props.skills.map((skill, idx) => {
                  if (idx == this.props.skills.length - 1) {
                    return <p style={{ display: "inline" }}> {skill} </p>;
                  }
                  return <p style={{ display: "inline" }}> {skill}, </p>;
                })}
              </p>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <p className="tile notification is-warning title is-child">
            {this.props.desc}
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectTiles;
