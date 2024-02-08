import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Maincontact.css";

const Maincontact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mapSrc, setMapSrc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mapSource =
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.327414045559!2d3.3672845!3d6.606174900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924d99012707%3A0x8ff054e8edc393d3!2sChrist%20Embassy%20LCA%20Car%20Park!5e0!3m2!1sen!2sng!4v1705794910458!5m2!1sen!2sng";

        setMapSrc(mapSource);
      } catch (error) {
        console.error("Error fetching map source:", error);
      }
    };

    fetchData();
  }, []);

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
      const response = await axios.post("/signup", formData);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="main">
      <div className="main__container">
        <div className="form__input-box">
          <form
            action="https://formspree.io/f/mleqgbzv"
            method="POST"
            onSubmit={handleSubmit}
            className="contact__form"
          >
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

      <div className="form__text-box">
        <p>Send us a mail:</p>
        <i
          className="fa-solid fa-envelope"
          style={{ color: "lightblue" }}
        ></i>{" "}
        <a href="mailto:info@teensvoice.org" style={{ color: "black" }}>
          info@teensvoice.org
        </a>{" "}
        <br /> <br />
        <p>Click the link below to call us:</p>
        <a href="tel:+2348066400348" style={{ color: "black" }}>
          Call Now: +234 806 640 0348
        </a>
      </div>
    </div>
  );
};

export default Maincontact;
