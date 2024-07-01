const MiniNavbar = () => {
  return (
    <div className=" flex flex-col gap-y-3 mx-4 border-l border-r border-b p-3 rounded-xl md:hidden">
      <div className=" flex justify-start bg-gray-200 hover:bg-gray-300 py-2 rounded-xl hover:shadow-lg">
        <h1 className="pl-6 hover:font-bold">Home</h1>
      </div>
      <div className=" flex justify-start bg-gray-200 hover:bg-gray-300 py-2 rounded-xl hover:shadow-lg">
        <h1 className="pl-6 hover:font-bold">About</h1>
      </div>
      <div className=" flex justify-start bg-gray-200 hover:bg-gray-300 py-2 rounded-xl hover:shadow-lg">
        <h1 className="pl-6 hover:font-bold">Designation</h1>
      </div>
      <div className=" flex justify-start bg-gray-200 hover:bg-gray-300 py-2 rounded-xl hover:shadow-lg">
        <h1 className="pl-6 hover:font-bold">Package</h1>
      </div>
      <div className=" flex justify-start bg-gray-200 hover:bg-gray-300 py-2 rounded-xl hover:shadow-lg">
        <h1 className="pl-6 hover:font-bold">Blog</h1>
      </div>
      <div className=" flex justify-start bg-gray-200 hover:bg-gray-300 py-2 rounded-xl hover:shadow-lg">
        <h1 className="pl-6 hover:font-bold">Contact</h1>
      </div>
      <div className="w-1/3 flex justify-evenl py-2">
        <div className=" flex gap-x-6">
          <button className="px-3 py-2 border hover:bg-gray-200 rounded-xl">
            Log in
          </button>
          <button className="px-3 py-2 bg-[#5D50C6] text-white rounded-xl hover:shadow-xl animate-pulse hover:animate-none">
            sing Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
