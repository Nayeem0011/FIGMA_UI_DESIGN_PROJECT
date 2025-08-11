import image from "../assets/image 9.svg";
import image1 from "../assets/logo.svg";
import image2 from "../assets/logo (1).svg";
import image3 from "../assets/logo (2).svg";
import image4 from "../assets/logo (3).svg";
import image5 from "../assets/logo (4).svg";
import image6 from "../assets/logo (5).svg";

const CustomerSection = () => {
  return (
    <div className="bg-[#F5F7FA] py-6 px-4 md:px-10 lg:px-[100px]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Customer"
            className="w-[180px] sm:w-[200px] md:w-[226.92px] h-auto rounded-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-inter font-medium text-[11.14px] text-[#717171] leading-[16.71px] align-middle">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <p className="font-inter font-semibold text-[13.92px] text-[#4CAF4F] leading-[19.49px] align-middle mt-3">
            Tim Smith
          </p>
          <p className="font-inter font-normal text-[11.14px] text-[#89939E] leading-[16.71px] align-middle mt-1">
            British Dragon Boat Racing Association
          </p>

          {/* Logos and Button */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-3">
            {[image1, image2, image3, image4, image5, image6].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`logo-${idx}`}
                className="w-[33px] h-[33px] rounded-md"/>))}

            <button className="font-inter font-semibold text-[13.92px] text-[#4CAF4F] leading-[19.49px] align-middle ml-2">
              Meet all customers →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerSection;
