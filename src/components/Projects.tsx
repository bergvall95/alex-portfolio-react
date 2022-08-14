import * as React from "react";
import { Component } from "react";
import projectsJson from "../projects.json";
import Hero from "./Hero";
import ProjectCard from "./ProjectCard";
import ProjectTiles from "./ProjectTile";

interface ProjectsProps {}

interface ProjectsState {
  projects: Project[];
}
interface Project {
  title: string;
  skills: string[];
  desc: string;
}

class Projects extends React.Component<ProjectsProps, ProjectsState> {
  state = {
    projects: projectsJson,
  };
  formatProjects(projectsJson: Project[]) {}
  render() {
    return (
      <div className="section">
        <div className="level">
          <Hero hasImage={false}>
            <p className="title">Projects</p>
          </Hero>
        </div>
        <div className="content">
          {this.state.projects.map((item) => (
            <ProjectCard
              title={item.title}
              skills={item.skills}
              desc={item.desc}
              link={item.link}
            ></ProjectCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
