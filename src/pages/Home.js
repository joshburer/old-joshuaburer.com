import profile from "../static/profile.jpg";
import {
  HTML5Icon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  PythonIcon,
  DjangoIcon,
  JavaIcon,
} from "../static/icons";
import "./css/Home.scss";

export default function Home() {
  return (
    <main className="page-container fade-in">
      <section className="hero">
        <div className="introduction">
          <div className="col">
            <img
              className="profile"
              src={profile}
              alt="profile"
              width="200"
              height="200"
            />
          </div>

          <div className="col">
            <i>Hey! 👋</i>
            <h1>I'm Joshua Burer.</h1>
            <p>Full stack software developer and full-time student. </p>
            <p>
              Pursuing a Bachelor's in Computer Science 💻 from Georgia Tech.
            </p>
          </div>
        </div>
      </section>
      <section className="info-box">
        {/* <img src={profile} alt="profile" /> */}
        <h2 className="center">Interests & Skills</h2>
        <hr />

        <Skills />
      </section>
    </main>
  );
}

function Skills() {
  return (
    <div className="skills-list">
      <SkillItem name="HTML5" image={<HTML5Icon />} />
      <SkillItem name="CSS" image={<CSSIcon />} />
      <SkillItem name="JavaScript" image={<JavaScriptIcon />} />
      <SkillItem name="React" image={<ReactIcon />} />
      <SkillItem name="Python" image={<PythonIcon />} />
      <SkillItem name="Django" image={<DjangoIcon />} />
      <SkillItem name="Java" image={<JavaIcon />} />
    </div>
  );
}
function SkillItem(props) {
  return (
    <div className="skill-item">
      {props.image}
      {props.name}
    </div>
  );
}
