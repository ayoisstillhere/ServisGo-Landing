import HeroImg from "../assets/images/heroBG.jpg";

const Hero = () => {
  return (
    <div className="relative bg-cover pb-16 pt-36 px-6 w-full h-full text-white lg:mt-[-100px] mt-[-120px]">
      <div className="absolute inset-0 z-0 w-ful h-full ">
        <picture>
          <img
            src={HeroImg}
            alt="Service Professionals"
            className="block absolute object-cover w-full h-full object-center inset-0"
          />
        </picture>
        <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
      </div>
      <div className="relative z-10">
        <h1 className="font-semibold text-4xl md:text-7xl">
          Hire professional
        </h1>
        <h1 className="font-semibold text-4xl md:text-7xl mb-4">Any Job</h1>
      </div>
      <div className="max-w-[500px] relative z-10">
        <p className="md:text-xl text-lg justify-center py-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          iure repudiandae, nesciunt natus nemo alias vero nam ullam numquam
          ipsa laborum aperiam ad delectus dolorem earum deleniti debitis sunt
          quasi.
        </p>
        <button className="mx-auto px-6 py-3 mb-6 bg-[#273A69]  hover:bg-[#0f172a] rounded-full font-medium ">
          Get the app
        </button>
      </div>
    </div>
  );
};

export default Hero;
