import "./Navbar.scss";
import NavItem from "../../atoms/navItem/NavItem";

const Navbar = () => {

  const navItems = ["Home", "Contact Us", "Merchant App", "Checkout Demo"]

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, i) => {
          return <NavItem key={i} link={item} />
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
