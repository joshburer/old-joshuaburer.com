import "./css/Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <nav className="social-links">
        <SocialButton name="Github" link="https://github.com/joshburer" />
        <SocialButton name="Email" link="mailto:joshburer@gmail.com" />
      </nav>
    </div>
  );
}

function SocialButton(props) {
  return (
    <a className="social-button" href={props.link}>
      {props.name}
    </a>
  );
}
