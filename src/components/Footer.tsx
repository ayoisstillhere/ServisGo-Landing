const Footer = () => {
  return (
    <div className="py-20 bg-black px-6 text-white">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="grid gap-3">
          <h5 className="font-semibold mb-2">PROVIDER</h5>
          <a href="" className="font-light text-sm">
            Become a service provider
          </a>
          <a href="" className="font-light text-sm">
            New provider guide
          </a>
          <a href="" className="font-light text-sm">
            Earnings
          </a>
          <a href="" className="font-light text-sm">
            Cities
          </a>
          <a href="" className="font-light text-sm">
            Help
          </a>
          <a href="" className="font-light text-sm">
            Safety
          </a>
          <a href="" className="font-light text-sm">
            Application requirements
          </a>
          <a href="" className="font-light text-sm">
            Provider blog
          </a>
        </div>
        <div className="grid gap-3">
          <h5 className="font-semibold mb-2">CUSTOMER</h5>
          <a href="" className="font-light text-sm">
            Sign Up
          </a>
          <a href="" className="font-light text-sm">
            Cost estimate
          </a>
          <a href="" className="font-light text-sm">
            Cities
          </a>
          <a href="" className="font-light text-sm">
            Help
          </a>
          <a href="" className="font-light text-sm">
            Safety
          </a>
          <a href="" className="font-light text-sm">
            Rewards
          </a>
          <a href="" className="font-light text-sm">
            Events
          </a>
          <a href="" className="font-light text-sm">
            Blog
          </a>
        </div>

        <div className="grid gap-3">
          <h5 className="font-semibold mb-2">
            SERVIS<span className="text-[#BCC7FF]">GO</span>
          </h5>
          <a href="" className="font-light text-sm">
            Careers
          </a>
          <a href="" className="font-light text-sm">
            Business
          </a>
          <a href="" className="font-light text-sm">
            Developers
          </a>
          <a href="" className="font-light text-sm">
            About Us
          </a>
          <a href="" className="font-light text-sm">
            Press
          </a>
          <a href="" className="font-light text-sm">
            Our offerings
          </a>
          <a href="" className="font-light text-sm">
            Promos
          </a>
          <a href="" className="font-light text-sm">
            Newsroom
          </a>
        </div>
        <div className="">
          <div>
            {" "}
            <button className="mx-auto px-6 py-2 mb-6 hover:bg-[#11192e] rounded-full font-semibold border-2 text-sm w-[150px]">
              Customer App
            </button>
          </div>
          <div>
            <button className="mx-auto px-6 py-2 mb-6 hover:bg-[#11192e] rounded-full font-semibold border-2 text-sm w-[150px]">
              Partner App
            </button>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Footer;
