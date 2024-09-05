import React from 'react'
import Page1 from "../../media/about-banner-1.jpg";
import Page2 from "../../media/about-banner-2.jpg";
import "./Rules.css"
function Rules() {
  return (
   <div >
      <section class="rules">
        <div class="row">
           
           <div class="rules-col">
              <h1> General Rules of Engagement</h1>
            
              <ul className="rules__icons">
                 <li>
                 <i className="fa-soli fa-square-chec">1.</i>
                    <span>The language of the contest is English only.</span>
                 </li>
                 <li>
                 <i className="fa-soli fa-square-chec">2.</i>
                 <span>Greetings & introduction of your Stage Presentation.</span>
                 </li>
                 <li>
                 <i className="fa-sold fa-square-chec">3.</i>
                 <span>Each competitor should stick to the time given, which is 3 minutes duration.</span>
                 </li>
                 <li>
                 <i className="fa-sold fa-square-chec">4.</i>
                 <span>A decent dress code/physical appearance.</span>
                 </li>
                 <li>
                 <i className="fa-sold fa-square-chec">5.</i>
                 <span> In Presenting,we look out for these:</span>
                 </li>
                  <div className='rules_div'>
                     <p >
                        <i className="fa-sp fa-square-chec">✔</i>
                        <span >
                        Audience contact
                        </span>
                     </p>
                     <p >
                     <i className="fa-soli fa-square-chec">✔</i>
                     <span > Mannerism.</span>
                     </p>{" "}
                     <p>
                     <i className="fa-soli fa-square-chec">✔</i>
                     <span > Ability to keep your audience engaged throughout your presentation. </span>
                     </p>{" "}
                     <p>
                     <i className="fa-soli fa-square-chec">✔</i>
                     <span >
                        The Richness/originality of your presentation.
                     </span>
                     </p>
                     <p>
                     <i className="fa-soli fa-square-chec">✔</i>
                     <span >
                        Your Wow-Factor.
                     </span>
                     </p>
                  </div>
              
              </ul>
           </div>
           <div class="rules-col">
              <img src={Page2}/>
           </div>
        </div>
     </section>
   </div>
  )
}

export default Rules