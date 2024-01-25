
import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contactform">
      <div className="contact__container">
        <div className="form__container">
          <h3>Send Us a Message</h3>
          <form action="" className="contact__form">
            <input type="text" placeholder="Your Name" required />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email..."
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Message.."
              required
            ></textarea>
            <input type="submit" value="Send" className="send__button" />
          </form>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.327414045559!2d3.3672845!3d6.606174900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924d99012707%3A0x8ff054e8edc393d3!2sChrist%20Embassy%20LCA%20Car%20Park!5e0!3m2!1sen!2sng!4v1705794910458!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;