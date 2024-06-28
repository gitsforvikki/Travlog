import fb from "../../assets/footer/Facebook.svg";
import insta from "../../assets/footer/Instagram.svg";
import linkedin from "../../assets/footer/LinkedIn.svg";
import twitter from "../../assets/footer/Twitter.svg";
import youtube from "../../assets/footer/YouTube.svg";

const footerData = [
  {
    title: "Product",
    subtitle: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
  },
  {
    title: "Company",
    subtitle: ["About", "Contact Us ", "Careers ", "Culture", "Blog"],
  },
  {
    title: "Support",
    subtitle: [
      "Getting started",
      "Help center",
      "Report a bug",
      "Server status",
      "Chat support",
    ],
  },
  {
    title: "Contact",
    subtitle: [
      "contact@company.com",
      "(XX) XXXX XXXX",
      "736, Ahmedabad, India",
    ],
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className=" border-b-2 border-gray-100 pb-24">
        <div className="grid grid-cols-1 lg:grid-flow-row gap-x-4 lg:grid-cols-10  mx-4">
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-8">
                <h1 className=" text-3xl md:text-4xl font-semibold  bg-gradient-to-r from-[#F85E9F] to-[#5D50C6] inline-block text-transparent bg-clip-text">
                  Travlog
                </h1>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, aliquid.
                </p>
              </div>
              <div className=" flex gap-x-6 ">
                <img src={fb} alt="fb" />
                <img src={insta} alt="fb" />
                <img src={linkedin} alt="fb" />
                <img src={twitter} alt="fb" />
                <img src={youtube} alt="fb" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className=" mt-10">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
                {footerData.map((item) => {
                  return (
                    <div className="">
                      <h1 className="mb-4 text-2xl font-semibold">
                        {item.title}
                      </h1>
                      <div className="flex flex-col gap-y-4">
                        {item.subtitle.map((each) => {
                          return <h1 className="text-gray-500">{each}</h1>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-4 md:flex-row md:justify-between text-gray-500 mt-8 mx-4">
        <div className="">
          <p>Copyright © 2023 </p>
        </div>
        <div className="">
          <p>
            All Rights Reserved |{" "}
            <a href="#" className="text-blue-500 underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
