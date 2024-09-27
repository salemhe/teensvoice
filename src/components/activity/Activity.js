import React from "react";
import '../activity/Activity.css';
import img1 from "../../media/lagos-festival.jpg";

const Activity = () => {
    return (
      <div className="activity__container">
        <div className="activity__title">
          <div className="activity__image">
            <img src={img1} alt="Banner" />
          </div>
        </div>

        <div className="activity__text">
          <h3>Upcoming Program ALERT !!</h3>
          <h4>LAGOS CITY HIGH SCHOOL FESTIVAL 🌟</h4>
          <p>
          The Lagos City High School Festival of Music & Arts is a grand celebration of Nigeria's youth, creativity, and cultural diversity. Organized in honor of Nigeria’s Independence Day, this first of its kind festival provides a dynamic platform for young people to express themselves through various creative outlets and contribute positively to the future of our nation.
          </p>{" "}
          <br />
          <h4>Program Details</h4>
          <p>
            {/* • Target Audience: Teens Voice Ambassadors, TeeVo
            club leaders, school prefects, class captains and assistants */}
            • Date: Wednesday 9th of October 2024. <br /><br />• Time: 10:00am Prompt
          </p>{" "}
          <br />
          <a
              href="https://lagos-city-high-school-festival.vercel.app/"
              rel="noopener noreferrer" 
            >Click here to register !!</a>
          {/* <p>
            <i>
              REGISTRATION is Free but Mandatory:{" "}
              <a href="http://bit.ly/My-first-love"> REGISTER !!</a>
            </i>
          </p> */}
        </div>
      </div>
    );
}

export default Activity;
// import React from "react";
// import './Activity.css';
// import img1 from "../../media/Teens Voice Summit.png";

// const Activity = () => {
//     return (
//       <div className="activity__container">
//         <div className="activity__title">
//           <div className="activity__image">
//             <img src={img1} alt="Banner" />
//           </div>
//         </div>

//         <div className="activity__text">
//           <h3>Upcoming Program ALERT !!</h3>
//           <h4>TEENS VOICE LEADERSHIP SUBMIT 🌟</h4>
//           <p>
//             Embark on a journey of growth and inspiration at our upcoming
//             leadership summit! 🌟 Join us as we explore the forefront of
//             innovation, connect with visionary leaders, and empower ourselves to
//             lead with purpose.
//           </p>{" "}
//           <br />
//           <h4>Program Details</h4>
//           <p>
//             • Target Audience: Teens Voice Ambassadors, TeeVo
//             club leaders, school prefects, class captains and assistants
//             <br /><br />• Date: Wednesday 8th of May 2024. <br /><br />• Time: 9:00am Prompt
//           </p>{" "}
//           <br />
//           {/* <p>
//             <i>
//               REGISTRATION is Free but Mandatory:{" "}
//               <a href="http://bit.ly/My-first-love"> REGISTER !!</a>
//             </i>
//           </p> */}
//         </div>
//       </div>
//     );
// }

// export default Activity;






// // import React from "react";
// // import "./Activity.css";

// // const Activity = () => {
// //   return (
// //     <div className="activity__container">
// //       <div className="activity__title">
// //         <div className="activity__video">
// //           <iframe
// //             width="560"
// //             height="315"
// //             src="https://www.youtube.com/embed/9u_9Vs63XN4?si=FYMif09VdfPDJ7Gq"
// //             title="YouTube video player"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //             allowFullScreen
// //           ></iframe>
// //         </div>
// //       </div>

// //       <div className="activity__text">
// //         <h3>Rewatch the LIVE Broaadcast !!</h3>
// //         <h4>MY FIRST LOVE 💕</h4>
// //         <p>
// //           “My First Love” is a movie premiere & concert aimed at deculturing the
// //           minds of young people from the stereotypes associated with the
// //           February 14th period and equipping them with the right information
// //           they require to make wise choices channeled towards living a
// //           purposeful life.{" "}
// //         </p>{" "}
// //         <br />
// //         {/* <h4>Program Details</h4>
// //         <p>
// //           • Target Audience: Ages 14 & above <br />• Date: Tuesday 14th of
// //           February 2024. <br />• Time: 9:00am till 2pm
// //         </p>{" "}
// //         <br /> */}
// //         <p>
// //           <i>
// //             Click this link to subscribe to our YouTube Channel:{" "}
// //             <a href="https://www.youtube.com/@teensvoiceacademy8089">
// //               {" "}
// //               Subscribe
// //             </a>
// //           </i>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Activity;

    
    