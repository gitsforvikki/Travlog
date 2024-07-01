import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reactangle1 from "../../assets/top-designation/Rectangle-1.svg";
import Reactangle2 from "../../assets/top-designation/Rectangle-2.svg";
import Reactangle3 from "../../assets/top-designation/Rectangle-3.svg";
import nextt from "../../assets/top-designation/next.svg";
import prev from "../../assets/top-designation/prev.svg";

function CarouselControl() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container container mx-auto mt-20">
      <div className="flex justify-between">
        <div className="flex flex-col items-center  mb-5">
          <h1 className="text-[#F85E9F] text-lg">
            choose your next destination
          </h1>
          <h1 className="text-3xl xl:text-4xl ">Explore top destination</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="py-3 px-4 rounded-full border" onClick={previous}>
            <img src={prev} />
          </button>
          <button
            className="  py-3 px-4 rounded-full bg-[#5D50C6]"
            onClick={next}
          >
            <img src={nextt} alt="next" />
          </button>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="w-1/4 shadow-lg  px-3 pb-4 mx-6 flex flex-col justify-items-center  transition ease-in-out delay-150  hover:scale-95 duration-700">
          <div className="flex justify-center w-full items-center mb-10">
            <img src={Reactangle2} alt="" className="rounded-xl  " />
          </div>
          <div className="flex flex-col  gap-y-10">
            <div className=" flex flex-col gap-y-4">
              <h1 className="text-[#0C111F] text-2xl font-semibold">
                Cappadocia
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and Ipsum is
                simply dummy...see more
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="">
                <h1 className="text-gray-900 text-lg">Machu Picchu, Peru</h1>
                <h1 className="text-gray-400">
                  <span className="text-black font-semibold text-xl">
                    ${"599"}
                  </span>{" "}
                  x 12 interest free
                </h1>
              </div>

              <button className=" transition ease-in-out delay-150  hover:scale-110 duration-500  bg-gradient-to-tl from-[#8482FF] to-[#7723FE] text-sm text-white py-2 px-3 rounded-2xl">
                See More
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/4 shadow-lg  px-3 pb-4 mx-6 flex flex-col justify-items-center  transition ease-in-out delay-150  hover:scale-95 duration-700">
          <div className="flex justify-center w-full items-center mb-10">
            <img src={Reactangle1} alt="" className="rounded-xl  " />
          </div>
          <div className="flex flex-col  gap-y-10">
            <div className=" flex flex-col gap-y-4">
              <h1 className="text-[#0C111F] text-2xl font-semibold">
               Nice and Cannes
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and Ipsum is
                simply dummy...see more
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="">
                <h1 className="text-gray-900 text-lg">French Riviera, France</h1>
                <h1 className="text-gray-400">
                  <span className="text-black font-semibold text-xl">
                    ${"850"}
                  </span>{" "}
                  x 12 interest free
                </h1>
              </div>

              <button className=" transition ease-in-out delay-150  hover:scale-110 duration-500  bg-gradient-to-tl from-[#8482FF] to-[#7723FE] text-sm text-white py-2 px-3 rounded-2xl">
                See More
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/4 shadow-lg  px-3 pb-4 mx-6 flex flex-col justify-items-center  transition ease-in-out delay-150  hover:scale-95 duration-700">
          <div className="flex justify-center w-full items-center mb-10">
            <img src={Reactangle3} alt="" className="rounded-xl  " />
          </div>
          <div className="flex flex-col  gap-y-10">
            <div className=" flex flex-col gap-y-4">
              <h1 className="text-[#0C111F] text-2xl font-semibold">
              Seville
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and Ipsum is
                simply dummy...see more
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div className="">
                <h1 className="text-gray-900 text-lg">Seville, Spain</h1>
                <h1 className="text-gray-400">
                  <span className="text-black font-semibold text-xl">
                    ${"599"}
                  </span>{" "}
                  x 12 interest free
                </h1>
              </div>

              <button className=" transition ease-in-out delay-150  hover:scale-110 duration-500  bg-gradient-to-tl from-[#8482FF] to-[#7723FE] text-sm text-white py-2 px-3 rounded-2xl">
                See More
              </button>
            </div>
          </div>
        </div>

       
        
      </Slider>
    </div>
  );
}

export default CarouselControl;
