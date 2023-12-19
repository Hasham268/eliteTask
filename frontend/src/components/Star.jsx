import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars }) => {
  
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    // debugger;
    return (
      <span key={index} >
        {stars >= index + 1 ? (
          <FaStar color={"#ffc107"} className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return <div className="icon-style flex flex-row">{ratingStar}</div>;
};

export default Star;
