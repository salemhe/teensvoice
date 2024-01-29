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
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/teensvoiceacademy?igsh=MWVkbWIzYWQ3cXRnNA=="
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
          <a herf="/">Sponsorship</a>
        </div>

        <div>
          <h4>Connect with us</h4>
          <a href="/">Telegram</a>
          <a href="whatsapp://send?phone=08066400348">Whats'app</a>
          <a href="mailto:teensvoice@gmail.com">Email</a>
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
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;




