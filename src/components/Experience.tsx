import * as React from "react";

const Experience = () => (
  <div className="">
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="title">
            General Motors, React/ Full-Stack Developer
          </div>
          <p className="subtitle">February 2022-Present</p>
          <div className="content">
            <ul>
              <li>
                Lead development of a React Application used to track the
                instructions and deployments of several internal software
                applications.
              </li>
              <li>
                Created a mock API using Express for the development of the
                application that would dynamically change endpoints based on the
                application’s environment.
              </li>
              <li>
                Optimized the deployment process of the application using an
                Azure DevOps Build triggered by pull requests.
              </li>
              <li>
                Handled the Authentication of the application via an internal
                active directory API and Redux to manage the state.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="title">General Motors, CICD/ DevOps Team</div>
          <p className="subtitle">March 2021- February 2022</p>
          <div className="content">
            <ul>
              <li>
                Implemented innovative solutions for automated installations to
                cut server downtime by 75%
              </li>
              <li>
                Cut IIS server instantiation time by 95% using Powershell and
                Azure DevOps.
              </li>
              <li>
                Used Bash Scripting with TFS Pipelines to reduce Linux
                application deployment time by 80%
              </li>
              <li>
                Came 2nd out of 12 in internal Hackathon competition to create a
                mobile app with React Native.
              </li>
              <li>
                Awarded 2021 “Rockstar” award for “One Team” GM Behavior
                (Collaboration and Enterprise Wide results).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
