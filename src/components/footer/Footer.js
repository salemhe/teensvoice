import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TeensVoice</h1>
          <p>Let Your Voice Be Heard</p>
        </div>
        <div>
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

          {/* <a href="/">
            <i class="fa-brands fa-telegram"></i>
          </a> */}
        </div>
      </div>

      <div className="buttom">
        <div>
          <h4>TeensVoice</h4>
          <a href="/blog">Blog</a>
          <a href="/volunteer">Volunteer</a>
          <a href="/programs">Programs</a>
          <a href="/signup">Join our Community</a>
          {/* <a herf="/">Sponsorship</a> */}
        </div>

        <div>
          <h4>Connect with us</h4>
          <a href="/contact">Contact Page</a>
          <a href="https://t.me/+GCvTm1rCWrswYTI0">Telegram</a>
          <a href="https://wa.me/2348066400348">WhatsApp</a>
          <a href="mailto:teensvoiceacademy@gmail.com">Email</a>
        </div>

        {/* <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact</a>
          <a href="/">Troubleshooting</a>
          <a href="/">All vesions</a>
        </div> */}

        <div>
          <h4></h4>
          <a href="/privacypolicy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;




