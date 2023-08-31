import "./MobileNav.scss";
import NavItem from "../../atoms/navItem/NavItem";

const MobileNav = () => {
  const navItems = ["Home", "Contact Us", "Merchant App", "Checkout Demo"]

  return (
    <nav className="nav__mobile">
      <ul className="nav__list__mobile">
        {navItems.map((item, i) => {
          return <NavItem key={i} link={item} />
        })}
      </ul>
    </nav>
  );
}

export default MobileNav;