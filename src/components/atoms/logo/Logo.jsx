import logo from "/assets/logo.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo" />
      <h2 className="logo__title">
        <span className="text-accent">Auto</span>Pay
      </h2>
    </div>
  );
};

export default Logo;
