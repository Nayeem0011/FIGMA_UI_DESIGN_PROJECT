import logo from "../assets/footer_logo.svg"
import icons1 from "../assets/social_Icons1.svg"
import icons2 from "../assets/social_Icons2.svg"
import icons3 from "../assets/social_Icons3.svg"
import icons4 from "../assets/social_Icons4.svg"
import icons5 from "../assets/send.svg"

const Footer = () => {
  return (
    <footer className="bg-[#263238] text-gray-300 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12 mt-4 mb-8">
        {/* Left part */}
        <div className="flex flex-col space-y-4 gap-[28px] max-w-sm rotate-0 opacity-100 md:w-1/3">
          <div className="flex items-center  space-x-2">
            <img src={logo} alt="footer_logo" className="w-[133px] h-[21px] gap-[7px] rotate-0 opacity-100"/>
          </div>
          <div className="">
            <p  className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">
                <span>Copyright © 2020 Landify UI Kit.</span>
                <br />
                <span className="mt-2 inline-block">All rights reserved</span>
            </p>
          </div>
          <div className="w-[135px] h-[26px] gap-[11px] rotate-0 opacity-100">
            <div className="flex space-x-4 ">
                <a href="#" aria-label="Instagram" className="w-[30px] h-[30px] rotate-0 opacity-100">
                    <img src={icons1} alt="social_Icons" />
                </a>
                <a href="#" aria-label="Dribbble" className="w-[30px] h-[30px]rotate-0 opacity-100">
                    <img src={icons2} alt="social_Icons" />
                </a>
                <a href="#" aria-label="Twitter" className="w-[30px] h-[30px] rotate-0 opacity-100">
                    <img src={icons3} alt="social_Icons" />
                </a>
                <a href="#" aria-label="YouTube" className="w-[30px] h-[30px] rotate-0 opacity-100">
                    <img src={icons4} alt="social_Icons" />
                </a>
            </div>
          </div>
        </div>

        {/* Center links */}
        <div className="flex justify-between md:w-1/3">
          <div className="w-[111px] h-[140px] gap-[17px] rotate-0 opacity-100"> 
            <h3 className="text-[#FFFFFF] font-inter font-semibold leading-[19.49px] tracking-[0px] mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm w-[115px] h-[103px] gap-[8px] rotate-0 opacity-100 pt-2">
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">About us</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Blog</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Contact us</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Pricing</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="w-[111px] h-[140px] gap-[17px] rotate-0 opacity-100"> 
            <h3 className="text-[#FFFFFF] font-inter font-semibold leading-[19.49px] tracking-[0px] mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm w-[115px] h-[103px] gap-[8px] rotate-0 opacity-100 pt-2">
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Help center</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Blog</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Terms of service</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Legal</a></li>
              <li><a href="#" className="font-inter font-normal text-[14px] text-[#F5F7FA] leading-[13.92px] tracking-[0px]">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Right subscription input */}
        <div className="md:w-1/3 h-[65px] gap-[17px] rotate-0 opacity-100 flex flex-col">
          <h3 className="text-[#FFFFFF] font-inter font-semibold leading-[19.49px] tracking-[0px]">
            Stay up to date
          </h3>
          <form className="relative w-[250px]" style={{ top: '20.71px' }}>
            <input
            type="email"
            placeholder="Your email address"
            className="w-full h-[38px] placeholder-[#FFFFFF] rounded-[5.57px] bg-opacity-30 bg-[#D9DBE1] rotate-0 placeholder:font-inter placeholder:text-[13px] placeholder:leading-[13.92px] placeholder:text-[#D9DBE1] text-left p-3 pr-10 outline-none"/>
            <img src={icons5} alt="icon"
             className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"/>
          </form>

        </div>
      </div>
    </footer>
  );
};

export default Footer;


