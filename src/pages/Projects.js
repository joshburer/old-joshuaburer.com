import "./css/Projects.scss";
import example from '../static/example.png'


export default function Projects() {
  return(
    <div className="page-container">
      <div>
        <h1 className="center">Projects</h1>
        <p>Nothing here yet but woohooo! I'm going to implement the necessary CSS to add projects.</p>
      </div>
      <div className="card-list">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

function ProjectCard() {
  return(
    <div className="project-card">
      <img src={example} alt="example"/>
      <h2 className="center">Project Name</h2>
    </div>
  );
}