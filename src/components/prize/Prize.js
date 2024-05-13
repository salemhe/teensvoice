import React from 'react'
import Page1 from "../../media/hunt.png";
import Page2 from "../../media/about-banner-2.jpg";
import "./Prize.css"
function Prize() {
  return (
   <div >
 <section class="about-us">
      <div class="row">
         <div class="about-col">
            <img src={Page1}/>
         </div>
         <div class="about-col">
            <h1> TeensVoice is sure to provide several opportunities for you...</h1>
            <p className='prize_p'>Teensvoice is on a mission to discover the most talented teenager 
               on planet earth, Whether you're a singer, dancer, musician, poet, 
               comedian, magician, or have a unique talent and you are within 
               the age bracket of 13 to 20 years, we are here for you.
            </p>
            <h4>
               A platform to showcase your talent like never before. You stand a chance to win:
            </h4>
            <ul className="prize__icons">
               <li>
               <i className="fa-solid fa-square-check"></i>
                  <span>200,000 1st Prize,</span>
               </li>
               <li>
               <i className="fa-solid fa-square-check"></i>
               <span>150,000 2nd Prize and</span>
               </li>
               <li>
               <i className="fa-solid fa-square-check"></i>
               <span>100,000 3rd Prize</span>
               </li>
               <div className='prize_div'>
                  <li>
                     <i className="fa-soli fa-square-chec">-</i>
                     <span>
                        Branded items and certification of participation for all attempted competitors.
                     </span>
                  </li>
                  <li>
                  <i className="fa-soli fa-square-chec">-</i>
                  <span> Giveaway for general audience.</span>
                  </li>{" "}
                  <li>
                  <i className="fa-soli fa-square-chec">-</i>
                  <span> Mentorship and guidance from Senior members  of the Prestigious Loveworld Films and Arts Department. </span>
                  </li>{" "}
                  <li>
                  <i className="fa-soli fa-square-chec">-</i>
                  <span>
                     A community of like-minded creatives who will  inspire and support you to reach greatest height possible
                  </span>
                  </li>
               </div>
            
            </ul>
         </div>
         
      </div>
   </section>
 </div>
  )
}

export default Prize