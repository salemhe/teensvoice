import React from "react";
import "./Participate.css";
import Pro1 from "../../media/crowd.jpg";
import img2 from "../../media/mainlogo.png";

const Participate = () => {
  return (
    <div className="container-1">
      <div className="box">
        <div className="volunteer__box">
          <h2>🌟 Join Our Cause: Become a Volunteer! 🌟</h2> <br />
          <p>
            Are you passionate about making a positive impact in your community?
            Look no further – Teens Voice needs your skills, dedication, and
            enthusiasm! We're on a mission to create meaningful change, and we
            believe that volunteers like you can help us achieve it
          </p>{" "}
          <br />
          <h2>🤝 Why Volunteer With Us?</h2> <br />
          <p>
            By joining our team, you become a vital part of a thriving
            community-dedicated to making a difference. Whether you're
            interested in education, technology, music, dance or drama, we have
            diverse opportunities that align with your passion. Together, we can
            amplify our impact and create a ripple effect of positive change.
          </p>{" "}
          <br />
          <h2>Volunteer Opportunities</h2> <br />
          <p>
            Are you looking for ways to make a meaningful impact in your
            community? Consider volunteering your time and skills for various
            initiatives aimed at community development and empowerment. There
            are diverse opportunities where your contribution can make a
            significant difference:
          </p>{" "}
          <br />
          <p>1. Organizing Events</p>
          <p>2. Community Development Projects </p>
          <p>3. Fundraising</p>
          <p>4. Vocational Trainings</p>
          <p>5. Mentoring </p>
          <p>6. Teaching</p>
          <p>7. Professional Advice & Consultancy</p>
          <p>8. Free Professional Services</p>
          <p>9. Social Media Campaigns </p>
          <p>10. Networking & Referrals </p>
          <p>11. Volunteer to Write Blog Posts for Teens Voice </p> <br />
          <p>
            By volunteering your time, skills, and passion, you can play a vital
            role in building stronger, more resilient communities and creating
            positive change that benefits everyone.
          </p>
        </div>
        <div className="volunteer__img">
          <img src={Pro1} alt="people" />
        </div>
        <div className="volunteer__box">
          <h2>💼 What You Can Expect:</h2> <br />
          <p>✔ Weekly Engaging projects that align with your interests.</p>{" "}
          <br />
          <p>✔ A supportive and inclusive community.</p> <br />
          <p>
            ✔ Skill-building opportunities and professional development.
          </p>{" "}
          <br />
          <p>
            ✔ The satisfaction of contributing to a cause that matters.
          </p>{" "}
          <br />
          <br />
          <h2>📆 How to Get Involved:</h2> <br />
          <p>
            Signing up is easy! <br /> <br />
            Click on the link below to fill out our quick application form.👇🏼{" "}
            <br /> <br />
            <a href="https://www.kingsforms.online/form/respond/LWF-RG943121823743">
              <i style={{ color: "#04bade" }}>Volunteer !</i>
            </a>{" "}
            <p>
              (kindly read our{" "}
              <a href="/Volunteerpolicy">
                {" "}
                <u>
                  {" "}
                  <i>
                    {" "}
                    <b>Volunteer Policy</b>
                  </i>
                </u>
              </a>{" "}
              before you proceed)
            </p>{" "}
            <br />
            Join us in transforming ideas into action and be a catalyst for
            positive change!
          </p>{" "}
          <br />
          <br />
          <p>
            🚀 Let's make a difference together! Join us on this incredible
            journey as a volunteer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Participate;
