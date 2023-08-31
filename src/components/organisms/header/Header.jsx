import "./Header.scss";
import Logo from "../../atoms/logo/Logo";
import Navbar from "../../molecules/navbar/Navbar";
import MobileNav from "../../molecules/mobileNav/MobileNav";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Logo />
      {isOpen ? <MobileNav /> : <Navbar />}
      <div
        onClick={() => setIsOpen((cur) => !cur)}
        className={`menu-toggle ${isOpen ? "menu__toggle-open" : ""}`}>
        {isOpen ? "X" : "="}
      </div>
    </header>
  );
};

export default Header;
