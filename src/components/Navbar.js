import "./css/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="left nav-elements">
        <Link className="home-button nav-link" to="/">
          <div className="nav-element">Home</div>
        </Link>
      </nav>
      <nav className="right nav-elements">
        <NavItems pages={props.pages} />
      </nav>
    </div>
  );
}

function NavItems(props) {
  const listPages = props.pages.map((page) => (
    <Link to={page.toLowerCase()} className="nav-link">
      <div className="nav-element">{page}</div>
    </Link>
  ));

  return listPages;
}
