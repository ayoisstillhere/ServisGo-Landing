import LogoWhite from "../assets/images/LogoWhite.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 items-center px-6 mx-auto relative z-10">
      <img className="w-32" src={LogoWhite} alt="ServisGo Logo" />
      <ul className="hidden md:flex">
        <li>
          <button className="p-4 text-white text-sm font-medium">
            How to use
          </button>
        </li>
        <li>
          <button className="p-4 text-white text-sm font-medium">Safety</button>
        </li>
        <li>
          <button className="p-4 text-white text-sm font-medium">
            Support
          </button>
        </li>
        <li>
          <button className="p-4 text-white text-sm font-medium">
            Download
          </button>
        </li>
        <li>
          <button className="p-4 text-white text-sm font-medium">
            Apply to be a Partner
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
