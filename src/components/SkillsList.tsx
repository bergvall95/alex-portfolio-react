import * as React from "react";

export const SkillsList: React.FC = () => {
  const skills = [
    "Powershell",
    "Bash",
    "Linux",
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "TypeScript",
    "MATLAB",
    "Azure DevOps (TFS)",
    "MySQL",
    "Git",
    "Node.js",
    "AWS EC2",
    "YAML",
    "Angular",
    "Express.js",
    "React Native",
    "React",
    "NumPy",
    "Matplotlib",
    "CV2",
    "Bootstrap",
    "Angular Material",
    "SQL",
    "Firebase",
  ];
  // make the component return a list of skills from the skills array in rows of 3 with relevant icons
  return (
    <div>
      <h1>Skills</h1>
      <div className="columns">
        <div className="column">
          <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
