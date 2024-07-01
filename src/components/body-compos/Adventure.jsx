import man from "../../assets/Adventure/man.svg";
import house from "../../assets/Adventure/house.svg";
import thumbs from "../../assets/Adventure/thumb.svg";
import heart from "../../assets/Adventure/heart.svg";
import eject from "../../assets/Adventure/eject.svg";
import newsletter from "../../assets/Adventure/newsletter.svg";
import vector from "../../assets/Adventure/Vector.svg";

const Adventure = () => {
  return (
    <div className="container  mx-auto mt-10">
      {/* Crafting Unforgettable Adventures */}

      <div className="grid grid-cols-1 gap-y-6  md:grid-flow-row md:grid-cols-2 gap-x-5 md:content-center">
        <div className="mx-4 flex flex-col gap-y-10 items-center justify-center">
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <h1 className="text-[#F85E9F] text-xl">Our Experience</h1>
            <p className="text-3xl font-semibold xl:hidden">
              Crafting Unforgettable Adventures
            </p>
            <div className="hidden xl:block text-3xl font-semibold ">
              <p>Crafting </p>
              <p> Unforgettable</p>
              <p>Adventures</p>
            </div>
            <p className="text-gray-600">
              We excel in curating remarkable journeys, specializing in outdoor
              destinations around the globe. With a wealth of experience, we
              bring adventures to life and invite you to embark on your own. The
              call of nature awaits—begin your adventure today!
            </p>
          </div>
          <div className=" flex gap-x-5">
            <div className="">
              <h1 className="text-[#F85E9F] text-2xl font-semibold">1000+</h1>
              <p>outdoor destinations</p>
            </div>
            <div className="">
              <h1 className="text-[#F85E9F] text-2xl font-semibold">98%</h1>
              <p>customer satisfaction</p>
            </div>
            <div className="">
              <h1 className="text-[#F85E9F] text-2xl font-semibold">15+</h1>
              <p>Years Of Experience</p>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <img src={man} alt="man" />
        </div>
      </div>

      {/*  Meet Our Expert Tour Guides */}

      <div className="grid grid-cols-1 lg:grid-flow-row lg:grid-cols-2 xl:gap-x-28 gap-y-4 gap-x-2 my-10 xl:my-16 mx-4">
        <div className="flex flex-col gap-y-6">
          <div className=" flex flex-col gap-y-4">
            <h1 className="text-3xl">Meet Our Expert Tour Guides</h1>
            <p className="text-gray-600">
              Our journeys are enriched by our team of seasoned tour guides. Our
              guides bring your adventures to life with their expertise, passion
            </p>
          </div>
          <div className="">
            <img src={house} alt="house" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className=" flex flex-col sm:flex-row gap-x-4 md:gap-x-10 items-center border-b-2 border-gray-100 pb-6">
            <div className="flex justify-center items-center ">
              <div className="bg-gray-100 rounded-full w-[100px] h-[100px] flex items-center justify-center animate-bounce hover:animate-none">
                <img src={thumbs} alt="heart" className="w-14 h-14 " />
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold">Experties</h1>
              <p className="text-gray-600 ">
                Our guides are experts in their fields, ensuring in-depth
                knowledge and insights into every destination.
              </p>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-x-4 md:gap-x-10 items-center border-b-2 border-gray-100 pb-6">
            <div className="flex justify-center items-center ">
              <div className="bg-gray-100 rounded-full w-[100px] h-[100px] flex items-center justify-center animate-bounce hover:animate-none">
                <img src={heart} alt="heart" className="w-14 h-14 " />
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold">Passion</h1>
              <p className="text-gray-600 ">
                They are passionate about travel, culture, and history, making
                your journey engaging and captivating.
              </p>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-x-4 md:gap-x-10 items-center border-b-2 border-gray-100 pb-6">
            <div className="flex justify-center items-center ">
              <div className="bg-gray-100 rounded-full w-[100px] h-[100px] flex items-center justify-center animate-bounce hover:animate-none">
                <img src={eject} alt="heart" className="w-14 h-14 " />
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl  font-semibold">Dedication</h1>
              <p className="text-gray-600 ">
                Our guides are dedicated to providing exceptional service and
                ensuring your travel memories are truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* newslette */}
      <div className="mx-4">
        <div className=" py-10 bg-[#FACD49] lg:bg-transparent rounded-xl  lg:relative flex justify-center">
          <img src={newsletter} alt="newsletter" className="hidden lg:block" />
          <div className="flex flex-col gap-y-6 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="flex flex-col gap-y-2 justify-center items-center ">
              <h1 className=" text-2xl font-semibold lg:text-3xl ">Sign up to our newsletter</h1>
              <p className="text-gray-700 text-sm"> Lorem ipsum dolor sit amet consectetur. Egestas</p>
              <p className="text-gray-700 text-sm">et feugiat purus
                enim facilisi nunc blandit nullam.</p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between  bg-white p-1 rounded-xl">
                <input
                  type="text"
                  placeholder="Enter Your email address"
                  className="outline-none"
                />
                <div className=" bg-[#816AFF] text-white rounded-xl flex justify-center items-center">
                  <img src={vector} alt="vector" className="animate-ping hover:animate-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
