import './css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <nav className="nav-elements">
                <NavItem name="Home" link="/" />
                <NavItem name="Contact" link="/contact" />
            </nav>

        </div>
    );
}

function NavItem(props) {
    return (
        <Link to={props.link} className="navLink">
            <div className="nav-element">
                {props.name}
            </div>
        </Link>

    );
}

export default Navbar;
