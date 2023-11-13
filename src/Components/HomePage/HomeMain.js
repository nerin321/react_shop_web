import React from "react";
import "./HomeMain.css";
import Carousels from "./Uilts/Carousel";

export const HomeMain = () => {
  let slides = [
    "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png",
    "https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/02/07/19/50/mountaineer-1185474_1280.jpg",
  ];
  return (
    <div>
      <div className="carousels__contain w-full m-auto">
        <Carousels slides={slides}></Carousels>
      </div>
    </div>
  );
};
