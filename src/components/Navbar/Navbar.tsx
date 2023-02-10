import { Link } from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/">
            <i
              className="fa-solid fa-house-chimney"
              role="navigation"
              aria-label="Home"
            ></i>
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/create">
            <i
              className="fa-regular fa-plus"
              role="navigation"
              aria-label="Create an Event"
            ></i>
          </Link>
        </li>
        <li className="navbar-list-item">
          <a href="myList">
            <i
              className="fa-regular fa-rectangle-list"
              role="navigation"
              aria-label="My Events List"
            ></i>
          </a>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
