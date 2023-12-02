import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";

import "../Uilts/cssProductsFeature/baseProductsFeature.css";
import "../Uilts/cssProductsFeature/emblaProductsFeature.css";
import "../Uilts/cssProductsFeature/sanboxProductsFeature.css";
//* Image
import image1 from "../../../Asset/Products/product__1.png";
import image2 from "../../../Asset/Products/product__2.png";

//* List Data
let productsFeatured = [
  {
    image: image1,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "$42.00",
    listColor: "green red blue",
  },
  {
    image: image2,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "$42.00",
    listColor: "green red blue",
  },
  {
    image: image1,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "$42.00",
    listColor: "green red blue",
  },
  {
    image: image1,
    name: "Cantilever chair",
    code: "Code - Y523201",
    price: "$42.00",
    listColor: "green red blue",
  },
];

const imageByIndex = (index) =>
  productsFeatured[index % productsFeatured.length];

function CartProductFeature(props) {
  const { slides, options } = props;
  // 
  const [emblaRef, emblaApi] = useEmblaCarousel(options , [Autoplay()]);

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
      <div className="block mb-[53px]">
        <div className="embla__productsFeature w-[1167px] relative">
          <div className="embla__viewport__productsFeature" ref={emblaRef}>
            <div className="embla__container__productsFeature">
              {slides.map((index) => (
                <div className="shadow-borderCard bg-[#fff]" key={index}>
                  <div className="group box__container w-[270px] h-[361px] relative">
                    <div className="list__icon hidden group-hover:block  gap-6 absolute left-5 top-5">
                      <div className="flex">
                      {/* Cart Icon */}
                      <div className="icon__item group/item_icon hover:bg-[#EEEFFB] w-[30px] h-[30px] flex items-center rounded-full justify-center">
                        <ion-icon name="cart-outline" className="group-hover/item_icon:w-[19px] group-hover/item_icon:h-[19px] w-[17px] h-[17px]"></ion-icon>
                      </div>

                      {/* Heart Icon */}
                      <div className="icon__item group/item_icon hover:bg-[#EEEFFB] w-[30px] h-[30px] flex items-center rounded-full justify-center">
                        <ion-icon name="heart-outline" className="group-hover/item_icon:w-[19px] group-hover/item_icon:h-[19px] w-[17px] h-[17px]"></ion-icon>
                      </div>

                      {/* Search Icon */}
                      <div className="icon__item group/item_icon hover:bg-[#EEEFFB] w-[30px] h-[30px] flex items-center rounded-full justify-center">
                        <ion-icon name="search-outline" className="group-hover/item_icon:w-[19px] group-hover/item_icon:h-[19px] w-[17px] h-[17px]"></ion-icon>
                      </div>
                      </div>
                    </div>
                    <div className="container__image w-[270px] h-[236px] pt-[46px] pl-[51px] pr-[51px] pb-[12px] bg-[#F6F7FB]">
                      <div className="relative w-[178px] h-[178px] flex justify-center">
                        <img
                          className="shrink-0 group-hover:scale-065"
                          src={imageByIndex(index).image}
                          alt="Your alt text"
                        />
                        <button
                          type="button"
                          class="hidden rounded-[2px] bg-[#08D15F] text-[12px] pl-[13px] pr-[13px] pt-[9px] pb-[8px] w-[100px] h-[29px] absolute left-[50%] bottom-1 -translate-x-[50%] group-hover:block text-white  font-JosefinSansBold"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="w-[270px] h-[125px] group-hover:bg-[#2F1AC4] group-hover:text-white pt-[10px] pl-[72px] pr-[72px] pb-[17px]">
                      <div className="text-center text-pink font-LatoBold text-18px group-hover:text-white ">
                        {imageByIndex(index).name}
                      </div>
                      <div className="text-center text-[#151875] font-LatoBold font-medium text-14px group-hover:text-white">
                        {/* {imageByIndex(index).listColor.split(" ").forEach((e) => {
                          // <div className={"bg-"+ e + " flex gap-5 w-[20px] h-[5px]"}>
                          //   {{e}}
                          // </div>
                          <span>{e}</span>
                        })} */}
                        {imageByIndex(index).listColor.split(" ").forEach((e) => {
                          <div>{e}</div>
                        })}
                      </div>
                      <div className="text-center text-[#151875] font-LatoBold font-medium text-14px group-hover:text-white">
                        {imageByIndex(index).code}
                      </div>
                      <div className="text-center text-[#151875] font-LatoBold text-14px  group-hover:text-white">
                        {imageByIndex(index).price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="embla__dots__productsFeature">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot__productsFeature".concat(
              index === selectedIndex
                ? " embla__dot__productsFeature--selected"
                : ""
            )}
          />
        ))}
      </div>
    </>
  );
}

export default CartProductFeature;
