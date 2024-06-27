const Navbar = () => {

    const navItems = ["Home" ,"About","Designation" , "Package" , "Blog" , "Contact" ]
  return (
    <>
      <div className="container mx-auto flex justify-around items-center ">
        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
          <h1 className="bg-gradient-to-r from-[#F85E9F] to-[#5D50C6] inline-block text-transparent bg-clip-text">
            Travlog
          </h1>
        </div>
        <div className="">
          <ul
            className="flex justify-evenly gap-x-2 md:gap-x-6 lg:gap-x-8 text-[#191825]"
          >
           {
            navItems.map((item)=>{
               return <li key={item} className="hover : text-[#222831] hover:cursor-pointer hover:font-semibold xl:text-xl">{item}</li>
            })
           }
          </ul>
        </div>
        <div className="xl:text-xl">
          <div className="flex gap-x-2 md:gap-x-6 lg:gap-x-8">
            <h1 className="text-[#222831] hover:cursor-pointer ">Log in</h1>
            <h1 className="bg-[#5D50C6] text-white px-2 md:px-4 md:py-1 rounded-2xl hover:shadow-2xl shadow-black hover:cursor-pointer">Sign up</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
