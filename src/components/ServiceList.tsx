import CleaningIcon from "../assets/icons/CleaningIcon.svg";
import PaintingIcon from "../assets/icons/PaintingIcon.svg";
import PlumbingIcon from "../assets/icons/PlumbingIcon.svg";
import Electricalicon from "../assets/icons/Electricalicon.svg";
import GardeningIcon from "../assets/icons/GardeningIcon.svg";
import HandymanIcon from "../assets/icons/HandymanIcon.svg";
import ImprovementIcon from "../assets/icons/ImprovementIcon.svg";

const ServiceList = () => {
  return (
    <div className="py-6 px-24 bg-[#EFEFEF] pb-16">
      <h2 className="font-semibold mt-16 text-3xl md:text-5xl mb-16 text-center">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 gap-y-12">
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={CleaningIcon}
            alt="Cleaning Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Cleaning Services
          </p>
        </div>
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={GardeningIcon}
            alt="Gardening Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Gardening Services
          </p>
        </div>
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={PlumbingIcon}
            alt="Plumbing Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Plumbing Services
          </p>
        </div>
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={Electricalicon}
            alt="Electrical Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Electrical Services
          </p>
        </div>
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={HandymanIcon}
            alt="Handyman Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Handyman Services
          </p>
        </div>
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={PaintingIcon}
            alt="Painting Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Painting Services
          </p>
        </div>
        <div className="justify-center text-center w-full rounded-lg bg-white hover:scale-110 duration-300">
          <img
            src={ImprovementIcon}
            alt="Home Improvement Icon"
            className="h-[60px] w-auto bg-white rounded-xl shadow-lg mx-auto p-2 mt-[-2rem]"
          />
          <p className="font-[200] text-sm md:text-xl pt-5 pb-8 px-4">
            Home Improvement Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
