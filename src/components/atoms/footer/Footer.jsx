import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p className="footer__text">AutoPay { year }</p>
    </footer>
  )
}

export default Footer;

