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
          <a href="/">Changing</a>
          <a href="/">Status</a>
          <a href="/">Lisence</a>
          <a href="/">All Vesions</a>
        </div>

        <div>
          <h4>Work</h4>
          <a href="/">Telegram</a>
          <a href="/">Isssue</a>
          <a href="/">Events</a>
          <a href="/">What's app</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact</a>
          <a href="/">Troubleshooting</a>
          <a href="/">All vesions</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;



// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer-container">
//         <div className="footer-content-container">
//           <div className="footer-content flex-column align-center padding-medium">
//             <ul className="flex-column align-center">
//               <li className="margin-medium">
//                 <a href="#" className="footer-link">
//                   <i className="fab fa-facebook"></i>
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <a href="#" className="footer-link">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <a href="#" className="footer-link">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <a href="#" className="footer-link">
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-content padding-medium align-center gap-medium">
//             <h3 className="text-align-center">Quick Links</h3>
//             <ul className="info">
//               <li className="margin-medium">
//                 <a href="/aboutus" className="footer-link">
//                   About Us
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <a href="/faq" className="footer-link">
//                   Blogs
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <a href="/contactus" className="footer-link">
//                   Portfolio
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <a href="/faq" className="footer-link">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-content">
//             <ul className="flex-1 align-center">
//               <li className="margin-medium">
//                 <i className="fab fa-mail-f"></i>
//                 <a href="#" className="footer-link">
//                   <i className="fa-solid fa-envelope"></i> info@example.com
//                 </a>
//               </li>
//               <li className="margin-medium">
//                 <i className="fab fa-call-f"></i>
//                 <a href="#" className="footer-link">
//                   <i className="fa-solid fa-phone"></i> +92 345 67890
//                 </a>
//                 1
//               </li>
//               <li className="margin-medium">
//                 <i className="fab fa-plane-f"></i>
//                 <a href="#" className="footer-link">
//                   <i className="fa-solid fa-paper-plane"></i> House # 456, Road
//                   # 789
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
