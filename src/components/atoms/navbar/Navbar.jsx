import "./Navbar.scss";
import NavItem from "../navItem/NavItem";

const Navbar = () => {

  const navItems = ["Home", "Contact Us", "Merchant App", "Checkout Demo"]

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, i) => {
          return <NavItem key={i} link={item} />
        })}
      </ul>
      <div className="menu-toggle">=</div>
    </nav>
  );
};

export default Navbar;
