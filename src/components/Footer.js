import "./css/Footer.scss";

export default function Footer() {
  return (
    <footer id="footer" className="fade-in">
      <div className="social-links">
        <SocialButton name="Github" link="https://github.com/joshburer" />
        <SocialButton name="Email" link="mailto:contact@joshuaburer.com" />
      </div>
    </footer>
  );
}

function SocialButton(props) {
  return (
    <a className="link-button" href={props.link}>
      {props.name}
    </a>
  );
}
