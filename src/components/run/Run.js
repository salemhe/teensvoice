import React from 'react'
import "./Run.css"
import Page1 from "../../media/about-banner-1.jpg";
import Page2 from "../../media/about-banner-2.jpg";
function Run() {
  return (
   <section className={"course"}>
      <h1 className="font-bold text-[#131316] md:text-4xl text-xl mb-[10px] text-center">
         How the Competition would run
      </h1>
      <p className="text-[15px] font-[500] sm:mb-5 text-[#56616B] leading-6 text-center">
         All contestants are meant to go through 3 stages of qualification
      </p>

      <div className={"row"}>
        <div
          className={"contentWrap" }
        >
          <div className="content_img">
            <img src={Page1} alt="" className="rounded-t-md" />
          </div>
          <h3
            className="h3"   
          >
            Preliminaries
          </h3>
          <ul className="p">
            <li>
                  <i className="fa-soli fa-square-chec">-</i>
               <span>
                  Holding on the 18th of May 2024
               </span>
               </li>
               <li>
               <i className="fa-soli fa-square-chec">-</i>
               <span> time: 10:00am</span>
               </li>{" "}
               <li>
               <i className="fa-soli fa-square-chec">-</i>
               <span> Venue: Corner Stone Green Oregun Ikeja, Lagos. </span>
               </li>{" "}
          </ul>
        </div>
        <div
          className={"contentWrap" }
        >
          <div className="content_img">
            <img src={Page1} alt="" className="rounded-t-md" />
          </div>
          <h3
            className="h3"  
          >
            Semi finals
          </h3>
          <ul className="p">
               <li>
                  <i className="fa-soli fa-square-chec">-</i>
                  <span>
                     Holding on the 25th of May 2024
                  </span>
               </li>
               <li>
               <i className="fa-soli fa-square-chec">-</i>
               <span> time: 9:00am</span>
               </li>{" "}
               <li>
               <i className="fa-soli fa-square-chec">-</i>
               <span> Venue: Corner Stone Green Oregun Ikeja, Lagos. </span>
               </li>{" "}
          </ul>
        </div>
        <div
          className={"contentWrap" }
        >
          <div className="content_img">
            <img src={Page2} alt="" className="rounded-t-md" />
          </div>
          <h3
            className="h3"  
          >
            Grand Finale
          </h3>
          <ul className="p">
            <li>
                  <i className="fa-soli fa-square-chec">-</i>
               <span>
                  Holding on the 26th of May 2024
               </span>
               </li>
               <li>
               <i className="fa-soli fa-square-chec">-</i>
               <span> time: 9:00am</span>
               </li>{" "}
               <li>
               <i className="fa-soli fa-square-chec">-</i>
               <span> Venue: Conerstone Event Center, Olarewanju Street Off Billings Way Oregun. </span>
               </li>{" "}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Run