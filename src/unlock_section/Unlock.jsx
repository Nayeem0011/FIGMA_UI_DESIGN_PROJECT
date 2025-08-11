
import imge from "../assets/frame.jpg" 

const Unlock = () => {
  return (
      <div className="mt-3 gap-4 px-4 md:px-10 lg:px-[100px] ">
        <div className=" max-w-5xl mx-auto flex flex-col md:flex-row  items-center justify-between">
            <div >
                <img src={imge} alt="image"  className="w-[307.66px] h-[301.4px] opacity-100 rotate-0"/>
            </div>
            <div className="gap-[22.27px]  md:text-left max-w-lg text-center mb-4">
                <h2 className="font-inter font-semibold text-[25.06px] leading-[30.63px] tracking-normal text-[#4D4D4D]">
                    The unseen of spending three years at Pixelgrade
                </h2>
                <p className="font-inter font-normal text-[9.74px] leading-[13.92px] tracking-normal text-[#717171] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <div className=" inline-flex w-[105.55px] h-[36.49px] opacity-100 pt-[9.74px] pr-[22.27px] pb-[9.74px] pl-[22.27px] rounded-[2.78px] gap-[6.96px] rotate-0 bg-[#4CAF4F] mt-4">
                    <button className="font-inter font-medium text-[11.14px] leading-[16.71px] tracking-normal text-center align-middle text-[#FFFFFF]">
                        Learn More
                    </button>
                </div>
            </div>
            
        </div>
      </div>
  )
}

export default Unlock
