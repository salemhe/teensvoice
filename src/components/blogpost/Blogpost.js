import React from "react";
import './Blogpost.css';
import img from '../../media/100.jpg';

const Blogpost = () => {
    return (
      <div className="body-container">
        <div className="container">
          <h2>Blog Post</h2>
          <img src={img} />
          <br />
          <h3>Lorem ipsum dolor sit.</h3> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            labore ab, a adipisci minima nesciunt nihil architecto inventore,
            suscipit vitae iste sapiente tempora exercitationem dolorem quia
            eligendi similique aliquam. <br /> <br />
            Accusantium necessitatibus autem iste quae. Voluptates, eos
            praesentium, iure labore mollitia asperiores temporibus quibusdam
            quos quasi tempora molestiae dolorum laudantium veritatis, quis
            blanditiis neque assumenda ducimus eligendi incidunt impedit fugiat!
            Voluptate cumque quis ex distinctio accusamus rerum commodi, ipsum,
            soluta voluptatibus sapiente consectetur, maxime atque quidem labore
            quisquam. Perspiciatis, consequatur. Rem repellendus rerum
            accusantium ipsam! Ex aut quasi perspiciatis recusandae nobis illo,
            deleniti libero itaque. Placeat, sed dolor, perspiciatis aliquam
            odit. <br /> <br /> consectetur nobis totam maiores similique
            nesciunt? In laboriosam nobis rem temporibus sint suscipit quis
            maiores quos, ipsa ratione debitis ab dicta libero distinctio beatae
            autem cupiditate laborum inventore perferendis maxime commodi quo
            recusandae perspiciatis? Voluptates aliquam quaerat, quos totam,
            dolorum rem, recusandae molestiae vero possimus eius consectetur?
            Animi, ut?
          </p>
        </div>
      </div>

      // WOULD COME BACK TO WORK ON THE LAYOUT
    );
}

export default Blogpost;
