import "./css/Navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Info} from "../static/icons/info.svg";
import { ReactComponent as Folder} from "../static/icons/folder.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Separated so the left and right sections of nav-elements can be space-between */}
      <div className="left nav-elements">
        <Link className="home-button nav-link" to="/">
          <div className="nav-element">Josh B.</div>
        </Link>
      </div>

      <div className="right nav-elements">
        <NavItem name="Info">
          <Info />
        </NavItem>
        <NavItem name="Projects">
          <Folder />
        </NavItem>
      </div>
    </nav>
  );
}

// Creates a link given a page name
function NavItem(props) {
  return (
    <Link to={props.name.toString().toLowerCase()} className="nav-link" title={props.name}>
      <div className="nav-element">
        {props.icon}
        {props.children}
      </div>
    </Link>
  );
}
