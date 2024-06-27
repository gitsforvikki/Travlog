import vector from "../../../src/assets/dashboard/Vector.svg";
import play from "../../../src/assets/dashboard/play-circle.svg";
import Group from "../../../src/assets/dashboard/Group 48095467.svg";

const Dashboard = () => {
  return (
    <>
      <div className=" container mx-auto mt-10 flex flex-col md:grid grid-flow-row grid-cols-2 gap-x-4 justify-around gap-y-10">
        <div className="mx-6">
          <div className="  flex flex-col gap-y-6">
            <div className="flex gap-x-4">
              <h1 className="text-[#F85E9F] xl:text-xl">Explore the world!</h1>
              <img src={vector} alt="vectore" />
            </div>
            <div className="flex flex-col font-semibold text-3xl sm:text-5xl xl:text-7xl gap-y-3">
              <h1>
                Travel <span className="text-[#F85E9F]">top</span>
              </h1>
              <h1 className="text-[#F85E9F]">Destination</h1>
              <h1>of the world</h1>
            </div>
            <div className="text-gray-600 lg:text-xl">
              <p>
                Where adventure meets comfort. We create unforgettable travel
                experiences
              </p>
            </div>
          </div>
          <div className=" flex gap-x-10 mt-5 ">
            <button className="bg-[#6F3AFA] py-2 px-3 lg:py-3 lg:px-4 rounded-3xl text-white shadow-lg">
              Get started
            </button>
            <button className="flex py-2 px-3 lg:py-3 lg:px-4 rounded-3xl shadow-lg">
              <img src={play} alt="play-circle" />
              Watch Demo
            </button>
          </div>
        </div>
        {/* dashboard Image */}
        <div className="mx-6">
          <img src={Group} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
