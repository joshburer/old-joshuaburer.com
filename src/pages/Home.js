import profile from "../static/profile.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page-container fade-in">
      <section className="initial-greeting">
        <h1 className="greeting center">Hey! 👋</h1>
        <h2 className="center">I'm Joshua Burer.</h2>
        <img
          className="profile"
          src={profile}
          alt="profile"
          width="200"
          height="200"
        />
        <p>
          I'm a student at Georgia State University, currently pursuing a
          Bachelor's in Computer Science. 💻
        </p>
      </section>
      <section className="info-box">
        {/* <img src={profile} alt="profile" /> */}
        <h2>Interests & Experience</h2>
        <p>
          I am working mostly towards learning web development. That includes
          this website, which I <Link to="/info">built myself.</Link> It's quite
          simple but it works for now.
        </p>
        <hr />
        <p>Programming experience I've had in the past includes:</p>
        <InterestsList />
      </section>
    </main>
  );
}
// Just to separate this into a different section so as to not take up so much space.
function InterestsList() {
  return (
    <ul>
      <li>
        🌐 Web Development:
        <ul>
          <li>
            Frontend:{" "}
            <span className="languages">React (JavaScript), HTML, CSS</span>
          </li>
          <li>
            Backend: <span className="languages">Django (Python)</span>
          </li>
        </ul>
      </li>
      <li>
        📚 Formal Education: <span className="languages">Java</span>
      </li>
      <li>
        🎮 Game Development:
        <span className="languages">
          {" "}
          Unity (C#), Love2D (lua), Godot Engine (GDScript).
        </span>
      </li>
    </ul>
  );
}
