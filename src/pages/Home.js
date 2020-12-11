// import profile from "../static/profile.jpg";

export default function Home() {
  return (
    <div className="page-container">
      <div className="initial-greeting">
        <h1 className="greeting">Hello! 👋</h1>
        <p>I'm Joshua Burer.</p>
        <p>
          I'm an aspiring software developer, currently pursuing a Bachelor's in
          Computer Science. 💻
        </p>
      </div>
      <div className="info-box">
        {/* <img src={profile} alt="profile" /> */}
        <h2>Interests & Experience</h2>
        <p>
          This website is a work in progress, but some of the stuff I've done in
          the past includes:
        </p>
        <InterestsList />
        <p>
          To implement: When the info-box has room, move photo to the right
          side.
        </p>
      </div>
      <div>
        <p>I can put more content down here and things will be fine.</p>
        <p>Below are social media links.</p>
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
            Frontend:{" "}
            <span className="languages">React (JavaScript), HTML, CSS</span>
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
        Gamedev:{" "}
        <span className="languages">
          Unity (C#), Love2D (lua), Godot Engine (GDScript).
        </span>
      </li>
    </ul>
  );
}
