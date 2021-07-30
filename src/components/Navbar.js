import "./css/Navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as InfoIcon } from "../static/icons/info.svg";
import { ReactComponent as FolderIcon } from "../static/icons/folder.svg";

export default function Navbar() {
  return (
    <nav className="navbar fade-in--no-move">
      {/*Separated groups to space-between*/}
      <HomeLink />
      <NavLinks />
    </nav>
  );
}

// Creates a link given a page name
function NavItem(props) {
  return (
    <Link to={props.path} className="nav-link" title={props.name}>
      <div className="nav-item-contents">
        {props.icon}
        {props.children}
        <div className="tooltip">{props.name}</div>
      </div>
    </Link>
  );
}

function NavLinks() {
  return (
    <div className="right nav-elements">
      <NavItem name="Info" path="/info" icon={<InfoIcon />} />
      <NavItem name="Experience" path="/projects" icon={<FolderIcon />} />
    </div>
  );
}

function HomeLink() {
  return (
    <div className="left nav-elements home-button">
      <NavItem name="Home" path="/">
        Josh Burer
      </NavItem>
    </div>
  );
}
