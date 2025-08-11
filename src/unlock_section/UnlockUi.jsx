import phone_img from "../assets/pana.svg"

const UnlockUi = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-10 lg:px-[100px] my-10 opacity-100 mt-10 mb-10 ">
        <div className="pr-5">
            <img src={phone_img} alt="Phone img" className="w-[307.34px] sm:w-[300px] md:w-[307.34px] h-auto opacity-100"/>
        </div>

        <div className="max-w-lg text-center md:text-left">
            <h3 className="w-[418.34px] h-[62px] opacity-100 rotate-0">
                <span className="font-inter font-semibold text-[25.06px] leading-[30.63px] tracking-normal text-[#4D4D4D]">
                    How to design your site footer like we did
                </span>
            </h3>
            
            <p className="font-inter font-normal text-[9.74px] leading-[13.92px] tracking-normal text-[#717171] mt-3">
                 Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>

            <button className="mt-5 w-[105.55px] h-[36.49px] bg-[#4CAF4F] font-inter font-medium text-[11.14px] leading-[16.71px] text-[#FFFFFF] rounded-[2.78px]">
              Learn More
            </button>
        </div>
    </div>
  )
}

export default UnlockUi