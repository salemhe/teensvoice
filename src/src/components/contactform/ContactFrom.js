import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the server
      const response = await axios.post(
        "https://formspree.io/f/mleqgbzv",
        formData
      );

      // Redirect to the thank-you page upon successful submission
      navigate("/thanks");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contactform">
      <div className="contact__container">
        <div className="form__container">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write Message.."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Send" className="send__button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
