import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img src="logo.png" alt="Event-oh logo" />
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
