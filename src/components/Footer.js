import "./css/Footer.scss";
// Icon imports
import { ReactComponent as Github} from "../static/icons/github.svg";
import { ReactComponent as Email} from "../static/icons/email.svg";


export default function Footer() {
  return (
    <footer id="footer" className="fade-in">
      <div className="social-links">
        <a className="link-button" href="https://github.com/joshburer">
          <Github /><span>Github</span>
        </a>
        <a className="link-button" href="mailto:contact@joshuaburer.com">
          <Email /><span>Email</span>
        </a>
      </div>
    </footer>
  );
}