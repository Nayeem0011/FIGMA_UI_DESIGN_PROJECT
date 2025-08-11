import icon1 from "../assets/icon.jpg"
import icon2 from "../assets/icon1.jpg"
import icon3 from "../assets/icon2.jpg"

const Community = () => {
  return (
    <div className="mb-4">
      <div>
        <h2 className="font-inter font-semibold text-[25.06px] leading-[30.63px] tracking-normal text-center text-[#4D4D4D] ">
            Manage your entire community <br /> in a single system
        </h2>
        <p className="font-inter font-normal text-[11.14px] leading-[16.71px] tracking-normal text-center text-[#717171] mt-2">
            Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between  max-w-5xl mx-auto mt-5">
        <div className=" w-[208.12px] h-[182.09px] gap-[5.57px] rotate-0 opacity-100 p-[16.71px] pr-[22.27px] pl-[22.27px] rounded-[5.57px] bg-[#FFFFFF] shadow-sm">
            <div className="flex items-center justify-center">
                <img src={icon1} alt="icon" className="w-[45px] h-[38px]"/>
            </div>
            <h3 className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-normal text-center text-[#4D4D4D]">
                Membership Organisations
            </h3>
            <p className="font-inter font-normal text-[9.74px] leading-[13.92px] tracking-normal text-center text-[#717171] mt-1">
                Our membership management software provides full automation of membership renewals and payments
            </p>
        </div>

        <div className=" w-[208.12px] h-[182.09px] gap-[5.57px] rotate-0 opacity-100 p-[16.71px] pr-[22.27px] pl-[22.27px] rounded-[5.57px] bg-[#FFFFFF] shadow-sm">
            <div className="flex items-center justify-center">
                <img src={icon2} alt="icon2" className="w-[45px] h-[38px]"/>
            </div>
            <h3 className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-normal text-center text-[#4D4D4D]">
                National Associations
            </h3>
            <p className="font-inter font-normal text-[9.74px] leading-[13.92px] tracking-normal text-center text-[#717171] mt-1">
                Our membership management software provides full automation of membership renewals and payments
            </p>
        </div>

        <div className=" w-[208.12px] h-[182.09px] gap-[5.57px] rotate-0 opacity-100 p-[16.71px] pr-[22.27px] pl-[22.27px] rounded-[5.57px] bg-[#FFFFFF] shadow-sm">
            <div className="flex items-center justify-center">
                <img src={icon3} alt="icon3" className="w-[45px] h-[38px]"/>
            </div>
            <h3 className="font-inter font-bold text-[19.49px] leading-[25.06px] tracking-normal text-center text-[#4D4D4D]">
                Clubs And Groups
            </h3>
            <p className="font-inter font-normal text-[9.74px] leading-[13.92px] tracking-normal text-center text-[#717171] mt-1">
                Our membership management software provides full automation of membership renewals and payments
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default Community




