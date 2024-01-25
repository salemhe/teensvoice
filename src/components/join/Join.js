import React from "react";
import "./Join.css";

const Join = () => {
    return (
      <div className="body-container">
        <div className="container">
          <header>Sign Up</header>

          <form
            // action="https://formspree.io/f/mleqgbzv"
            className="form"
            // method="POST"
          >
            <div className="input-box">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter first name"
                required
              />
            </div>

            <div className="input-box">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter last name"
                required
              />
            </div>

            <div className="colunm">
              <div className="input-box">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  maxLength="15"
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
                  required
                />
              </div>
            </div>

            <div className="gender-box">
              <h3 className="form-letter">Gender</h3>
              <div className="gender-option">
                <div className="gender">
                  <input
                    type="radio"
                    id="check-male"
                    name="gender"
                    value="male"
                    defaultChecked
                  />
                  <label htmlFor="check-male">Male</label>
                </div>

                <div className="gender">
                  <input
                    type="radio"
                    id="check-female"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="check-female">Female</label>
                </div>
              </div>
            </div>

            <div className="gender-box">
              <h3 className="form-letter">What are your interests?</h3>
              <div className="gender-option">
                <div className="gender">
                  <input
                    type="radio"
                    id="check-entrepreneurship"
                    name="interests"
                    value="entrepreneurship"
                    defaultChecked
                  />
                  <label htmlFor="check-entrepreneurship">
                    Entrepreneurship
                  </label>
                </div>

                <div className="gender">
                  <input
                    type="radio"
                    id="check-entertainment"
                    name="interests"
                    value="entertainment"
                  />
                  <label htmlFor="check-entertainment">Entertainment</label>
                </div>

                <div className="gender">
                  <input
                    type="radio"
                    id="check-it"
                    name="interests"
                    value="IT"
                  />
                  <label htmlFor="check-it">IT</label>
                </div>
              </div>
            </div>

            <div className="input-box address">
              <div className="select-box">
                <select name="country">
                  <option value="">Country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
              <div className="colunm">
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Enter your postal code"
                  required
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
};

export default Join;



