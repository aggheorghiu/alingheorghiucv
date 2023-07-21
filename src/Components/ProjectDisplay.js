import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styling/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const prevProjectId = parseInt(id, 10) - 1;
  const nextProjectId = parseInt(id, 10) + 1;

  return (
    <div className="project">
      <div className="project-info">
        <h1> {project.name}</h1>
        <img src={project.image} alt={project.name} />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <p><i class="fab fa-github"></i> GitHub: <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">Source Code</a></p>
      </div>
      <div className="navigation-buttons">
        {prevProjectId >= 0 && (
          <Link to={`/project/${prevProjectId}`} className="navigation-button left">
            &lt;
          </Link>
        )}
        {nextProjectId < ProjectList.length && (
          <Link to={`/project/${nextProjectId}`} className={`navigation-button right ${nextProjectId < ProjectList.length ? 'absolute-right' : ''}`}>
            &gt;
          </Link>
        )}
      </div>

    </div>
  );
}

export default ProjectDisplay;