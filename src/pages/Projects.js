import "./css/Projects.scss";

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
      <section>
        <h3 className="center">Stuff that I'm working on learning:</h3>
        <ul>
          <li>Backend-Frontend integration with Django and React</li>
          <li>Python skills in general</li>
        </ul>
        <h3>Hopefully I'll make some good stuff to put on this page!</h3>
      </section>
      <section className="card-list">
        <ProjectCard>
          <img alt="" />
          <h2>Project</h2>
          <p>Meaningful information about the project here.</p>
        </ProjectCard>
        <ProjectCard>
          <img alt="" />
          <h2>Project</h2>
          <p>Meaningful information about the project here.</p>
        </ProjectCard>
      </section>
    </main>
  );
}
// Wrap the contents of the project card in a div
function ProjectCard(props) {
  return <div className="project-card">{props.children}</div>;
}
