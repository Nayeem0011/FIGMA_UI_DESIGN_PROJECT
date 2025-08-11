import img1 from "../assets/Logo2.jpg";
import img2 from "../assets/Logo3.jpg";
import img3 from "../assets/Logo4.jpg";
import img4 from "../assets/Logo5.jpg";
import img5 from "../assets/Logo6.jpg";
import img6 from "../assets/Logo7.jpg";
import img7 from "../assets/Logo8.jpg";

const ClientsUi = () => {

const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div>
        <div className="font-inter font-semibold text-[25.06px] leading-[30.63px] tracking-normal text-center mt-[22px] text-[#4D4D4D]">
            <h2>Our Clients</h2>
        </div>
        <div className="font-inter font-normal text-[13px] leading-[16.71px] tracking-normal text-center mt-[8px] text-[#717171]">
            <p>
                We have been working with some Fortune 500+ clients
            </p>
        </div>

        <div className="flex items-center justify-between max-w-7xl mx-auto h-[69px] mt-3 mb-3 p-10">
            {
                images.map((src, index) => (
                    <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-[33px] h-[33px] opacity-100 rotate-0"/>))
            }
        </div>
    </div>
  )
}

export default ClientsUi
