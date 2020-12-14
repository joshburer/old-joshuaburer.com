import profile from "../static/profile.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <div className="initial-greeting">
        <h1 className="greeting center">Hey! 👋</h1>
        <h2 className="center">I'm Joshua Burer.</h2>
        <img className="profile" src={profile} alt="profile"/>
        <p>
          I'm an aspiring software developer, currently pursuing a Bachelor's in
          Computer Science. 💻
        </p>
      </div>
      <div className="info-box">
        {/* <img src={profile} alt="profile" /> */}
        <h2>Interests & Experience</h2>
        <p>
          This website is a work in progress, but I <Link to="/info">built it myself.</Link>
        </p>
        <p>Some other experience I've had in the past includes:</p>
        <InterestsList />
        <p>I need to add some kinda photos or something :)</p>
      </div>
    </div>
  );
}

function InterestsList() {
  return (
    <ul>
      <li>
        Web Development:
        <ul>
          <li>
            Frontend: <span className="languages">React (JavaScript), HTML, CSS</span>
          </li>
          <li>
            Backend: <span className="languages">Django (Python)</span>
          </li>
        </ul>
      </li>
      <li>
        Formal Education: <span className="languages">Java</span>
      </li>
      <li>
        Gamedev: <span className="languages"> Unity (C#), Love2D (lua), Godot Engine (GDScript).</span>
      </li>
    </ul>
  );
}
