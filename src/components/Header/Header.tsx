import Navbar from "../Navbar/Navbar";

const Header = (): JSX.Element => {
  return (
    <header>
      <img src="logo.png" alt="Event-oh logo" />
      <Navbar />
    </header>
  );
};

export default Header;
