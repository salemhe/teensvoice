import React from "react";
import img1 from "../../media/love.jpg";

const Upcoming = () => {
    return (
      <div className="blog__container">
        <div className="box__container">
          <div className="box__one">
            <h2>MY FIRST LOVE 💕</h2> <br />
            <p>
              <i>Happening on Feburary 14, 2024 !</i>
            </p>
            <hr /> <br />
            <img src={img1} alt="" />
            <p>
              “My First Love” is a movie premiere & concert aimed at deculturing
              the minds of young people from the stereotypes associated with the
              February 14th period and equipping them with the right information
              they require to make wise choices channeled towards living a
              purposeful life.
            </p>{" "}
            <br /> <br />
            <p>
              {" "}
              The program is a collaboration between the{" "}
              <b>TEENS VOICE AND THEATRIC PLANET</b> and would be characterized
              by the launch of subsequent programs and innovations from the two
              groups.
            </p>{" "}
            <br />
            <h4>Program Details:</h4>
            <p>
              • Target Audience: Ages 14 & above <br />• Date: Tuesday 14th of
              February 2024. <br />• Time: 9:00am till 2pm
            </p>{" "}
            <br />
            <h4>Program Highlights</h4>
            <p>
              📍Movie Premiere <br />
              📍Concerts <br />
              📍Symposium <br />
              📍 Launch of the Lagos City High School Festival of Music & Arts{" "}
              <br />
              📍 Games & Raffle Draws
              <br />
              📍 Corporate brand/products marketing and advertising. <br />
              📍 Varieties of performances and lots more...
            </p>{" "}
            <br />
            <p>
              REGISTRATION is Free but Mandatory:{" "}
              <a href="http://bit.ly/My-first-love"> REGISTER !</a>
            </p>{" "}
            <br />
            <h4>
              For More info contact us on :{" "}
              <a href="tel:+2349070214092">+2349070214092</a>
            </h4>{" "}
            <br />
            <p>
              Follow us for more updates <br /> KingsChat:{" "}
              <a href="https://www.kingsch.at/p/cHlYQXN">@Teensvoice_</a>
              <br />
              Instagram:{" "}
              <a href="https://www.instagram.com/theofficialteensvoice/?hl=en">
                @theofficialteensvoice{" "}
              </a>
              <a href="https://www.instagram.com/theatricplanetint?igsh=MXZ0b2k4c2loc2wxaw==">
                @theatricplanetint
              </a>
            </p>{" "}
            <br />
          </div>

          <div className="box__two">
            <p>
              <i>
                "Teens Voice is a platform created to give expression to their
                'unique' voice and for the empowerment and transformation of
                young people".
              </i>
            </p>{" "}
            <br />
            <button>
              <a href="/signup">Join our community</a>
            </button>
            <div className="social__links">
              <a href="https://t.me/+GCvTm1rCWrswYTI0">
                <i className="fa-brands fa-telegram"></i>
              </a>

              <a
                href="https://www.instagram.com/theofficialteensvoice/?hl=en"
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
            </div>
          </div>
        </div>
      </div>
    );
}

export default Upcoming;