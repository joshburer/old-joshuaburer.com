import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <NavItem name="Home" link="/" />
                <NavItem name="Contact" link="/contact" />
            </nav>

        </div>
    );
}

function NavItem(props) {
    return (
        <Link to={props.link}>
            {props.name}
        </Link>
    );
}

export default Navbar;
