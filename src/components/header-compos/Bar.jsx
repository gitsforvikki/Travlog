const Bar = (props) => {
  return (
    <div className="flex justify-between md:hidden py-4 px-6">
      <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold animate-pulse">
        <h1 className="bg-gradient-to-r from-[#F85E9F] to-[#5D50C6] inline-block text-transparent bg-clip-text">
          Travlog
        </h1>
      </div>

      <div className="">
        <div
          onClick={props.onClickHandler}
          className="flex flex-col gap-y-1 mx-4  px-4 py-2 rounded-md "
        >
          <span className="w-7 bg-gray-400 h-1"></span>
          <span className="w-7 bg-gray-400 h-1"></span>
          <span className="w-7 bg-gray-400 h-1"></span>
        </div>
      </div>
    </div>
  );
};
export default Bar;
