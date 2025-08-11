import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const Achievements = () => {
  return (
    <div className="bg-[#F5F7FA] py-10 px-4 md:px-10 lg:px-[100px]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Text Section */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="font-inter font-bold text-[19.49px] leading-[25.06px] sm:text-[25.06px] text-[#4D4D4D]">
            Helping a local
          </h2>
          <h2 className="font-inter font-bold text-[19.49px] leading-[25.06px] sm:text-[25.06px] text-[#4CAF4F]">
            business reinvent itself
          </h2>
          <p className="font-inter font-semibold text-[25.06px] leading-[30.63px] text-[#4D4D4D] sm:text-[11.14px] mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Stats Section */}
        <div className="grid grid-cols-2 gap-6 sm:gap-[27px]">
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <img src={icon3} alt="" className="w-8 h-8 sm:w-[34px] sm:h-[34px]" />
            <div>
              <span className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-[0] text-[#4D4D4D] sm:text-[19.49px]">
                2,245,341
              </span>
              <br />
              <span className="font-inter font-normal text-[11.14px] leading-[16.71px] text-[#717171] sm:text-[11.14px]">
                Members
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <img src={icon4} alt="" className="w-8 h-8 sm:w-[34px] sm:h-[34px]" />
            <div>
              <span className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-[0] text-[#4D4D4D] sm:text-[19.49px]">
                828,867
              </span>
              <br />
              <span className="font-inter font-normal text-[11.14px] leading-[16.71px] text-[#717171] sm:text-[11.14px]">
                Event Bookings
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <img src={icon5} alt="" className="w-8 h-8 sm:w-[34px] sm:h-[34px]" />
            <div>
              <span className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-[0] text-[#4D4D4D] sm:text-[19.49px]">
                46,328
              </span>
              <br />
              <span className="font-inter font-normal text-[11.14px] leading-[16.71px] text-[#717171] sm:text-[11.14px]">
                Clubs
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3">
            <img src={icon6} alt="" className="w-8 h-8 sm:w-[34px] sm:h-[34px]" />
            <div>
              <span className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-[0] text-[#4D4D4D] sm:text-[19.49px]">
                1,926,436
              </span>
              <br />
              <span className="font-inter font-normal text-[11.14px] leading-[16.71px] text-[#717171] sm:text-[11.14px]">
                Payments
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

 export default Achievements;



