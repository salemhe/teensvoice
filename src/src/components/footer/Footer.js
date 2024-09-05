import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from '../../media/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
        {/* <img src={Logo} alt="TeensVoice Logo" className="footer-logo" /> */}
        <h1>Teensvoice</h1>
          {/* <p>Let Your Voice Be Heard</p> */}
        </div>
        <div>
          <a href="https://www.kingsch.at/p/cHlYQXN">
            <i className="fa-solid fa-crown"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100068557883997&mibextid=ZbWKwL">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/theofficialteensvoice/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://youtube.com/@teensvoiceacademy8089?si=T0d2kf3BYA4cnRBJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="buttom">
        <div>
          <h4>TeensVoice</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/scholarship">Scholarship</Link>
          <a href="https://www.kingsforms.online/teensvoice-community">
            Join our Community
          </a>
          {/* <Link to="/extraveganza">Competition</Link> */}
        </div>

        <div>
          <h4>Connect with us</h4>
          <Link to="/contact">Contact Page</Link>
          <a href="https://t.me/+GCvTm1rCWrswYTI0">Telegram</a>
          <a href="https://wa.me/2348066400348">WhatsApp</a>
          <a href="mailto:teensvoiceacademy@gmail.com">Email</a>
        </div>

        <div>
          <h4>Policy</h4>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/Volunteerpolicy">Volunteer Policy</Link>
          {/* <Link to="/">PastorChris Good-deeds</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;


