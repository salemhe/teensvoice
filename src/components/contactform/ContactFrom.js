// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import "./ContactForm.css";
// import axios from "../axios";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [mapSrc, setMapSrc] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const mapSource =
//           "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.327414045559!2d3.3672845!3d6.606174900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924d99012707%3A0x8ff054e8edc393d3!2sChrist%20Embassy%20LCA%20Car%20Park!5e0!3m2!1sen!2sng!4v1705794910458!5m2!1sen!2sng";

//         setMapSrc(mapSource);
//       } catch (error) {
//         console.error("Error fetching map source:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/signup", formData);
//       navigate("/");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div className="contactform">
//       <div className="contact__container">
//         <div className="form__container">
//           <h3>Send Us a Message</h3>
//           <form onSubmit={handleSubmit} className="contact__form">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email..."
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="message"
//               cols="30"
//               rows="10"
//               placeholder="Write Message.."
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//             <input type="submit" value="Send" className="send__button" />
//           </form>
//         </div>

//         <div className="map">

//            <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.327414045559!2d3.3672845!3d6.606174900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924d99012707%3A0x8ff054e8edc393d3!2sChrist%20Embassy%20LCA%20Car%20Park!5e0!3m2!1sen!2sng!4v1705794910458!5m2!1sen!2sng"

//           <iframe
//             title="map"
//             src={mapSrc}

//             width="600"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [mapSrc, setMapSrc] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

        <div className="map">
          <iframe
            title="map"
            src={mapSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
