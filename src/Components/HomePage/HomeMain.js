import React from "react";
import "./HomeMain.css";
import EmblaCarousel from "./Uilts/Carousel";
import "../HomePage/Uilts/css/base.css";
import "../HomePage/Uilts/css/sandbox.css";
import "../HomePage/Uilts/css/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const HomeMain = () => {
  return (
    <>
      <section className="sandbox__carousel embla">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </>
  );
};
