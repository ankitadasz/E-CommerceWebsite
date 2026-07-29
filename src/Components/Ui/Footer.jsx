import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2 className="footer-logo">ANKÉ</h2>
          <p>
            Premium shopping destination for fashion, electronics,
            accessories, and everyday essentials.
          </p>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>

          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Kids</a>
          <a href="/">Accessories</a>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>

          <a href="/">Help Center</a>
          <a href="/">Returns</a>
          <a href="/">Track Order</a>
          <a href="/">Shipping</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Ankita Das. All Rights Reserved.</p>
      </div>

    </footer>
  );
};