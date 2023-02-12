import { NavLink } from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "orange" : "grey")}
            to="/"
          >
            <i
              className="fa-solid fa-house-chimney"
              role="navigation"
              aria-label="Home"
            ></i>
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "orange" : "grey")}
            to="/create"
            aria-label="Create an Event"
          >
            <i className="fa-solid fa-plus" role="navigation"></i>
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "orange" : "grey")}
            to="myList"
          >
            <i
              className="fa-solid fa-rectangle-list"
              role="navigation"
              aria-label="My Events List"
            ></i>
          </NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
