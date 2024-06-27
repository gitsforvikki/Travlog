import Reactangle1 from "../../assets/top-designation/Rectangle-1.svg";
import Reactangle2 from "../../assets/top-designation/Rectangle-2.svg";
import Reactangle3 from "../../assets/top-designation/Rectangle-3.svg";
import star from "../../assets/top-designation/Star.svg";

const data = [
  {
    image: Reactangle1,
    title: "Cappadocia",
    subTitle: "Machu Picchu, Peru",
    price: "380",
    description:
      "Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: Reactangle2,
    title: "Nice and Cannes",
    subTitle: "French Riviera, France",
    price: "300",
    description:
      " Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: Reactangle3,
    title: "Seville",
    subTitle: "Seville, Spain",
    price: "200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and...see more",
  },
];
const TopDesignation = () => {
  return (
    <>
      <div className="container mx-auto mt-24">
        <div className="flex flex-col items-center  mb-5">
          <h1 className="text-[#F85E9F] text-lg">
            choose your next destination
          </h1>
          <h1 className="text-3xl xl:text-4xl ">Explore top destination</h1>
        </div>
        <div className=" flex flex-col gap-y-6 justify-center items-center  md:flex-row lg:justify-evenly">
          {data.map((each) => {
            return (
              <div key={each.title} className="w-[350px] shadow-lg  px-3 pb-4 flex flex-col  gap-y-7">
                <div className="relative">
                  <img src={each.image} alt="" className="rounded-xl  " />
                  {/* <div className="bg-gray-500 w-20 flex gap-x-4  py-1 px-3 rounded-3xl  absolute top-2 left-72">
                    <img src={star} alt="start" />
                    <p className=""> 5.0</p>
                  </div> */}
                </div>
                <div className="flex flex-col justify-center items-center gap-y-10">
                  <div className="">
                    <h1 className="text-[#0C111F] text-xl font-semibold">
                      {each.title}
                    </h1>
                    <p className="text-gray-500">{each.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h1 className="text-gray-500">{each.subTitle}</h1>
                      <h1 className="text-gray-300">
                        <span className="text-black font-semibold text-xl">
                          ${each.price}
                        </span>{" "}
                        x 12 interest free
                      </h1>
                    </div>
                    <div className="">
                      <button className="bg-gradient-to-tl from-[#8482FF] to-[#7723FE] text-sm text-white py-2 px-3 rounded-2xl">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopDesignation;
