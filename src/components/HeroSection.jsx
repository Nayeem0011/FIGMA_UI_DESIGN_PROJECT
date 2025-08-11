import logo1 from "../assets/logo1.png";

const HeroSection = () => {
  return (
    <div className="herosection px-4 md:px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            <span className="herosection_span1">Lessons and insights</span>
            <br />
            <span className="herosection_span2">from 8 years</span>
          </h1>
          <div className="herosection_p pb-5 mt-2">
            <p className="text-sm sm:text-base">
              Where to grow your business as a photographer: site or social media?
            </p>
          </div>
          <div className="bg-[#4CAF4F] inline-flex px-5 py-2 rounded-md">
            <button className="register_button text-white">Register</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <img src={logo1} alt="Logo" className="w-48 sm:w-60 md:w-[272px] h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
