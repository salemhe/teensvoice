import React from "react";
import './Blogpost.css';
import img1 from '../../media/Cybercrime.jpg';
import img2 from "../../media/drugabuse.jpg";
import img3 from "../../media/orientation.jpg";
import img4 from "../../media/firstlovepro.png";

const Blogpost = () => {
    return (
      <div id="blog">
        <div className="blog-heading">
          <span>Recent Posts</span>
          <h3>Our Blog Post</h3>
        </div>

        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={img4} alt="Blog" />
            </div>

            <div className="blog-text">
              <span>Happening on Feburary 14, 2024 !</span>
              <a href="" className="blog-title">
                MY FIRST LOVE 💕
              </a>
              <p>
                “My First Love” is a movie premiere & concert aimed at
                deculturing the minds of young people from the stereotypes
                associated with the February 14th period and equipping them with
                the right information they require to make wise choices
                channeled towards living a purposeful life.
              </p>
              <a href="/firstlove">Read More</a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={img2} alt="Blog" />
            </div>

            <div className="blog-text">
              <span>5 September 2023 / Drug Abuse</span>
              <a href="" className="blog-title">
                Breaking the Chains: A Teenager's Guide to Overcoming Drug Abuse
              </a>
              <p>
                Drug abuse might seem like a temporary escape, but it often
                becomes a chain that's difficult to break. If you're feeling
                tired of the cycle of drug abuse and ready for a change, this
                blog post is for you.
              </p>
              <a href="/drugabuse">Read More</a>
            </div>
          </div>

          <div className="blog-box">
            <div className="blog-img">
              <img src={img1} alt="" />
            </div>

            <div className="blog-text">
              <span>18 July 2023 / Cyber Crime</span>
              <a href="" className="blog-title">
                Steering Clear of Cybercrime
              </a>
              <p>
                The internet has become an integral part of our lives, opening
                avenues for learning, connecting, and expressing ourselves.
                However, it's crucial to recognize the responsibility that comes
                with this digital freedom.
              </p>
              <a href="/cybercrime">Read More</a>
            </div>
          </div>

          {/* <div className="blog-box">
            <div className="blog-img">
              <img src={img3} alt="Blog" />
            </div>

            <div className="blog-text">
              <span>2 November 2023 / Geneder Orientation</span>
              <a href="" className="blog-title">
                Gender and Sexual Orientation
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam tempora unde facere.
              </p>
              <a href="#">Read More</a>
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default Blogpost;
