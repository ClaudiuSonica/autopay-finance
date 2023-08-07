import "./Banner.scss";
import laptop from "/assets/laptop.png";
import phone from "/assets/phone.png";

const Banner = () => {
  return (
    <section className="banner">
      <button className="banner__btn__product">Find us on Product Hunt</button>
      <h1 className="banner__title">
        Refining <span className="text-accent">automated</span> payments in Web3
      </h1>
      <h2 className="banner__subtitle">
        One stop solution for subscriptions, salaries, SIPs and more automated
        payments in web3.
      </h2>
      <div className="banner__img">
        <div className="laptop">
          <img src={laptop} alt="laptop model" />
        </div>
        <div className="phone">
          <img src={phone} alt="phone model" />
        </div>
      </div>
      <div className="banner__buttons">
        <button className="banner__btn__explore">Explore App</button>
        <button className="banner__btn__demo">Checkout Demo</button>
      </div>
    </section>
  );
};

export default Banner;
