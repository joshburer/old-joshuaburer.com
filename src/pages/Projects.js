import "./css/Projects.scss";
// Image imports
import example from "../static/example.png";
import something from "../static/something.jpg";

export default function Projects() {
  return (
    <main className="page-container">
      <section>
        <h1 className="center">Projects</h1>
        <p>
          Nothing here yet but woohooo! I'm going to implement the necessary CSS
          to add projects.
        </p>
      </section>
      <section className="card-list">
        <ProjectCard>
          <img src={something} alt="something" />
          <h2>Nothing here</h2>
          <p>Information about the project... lorem ipsum lolom whOPsom ;)</p>
        </ProjectCard>
        <ProjectCard>
          <img src={example} alt="example" />
          <h2>Bo's in the House!</h2>
        </ProjectCard>
      </section>
    </main>
  );
}
// Wrap the contents of the project card in a div
function ProjectCard(props) {
  return <div className="project-card">{props.children}</div>;
}
