import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";
import imageByIndex from "./Images";

function Carousels(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container relative">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={imageByIndex(index).image}
                  alt="Your alt text"
                  height={400}
                />
                <div className="absolute content__slide top-2/4 left-2/4 -translate-y-mid -translate-x-mid w-full">
                  <div className="flex">
                    <div className="w-[380px] relative">
                      <div className="absolute -right-[40px] -top-[76px] left-[170px]">
                        <img
                          src={imageByIndex(index).preImage}
                          alt="Your alt text"
                        />
                      </div>
                    </div>
                    <div className="w-[660px]">
                      <p className="slide__subTitle font-LatoBold not-italic font-bold text-subTitle leading-28 text-pink">
                        {imageByIndex(index).content}{" "}
                      </p>
                      <p className="slide__mainTitle font-JosefinSansBold not-italic text-mainTitle tracking-mainTitleLS font-bold">
                        {imageByIndex(index).mainTitle}
                      </p>
                      <p className="w-[559px] slide__desc leading-28 font-LatoRegular font-medium text-subTitle not-italic text-coolgrey mb-7">
                        {imageByIndex(index).description}
                      </p>
                      <button
                        type="button"
                        class="focus:ring min-w-widthBtnSlider hover:bg-white hover:text-pink hover:rin font-JosefinSansRegular font-medium text-17px bg-pink min-h-heightBtnSlider text-white"
                      >
                        Shop Now
                      </button>
                    </div>
                    <div className="w-[380px] relative">
                      <div className="absolute top-2/4 left-2/4 -translate-y-mid -translate-x-mid w-full">
                        <img
                          src={imageByIndex(index).subImage}
                          alt="Your alt text"
                          className="w-[700px] h-[350px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
}

export default Carousels;
