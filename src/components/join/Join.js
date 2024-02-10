import React, { useState } from "react";
import "./Join.css";
import axios from "../axios";

const Join = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    gender: "male",
    interests: "entrepreneurship",
    country: "",
    city: "",
    postalCode: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fullName = `${formData.fname} ${formData.lname}`;

      const response = await axios.post("/signup", {
        ...formData,
        name: fullName,
      });

      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="body-container">
      <div className="container">
        <header>Join Our Community</header>

        <form className="form" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="input-box">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter first name"
              value={formData.fname}
              onChange={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
              required
            />
          </div>

          {/* Last Name */}
          <div className="input-box">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter last name"
              value={formData.lname}
              onChange={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
              required
            />
          </div>

          {/* Phone Number & Email Address */}
          <div className="colunm">
            <div className="input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
                maxLength="15"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Gender Options */}
          <div className="gender-box">
            <h3 className="form-letter">Gender</h3>
            <div className="gender-option">
              {/* Male */}
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={() => setFormData({ ...formData, gender: "male" })}
                />
                <label htmlFor="check-male">Male</label>
              </div>

              {/* Female */}
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={() =>
                    setFormData({ ...formData, gender: "female" })
                  }
                />
                <label htmlFor="check-female">Female</label>
              </div>
            </div>
          </div>

          {/* Interests Options */}
          <div className="gender-box">
            <h3 className="form-letter">What are your interests?</h3>
            <div className="gender-option">
              {/* Films & Creative Arts */}
              <div className="gender">
                <input
                  type="radio"
                  id="check-films"
                  name="interests"
                  value="films/creative-arts"
                  checked={formData.interests === "films/creative-arts"}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      interests: "films/creative-arts",
                    })
                  }
                />
                <label htmlFor="check-films">Films & Creative Arts</label>
              </div>

              {/* Innovations & Tech */}
              <div className="gender">
                <input
                  type="radio"
                  id="check-tech"
                  name="interests"
                  value="innovations-tech"
                  checked={formData.interests === "innovations-tech"}
                  onChange={() =>
                    setFormData({ ...formData, interests: "innovations-tech" })
                  }
                />
                <label htmlFor="check-tech">Innovations & Tech</label>
              </div>

              {/* Designers & Creatives */}
              <div className="gender">
                <input
                  type="radio"
                  id="check-designers"
                  name="interests"
                  value="designers-creatives"
                  checked={formData.interests === "designers-creatives"}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      interests: "designers-creatives",
                    })
                  }
                />
                <label htmlFor="check-designers">Designers & Creatives</label>
              </div>

              {/* Admin & Copy Writers */}
              <div className="gender">
                <input
                  type="radio"
                  id="check-admin"
                  name="interests"
                  value="admin-copywriters"
                  checked={formData.interests === "admin-copywriters"}
                  onChange={() =>
                    setFormData({ ...formData, interests: "admin-copywriters" })
                  }
                />
                <label htmlFor="check-admin">Admin & Copy Writers</label>
              </div>
            </div>
          </div>

          {/* Address Input Box */}
          <div className="input-box address">
            <div className="select-box">
              <select
                name="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
              >
                <option value="">Country</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Benin">Benin</option>
                <option value="Botswana">Botswana</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Comoros">Comoros</option>
                <option value="Democratic Republic of the Congo">
                  Democratic Republic of the Congo
                </option>
                <option value="Djibouti">Djibouti</option>
                <option value="Egypt">Egypt</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Ghana">Ghana</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Kenya">Kenya</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Mali">Mali</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibia">Namibia</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Sudan">Sudan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Togo">Togo</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Uganda">Uganda</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            <div className="colunm">
              {/* City Input Field */}
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
              />
              {/* Postal Code Input Field */}
              <input
                type="text"
                name="postalCode"
                placeholder="Enter your postal code"
                value={formData.postalCode}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
