import girl from "../../assets/dream/Girl.svg";

const DreamDesignation = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-16 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-10 gap-y-14">
        <div className="md:col-span-5">
          <img src={girl} alt="girls-image" />
        </div>
        <div className="md:col-span-5 flex flex-col gap-y-10 mx-4 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-[#F85E9F] lg:text-xl">WE ARE THE BEST FOR YOU</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Unlock Your Dream Destination</h1>
            <p className="text-gray-600 xl:text-xl">
              We are dedicated to making your journey of discovery truly
              unforgettable. Our team of passionate travel experts is here to
              assist you in finding the destination of your dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-4 justify-items-center md:grid-cols-2 gap-3 place-content-center mx-4">
            <div className=" w-1/2 py-4   md:w-40 md:w-30 md:h-32  border border-gray-200 shadow-lg rounded-xl flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-[#F85E9F] text-3xl font-semibold animate-bounce">4K+</h1>
                <h1 className="text-sm">Satisfied Customers</h1>
              </div>
            </div>
            <div className=" w-1/2 py-4  md:w-40 md:w-30 md:h-32  border border-gray-200 shadow-lg rounded-xl flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-[#F85E9F] text-3xl font-semibold animate-bounce">1000+</h1>
                <h1 className="text-sm">Global Destinations</h1>
              </div>
            </div>
            <div className=" w-1/2 py-4   md:w-40 md:w-30 md:h-32 border border-gray-200 shadow-lg rounded-xl flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-[#F85E9F] text-3xl font-semibold animate-bounce">24/7</h1>
                <h1 className="text-sm">Customer Support</h1>
              </div>
            </div>
            <div className=" w-1/2 py-4   md:w-40 md:w-30 md:h-32  border border-gray-200 shadow-lg rounded-xl flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-[#F85E9F] text-3xl font-semibold animate-bounce">100%</h1>
                <h1 className="text-sm">Dedication</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DreamDesignation;
