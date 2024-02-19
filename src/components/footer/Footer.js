import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TeensVoice</h1>
          <p>Let Your Voice Be Heard</p>
        </div>
        <div>
          <Link to="https://www.kingsch.at/p/cHlYQXN">
            <i class="fa-solid fa-crown"></i>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100068557883997&mibextid=ZbWKwL">
            <i className="fa-brands fa-facebook"></i>
          </Link>

          <Link
            to="https://www.instagram.com/theofficialteensvoice/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>

          <Link
            to="https://youtube.com/@teensvoiceacademy8089?si=T0d2kf3BYA4cnRBJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </Link>

          {/* <Link to="/">
            <i class="fa-brands fa-telegram"></i>
          </Link> */}
        </div>
      </div>

      <div className="buttom">
        <div>
          <h4>TeensVoice</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/programs">Programs</Link>
          <Link to="https://www.kingsforms.online/teensvoice-community">Join our Community</Link>
          {/* <Link herf="/">Sponsorship</Link> */}
        </div>

        <div>
          <h4>Connect with us</h4>
          <Link to="/contact">Contact Page</Link>
          <Link to="https://t.me/+GCvTm1rCWrswYTI0">Telegram</Link>
          <Link to="https://wa.me/2348066400348">WhatsApp</Link>
          <Link to="mailto:teensvoiceacademy@gmail.com">Email</Link>
        </div>

        {/* <div>
          <h4>Help</h4>
          <Link to="/">Support</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Troubleshooting</Link>
          <Link to="/">All vesions</Link>
        </div> */}

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




