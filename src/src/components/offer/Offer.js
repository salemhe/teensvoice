import React from "react";
import "./Offer.css";


const Offer = () => {
    return (
      <div className="container">
        <div className="main">
          <div className="box__icons">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <div className="box__text">
            <h3>Empowerment</h3>
            <p>
              Build a platform dedicated to empowering youth by providing
              essential skills for real-world success.
            </p>
          </div>
        </div>

        <div className="main">
          <div className="box__icons">
            <i className="fas fa-tools"></i>
          </div>

          <div className="box__text">
            <h3>Skill Deveopment Programs</h3>
            <p>
              Access a diverse range of skill-building courses to equip you with
              practical knowledge in: tech, entrepreneurship arts & more.
            </p>
          </div>
        </div>

        <div className="main">
          <div className="box__icons">
            <i className="fas fa-users"></i>
          </div>

          <div className="box__text">
            <h3>Community Engagement</h3>
            <p>
              Connect with passionate individuals, mentors, and professionals.
              Engage in discussions, share experiences, and collaborate on
              projects for positive change.
            </p>
          </div>
        </div>

        <div className="main">
          <div className="box__icons">
            <i className="fas fa-hands-helping"></i>
          </div>

          <div className="box__text">
            <h3>Opportunities and support</h3>
            <p>
              Explore tailored internships, scholarships, and job opportunities
              aligned with your interests. Benefit from our supportive network,
              providing guidance and mentorship throughout your journey.
            </p>
          </div>
        </div>
        </div>
    );
};

export default Offer;