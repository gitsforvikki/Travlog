import travel from "../../assets/service/travel.svg";
import plane from "../../assets/service/plane.svg";
import card from "../../assets/service/card.svg";

const data = [
  {
    image: travel,
    title: "Lot of choices",
    description: "Embrace life's vastness, venture forth.",
  },
  {
    image: plane,
    title: "Best Tour Guide",
    description: "Embrace life's vastness, venture forth,",
  },
  {
    image: card,
    title: "Easy Booking",
    description: "Embrace life's vastness, venture forth.",
  },
];

const Service = () => {
  return (
    <>
      <div className="container mx-auto my-10 lg:mt-16">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-y-12">
          <div className="flex flex-col gap-y-3 lg:gap-y-6 justify-start items-center">
            <div className="">
              <h1 className="text-lg text-[#F85E9F]">WHAT WE SERVE</h1>
            </div>
            <div className="text-black font-semibold text-xl lg:text-2xl">
              <h1>Top Values For You </h1>
            </div>
            <div className="">
              <p>Embrace life's vastness, venture forth,</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row md:gap-x-6  gap-y-10 items-center justify-center">
              {
                data.map((item)=>{
                    return <div key={item.title} className="flex flex-col justify-center items-center gap-y-2">
                        <img src={item.image} alt={item.title} className="w-12 h-12 md:w-20 md:h-20" />
                        <h1 className="text-xl">{item.title}</h1>
                        <p className="text-sm text-center text-gray-900">{item.description}</p>
                    </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
