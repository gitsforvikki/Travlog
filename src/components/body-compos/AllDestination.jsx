import image1 from "../../assets/all-desig/Rectangle1.svg";
import image2 from "../../assets/all-desig/Rectangle2.svg";
import image3 from "../../assets/all-desig/Rectangle3.svg";
import image4 from "../../assets/all-desig/Rectangle4.svg";
import image5 from "../../assets/all-desig/Rectangle5.svg";
import image6 from "../../assets/all-desig/Rectangle6.svg";

const data = [
  {
    image: image1,
    title: "Tokyo",
    subTitle: "Tokyo, Japan",
    price: "380",
    description:
      "Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: image2,
    title: "Rome",
    subTitle: "Rome, Italy",
    price: "300",
    description:
      " Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: image3,
    title: "Barcelona",
    subTitle: "Barcelona, Spain",
    price: "200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: image4,
    title: "Bangkok",
    subTitle: "Bangkok, Thailand",
    price: "380",
    description:
      "Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: image5,
    title: "Sydney",
    subTitle: "Sydney, Austrelia",
    price: "300",
    description:
      " Lorem Ipsum is simply dummy text of the printing and...see more",
  },
  {
    image: image6,
    title: "Toronto",
    subTitle: "Toronto, Canada",
    price: "200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and...see more",
  },
];

const AllDestination = () => {
  return (
    <div className="container mx-auto mt-10">
      {/* Heading */}
      <div className=" flex flex-col md:flex-row gap-y-6  justify-around items-center mt-16 md:mt-24 mb-10 md:mb-16">
        <div className="">
          <h1 className="text-[#F85E9F] text-lg">Top Destination</h1>
          <h1 className="text-2xl xl:text-4xl">Explore top destination</h1>
        </div>
        <div className="">
          <ol className="flex gap-x-6 lg:text-xl">
            <li className="text-black hover:text-black hover:cursor-pointer font-semibold">
              City
            </li>
            <li className="text-gray-400 hover:text-black hover:cursor-pointer font-semibold">
              Mountain
            </li>
            <li className="text-gray-400 hover:text-black hover:cursor-pointer font-semibold">
              Forest
            </li>
            <li className="text-gray-400 hover:text-black hover:cursor-pointer font-semibold">
              Island
            </li>
            <li className="text-[#F85E9F] hover:text-black hover:cursor-pointer font-semibold">
              See All
            </li>
          </ol>
        </div>
      </div>

      {/* All-Designation */}
      <div className=" container mx-auto grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 xl:grid-cols-3 ">
        {data.map((each) => {
          return (
            <div key={each.title} className="  w-[350px] shadow-lg  px-3 pb-4 flex flex-col gap-y-7">
              <div className="relative">
                <img src={each.image} alt="" className="rounded-xl  " />
                {/* <div className="bg-gray-500 w-20 flex gap-x-4  py-1 px-3 rounded-3xl  absolute top-2 left-72">
                    <img src={star} alt="start" />
                    <p className=""> 5.0</p>
                  </div> */}
              </div>
              <div className="flex flex-col gap-y-10">
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
  );
};
export default AllDestination;
