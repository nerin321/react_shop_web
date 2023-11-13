import React from "react";

function Carousels(props) {
  return (
    <div>
      {props.slides && props.slides.map((s, i) => {
        return <img className="w-full" src={s} alt={"Carousel" + i} key={i} />;
      })}
    </div>
  );
}

export default Carousels;
