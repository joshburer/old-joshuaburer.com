import "./css/Projects.scss";
import mtech from "../static/mtech.png";
import freelance from "../static/freelance.jpg";

export default function Projects() {
  return (
    <main className="page-container fade-in">
      <h1 className="center">Experience & Projects</h1>
      <section className="card-list">
        <ProjectCard>
          <img alt="" src={mtech} />
          <h2>Morris Technology</h2>
          <pre className="center">Solutions Developer</pre>
          <pre className="center">January 2021 - Present</pre>
          <ul>
            <li>Full-time work as a full-stack web developer.</li>
            <li>Used Python & Django for backend.</li>
            <li>Used React, JavaScript, HTML, and CSS/Sass for frontend.</li>
          </ul>
        </ProjectCard>
        <ProjectCard>
          <img alt="" src={freelance} />
          <h2>Freelance Work</h2>
          <p>
            Various freelance web design & development projects. Open to work.
            <br />
            <br />
            Want to get in touch? <br />
            <a href="mailto:contact@joshuaburer.com">Send me an email.</a>
          </p>
        </ProjectCard>
      </section>
    </main>
  );
}
// Wrap the contents of the project card in a div
function ProjectCard(props) {
  return <div className="project-card">{props.children}</div>;
}
