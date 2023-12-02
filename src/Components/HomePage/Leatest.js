import React from "react";
import CartProductFeature from "./Uilts/CarouselProductFeature";

const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
const SLIDE_COUNT = 16;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Leatest = () => {
  return (
    <>
      <div className="latest__component">
        {/*  */}
        <div className="showroom__product pt-[129px] pr-[130px] pl-[130px] pb-[137px]">
          {/* Section Featured pr-[240px]*/}
          <div className="section__feature">
            <div className="text-center font-JosefinSansBold text-[42px] leading-normal not-italic text-offblue pb-[48px]">
              Featured Products
            </div>
            <div className="list__products w-[1168px] justify-center">
              <CartProductFeature
                slides={SLIDES}
                options={OPTIONS}
              ></CartProductFeature>
            </div>
          </div>
        </div>
      </div>

      <div className="latest__component">
        {/*  */}
        <div className="showroom__product pt-[129px] pr-[130px] pl-[130px] pb-[137px]">
          {/* Section Featured pr-[240px]*/}
          <div className="section__feature">
            <div className="text-center font-JosefinSansBold text-[42px] leading-normal not-italic text-offblue pb-[48px]">
            Leatest Products
            </div>
            <div className="list__products w-[1168px] justify-center">
              {/* <CartProductFeature
                slides={SLIDES}
                options={OPTIONS}
              ></CartProductFeature> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
