import "./css/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Separated so the left and right sections of nav-elements can be space-between */}
      <div className="left nav-elements">
        <Link className="home-button nav-link" to="/">
          <div className="nav-element">Joshua Burer</div>
        </Link>
      </div>

      <div className="right nav-elements">
        <RightNavItems />
      </div>
    </nav>
  );
}

// Creates a link for each of the pages
function RightNavItems() {
  const pages = ["Info", "Projects"];
  return pages.map((page) => (
    <Link to={page.toLowerCase()} className="nav-link" key={page}>
      <div className="nav-element">
        {page}
      </div>
    </Link>
  ));
}
