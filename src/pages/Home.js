// import profile from "../static/profile.jpg";
// import placeholder from "../static/placeholder.png";
import "./css/Home.scss";
import { ReactComponent as HTML5Icon } from "../static/icons/html5.svg";
import { ReactComponent as CSSIcon } from "../static/icons/css3.svg";
import { ReactComponent as JavaScriptIcon } from "../static/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../static/icons/react.svg";
import { ReactComponent as PythonIcon } from "../static/icons/python.svg";
import { ReactComponent as DjangoIcon } from "../static/icons/django.svg";
import { ReactComponent as JavaIcon } from "../static/icons/java.svg";

export default function Home() {
  return (
    <main className="page-container fade-in">
      <section>
        <h1 className="center">Hey! 👋</h1>
        <h2 className="center">I'm Joshua Burer.</h2>
        <div className="introduction">
          {/* <img
            className="profile"
            src={placeholder}
            alt="profile"
            width="200"
            height="200"
          /> */}
          <p>
            I'm a student at Georgia State University, currently pursuing a
            Bachelor's in Computer Science. 💻
          </p>
        </div>
      </section>
      <section className="info-box">
        {/* <img src={profile} alt="profile" /> */}
        <h2 className="center">Interests & Experience</h2>
        <p>So far, I have been formally educated with Java.</p>
        <p>
          Personally, I am interested in web development and have been focusing
          on building those skills through self-motivated learning and
          experimentation even from before my college career.
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
