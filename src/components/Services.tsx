import ServiceProvider from "../assets/images/serviceProvider.jpg";
import HomeOwner from "../assets/images/HomeOwner.jpg";
import MoneyIcon from "../assets/icons/money-dollar-svgrepo-com.svg";
import TimeIcon from "../assets/icons/time-quarter-past-svgrepo-com.svg";
import BoltIcon from "../assets/icons/bolt-svgrepo-com.svg";

import { useState } from "react";

const Services = () => {
  const [isHomeOwner, setIsHomeOwner] = useState(true);

  const handleHomeOwner = () => {
    setIsHomeOwner(!isHomeOwner);
  };

  return (
    <div className="w-full text-center md:px-20 px-6">
      <h2 className="font-semibold mt-16 text-3xl md:text-5xl mb-6 text-center">
        Earn Money or Book Services
      </h2>
      {!isHomeOwner ? (
        <div className="flex justify-center gap-10 mb-8">
          <button
            className="px-4 py-1 font-light rounded-full border-2"
            onClick={handleHomeOwner}
          >
            Home Owner
          </button>
          <button className="px-4 py-1 font-light rounded-full border-2 text-white bg-[#2b2a2a]">
            Service Provider
          </button>
        </div>
      ) : (
        <div className="flex justify-center gap-10 mb-8">
          <button className="px-4 py-1 font-light rounded-full border-2 text-white bg-[#2b2a2a]">
            Home Owner
          </button>

          <button
            className="px-4 py-1 font-light rounded-full border-2"
            onClick={handleHomeOwner}
          >
            Service Provider
          </button>
        </div>
      )}

      {isHomeOwner ? (
        <div className="grid lg:grid-cols-2 gap-x-20">
          <div className="lg:text-left text-center">
            <h6 className="font-bold mb-3 text-base">
              BOOK SERVICES WITH{" "}
              <span className="text-[#273A69]">
                SERVIS<span className="text-[#BCC7FF]">GO</span>
              </span>
            </h6>
            <h3 className="font-bold text-xl md:text-2xl mb-6">
              Schedule a service with one of our partners.
            </h3>
            <div className="mb-6">
              <div className="font-bold text-base flex gap-2 text-center justify-center lg:justify-start">
                <img src={MoneyIcon} alt="Money Icon" className="h-6 w-6" />

                <p className="mb-2">Affordable Prices:</p>
              </div>
              <p className="font-normal text-sm lg:ml-8">
                Enter amounts which you are willing to pay each time you book a
                service.
              </p>
            </div>
            <div className="mb-6">
              <div className="font-bold text-base flex gap-2 text-center justify-center lg:justify-start">
                <img src={TimeIcon} alt="Time Icon" className="h-6 w-6" />

                <p className="mb-2">Book on demand:</p>
              </div>
              <p className="font-normal text-sm lg:ml-8">
                Connect with service porviders near you to get the job done on demand!
              </p>
            </div>
            <div className="mb-6">
              <div className="font-bold text-base flex gap-2 text-center justify-center lg:justify-start">
                <img src={BoltIcon} alt="Bolt Icon" className="h-6 w-6" />

                <p className="mb-2">Flexible Payment:</p>
              </div>
              <p className="font-normal text-sm lg:ml-8">
                Pay instantly with cash or card.
              </p>
            </div>
            <button className="mx-auto px-6 py-3 mb-6 bg-[#273A69]  hover:bg-[#11192e] rounded-full font-medium text-white">
              Apply to work
            </button>
          </div>
          <div className="p-4 hidden lg:block">
            <img
              src={HomeOwner}
              alt="Service Provider"
              className="object-cover h-[450px] w-full"
            />
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-x-20">
          <div className="lg:text-left text-center">
            <h6 className="font-bold mb-3 text-base">
              WORK WITH{" "}
              <span className="text-[#273A69]">
                SERVIS<span className="text-[#BCC7FF]">GO</span>
              </span>
            </h6>
            <h3 className="font-bold text-xl md:text-2xl mb-6">
              Set your own schedule. Earn on your own terms.
            </h3>
            <div className="mb-6">
              <div className="font-bold text-base flex gap-2 text-center justify-center lg:justify-start">
                <img src={MoneyIcon} alt="Money Icon" className="h-6 w-6" />

                <p className="mb-2">Reliable earnings:</p>
              </div>
              <p className="font-normal text-sm lg:ml-8">
                You’ll receive your earnings from all the jobs at the end of each week.
              </p>
            </div>
            <div className="mb-6">
              <div className="font-bold text-base flex gap-2 text-center justify-center lg:justify-start">
                <img src={TimeIcon} alt="Time Icon" className="h-6 w-6" />

                <p className="mb-2">A flexible Schedule:</p>
              </div>
              <p className="font-normal text-sm lg:ml-8">
                You decide when and how often you work — weekdays, evenings,
                weekends, or just the occasional hour — it’s up to you.
              </p>
            </div>
            <div className="mb-6">
              <div className="font-bold text-base flex gap-2 text-center justify-center lg:justify-start">
                <img src={BoltIcon} alt="Bolt Icon" className="h-6 w-6" />

                <p className="mb-2">Get paid instantly:</p>
              </div>
              <p className="font-normal text-sm lg:ml-8">
                Cash out your earnings whenever you want.
              </p>
            </div>
            <button className="mx-auto px-6 py-3 mb-6 bg-[#273A69]  hover:bg-[#11192e] rounded-full font-medium text-white">
              Apply to work
            </button>
          </div>
          <div className="p-4 hidden lg:block">
            <img
              src={ServiceProvider}
              alt="Service Provider"
              className="object-cover h-[450px] w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
