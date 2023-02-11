import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img src="logo.png" alt="Event-Oh logo" width={90} height={48} />
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
