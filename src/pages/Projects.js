import "./css/Projects.scss";
// Image imports
import example from "../static/example.png";
import something from "../static/something.jpg";

export default function Projects() {
  return (
    <main className="page-container fade-in">
      <section>
        <h1 className="center">Projects</h1>
        <p className="center">
          Nothing significant to put here yet. In the meantime, I have created
          the styling for cards to showcase different projects.
        </p>
      </section>
      <section className="card-list">
        <ProjectCard>
          <img src={something} alt="something" />
          <h2>Project 1</h2>
          <p>Meaningful information about the project here.</p>
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
