import React, { useState } from "react";
import "./Gallery.css"; 
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "../../media/99.jpg";
import Img2 from "../../media/crowd.jpg";
import Img3 from "../../media/88.jpg";
import Img4 from "../../media/77.jpg";
import Img5 from "../../media/66.jpg";
import Img6 from "../../media/22.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
//   
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <h1>Our Gallery</h1>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="Image" />
        <CloseIcon
          onClick={() => setModel(false)}
          style={{ fontSize: "2em", cursor: "pointer" }} // Adjust the fontSize as needed
        />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ width: "100%" }}
                alt={`gallery-img-${item.id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;



