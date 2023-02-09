import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <a href="home">
            <i className="fa-solid fa-house-chimney"></i>
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="create">
            <i className="fa-regular fa-plus"></i>
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="myList">
            <i className="fa-regular fa-rectangle-list"></i>
          </a>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
