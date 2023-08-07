import "./Header.scss"
import Logo from "../../atoms/logo/Logo"
import Navbar from "../../atoms/navbar/Navbar"

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;