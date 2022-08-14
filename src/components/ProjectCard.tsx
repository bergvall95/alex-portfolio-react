import React, { Component } from "react";

interface ProjectCardProps {
  title: string;
  skills: string[];
  desc: string;
  link?: string;
}

interface ProjectCardState {}

class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {
  state = {};
  render() {
    return (
      <div className="columns box is-flex is-desktop mb-5">
        <div
          className="card-left column is-5 mr-3 content"
          style={{
            borderRightStyle: "solid",
            borderRightColor: "lightgray",
            borderWidth: 2,
          }}
        >
          <div
            className="card-title title m-1 content is-size-4-desktop is-size-5-mobile"
            style={{
              borderBottomStyle: "solid",
              borderBottomColor: "lightgray",
              borderWidth: 2,
            }}
          >
            <a href={this.props.link} target="_blank">
              {this.props.title}
            </a>
          </div>
          <div className="card-skills m-1 content">
            {this.props.skills.map((skill, idx) => {
              if (idx == this.props.skills.length - 1) {
                return <p style={{ display: "inline" }}> {skill} </p>;
              }
              return <p style={{ display: "inline" }}> {skill}, </p>;
            })}
          </div>
        </div>
        <div
          className="card-right column is-7 content"
          style={{ float: "right" }}
        >
          {this.props.desc}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
