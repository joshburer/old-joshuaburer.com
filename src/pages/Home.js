// import profile from "../static/profile.jpg";
import placeholder from "../static/placeholder.png";
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
      <section>
        <h1 className="center">Hey! 👋</h1>
        <h2 className="center">I'm Joshua Burer.</h2>
        <div className="introduction">
          <img
            className="profile"
            src={placeholder}
            alt="profile"
            width="200"
            height="200"
          />
          <p className="image-caption center">
            What's better than this? Guys bein dudes.
          </p>
        </div>
      </section>
      <section className="info-box">
        {/* <img src={profile} alt="profile" /> */}
        <h2 className="center">Interests & Experience</h2>
        <p>🤠</p>
        <p>
          I'm a student right now, but I do thoroughly enjoy Computer Science
          topics! I often do programming on my own, as well as do full stack web
          development as my part time job. Listed below are some of my computer
          science skills.
        </p>
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
