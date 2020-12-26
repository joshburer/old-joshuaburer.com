import "./css/Footer.scss";
// Icon imports
import { ReactComponent as Github } from "../static/icons/github.svg";
import { ReactComponent as Email } from "../static/icons/email.svg";

export default function Footer() {
  return (
    <footer id="footer" className="fade-in--no-move">
      <div className="social-links">
        <SocialLink
          text="Github"
          link="https://github.com/joshburer"
          icon={<Github />}
        />
        <SocialLink
          text="Email"
          link="mailto:contact@joshuaburer.com"
          icon={<Email />}
        />
      </div>
    </footer>
  );
}

var SocialLink = (props) => {
  return (
    <a className="link-button" href={props.link}>
      {props.icon}
      {props.text}
    </a>
  );
};
