import React from "react";
import { useState } from "react";
import heartBlack from "../assets/love.png";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    //toggle
    setIsActive((current) => !current);
  };

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={house.imageLg} alt="" />
      <div className="mb-4 ml-7 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3 inline-block">
          {house.type}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
          {house.country}
        </div>
      </div>

      <div className="mb-4  ml-7 flex gap-x-14">
        <div className="text-lg font-semibold text-violet-600 mb-4">
          $ {house.price}
          <span className="text-sm text-gray-600 mb-4">/month</span>
        </div>

        <div>
          <img
            className="heart"
            style={{
              width: "25px",
              height: "25px",
              border: "1px solid black",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: isActive ? "red" : "",
            }}
            src={heartBlack}
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="text-lg  ml-7 font-semibold max-w-[260px]">
        {house.address}
      </div>
      <div className="flex  ml-7 gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiBed />
          </div>
          <div className="text-base">{house.bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiBath />
          </div>
          <div className="text-base">{house.bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiArea />
          </div>
          <div className="text-base">{house.surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
