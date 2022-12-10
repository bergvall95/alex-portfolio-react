import React from "react";
import Hero from "./Hero";
import { SkillsList } from "./SkillsList";

export const Skills: React.FC = () => {
  return (
    <div className="is-desktop">
      <div className="section">
        <Hero>
          <p className="title">Skills</p>
          <p className="content">
            Here are some of the skills I have acquired over the years. I am
            always learning new things and am always open to learning new
            things.
          </p>
        </Hero>
      </div>
      <SkillsList />
    </div>
  );
};

export default Skills;
