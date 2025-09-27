import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
    
        <div className="footer-section">
          <h2 className="footer-logo">IELTS Institute</h2>
          <p className="footer-text">
            Helping students achieve their dream IELTS band score with expert guidance.
          </p>
        </div>

  
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Mock Tests</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

    
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p>📍 Hyderabad, India</p>
          <p>📧 info@ieltsinstitute.com</p>
          <p>📞 +91 98765 43210</p>
          <div className="footer-socials">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
