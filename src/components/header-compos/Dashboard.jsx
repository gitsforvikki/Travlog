import vector from "../../../src/assets/dashboard/Vector.svg";
import play from "../../../src/assets/dashboard/play-circle.svg";
import Group from "../../../src/assets/dashboard/Group-dashboard.svg";
import Group1 from "../../../src/assets/dashboard/Group1.svg";
import Group2 from "../../../src/assets/dashboard/Group2.svg";
import Group3 from "../../../src/assets/dashboard/Group3.svg";
import Group4 from "../../../src/assets/dashboard/Group4.svg";
import Group5 from "../../../src/assets/dashboard/Group5.svg";

const Dashboard = () => {
  const logos = [
    { logo: Group1, id: 1 },
    { logo: Group2, id: 2 },
    { logo: Group3, id: 3 },
    { logo: Group4, id: 4 },
    { logo: Group5, id: 5 },
  ];
  return (
    <div className="flex flex-col gap-y-10">
      <div className=" container mx-auto mt-10 flex flex-col md:grid grid-flow-row grid-cols-2 gap-x-4 justify-around gap-y-10">
        <div className="mx-6">
          <div className="  flex flex-col gap-y-6">
            <div className="flex gap-x-4 ">
              <h1 className="text-[#F85E9F] xl:text-xl">Explore the world!</h1>
              <img src={vector} alt="vectore" />
            </div>
            <div className="flex flex-col font-semibold text-3xl sm:text-5xl xl:text-8xl gap-y-3">
              <h1>
                Travel <span className="text-[#F85E9F] animate-pulse">top</span>
              </h1>
              <h1 className="text-[#F85E9F] animate-pulse">Destination</h1>
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
            <button className="bg-[#6F3AFA] py-2 px-3 lg:py-3 lg:px-4 rounded-3xl text-white shadow-lg animate-bounce hover:animate-none">
              Get started
            </button>
            <button className="flex py-2 px-3 lg:py-3 lg:px-4 rounded-3xl shadow-lg hover:cursor-wait">
              <img src={play} alt="play-circle" className="animate-spin" />
              Watch Demo
            </button>
          </div>
        </div>
        {/* dashboard Image */}
        <div className="mx-6">
          <img src={Group} />
        </div>
      </div>

      <div className=" container mx-auto  md-mt-6 justify-items-center grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {logos.map((each) => {
          return (
            <div key={each.id} className="">
              <img src={each.logo} alt="logos" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
