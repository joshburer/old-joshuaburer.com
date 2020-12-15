import "./css/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <NavItems pages={props.pages} />
    </div>
  );
}

function NavItems(props) {

  const listPages = props.pages.map(page =>
    <Link to={page} className="navLink">
      <div className="nav-element" >{page}</div>
    </Link>
  );

  return (
    <nav className="nav-elements" pages={props.pages}>
      {listPages}
    </nav>
  );
}
