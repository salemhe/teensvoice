import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Popup.css";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Disable scrolling
    }, 5000); // Popup will appear after 5 seconds (5000 milliseconds)

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling when popup is closed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/signup", {
        email,
      }); // Send email data to signup endpoint
      console.log("Response:", response.data);
      handleClose(); // Close the popup after successful submission
    } catch (error) {
      console.error("Error submitting email:", error);
      // Handle error
    }
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <button className="close" onClick={handleClose}>
            ×
          </button>
          <div className="popup-content">
            <h2>Subscribe to Our Mailing List</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
         </div>
      )}
      {isOpen && <style>{`body { overflow: hidden; }`}</style>}
    </>
  );
}

export default Popup;







