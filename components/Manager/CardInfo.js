import React from "react";

const CardInfo = ({ value, text, icon }) => {
  return (
    <div className="container text-black flex justify-around mt-10">
      <div className="text-6xl">{icon}</div>
      <div>
        <h1 className=" text-3xl font-bold">{value}</h1>
        <h1 className=" text-2xl font-semibold">{text}</h1>
      </div>
    </div>
  );
};

export default CardInfo;
