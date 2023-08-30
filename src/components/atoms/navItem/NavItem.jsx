/* eslint-disable react/prop-types */
import "./NavItem.scss";

const NavItem = ({ link }) => {
  return (
    <li className="nav__item">
      <a href="#" className="nav__link">
        {link}
      </a>
    </li>
  );
};

export default NavItem;
