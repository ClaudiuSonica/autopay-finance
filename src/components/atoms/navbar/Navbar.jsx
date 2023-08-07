import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link active">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact Us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Merchant App
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Checkout Demo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
