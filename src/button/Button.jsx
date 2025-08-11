import { HiArrowNarrowRight } from "react-icons/hi";

export default function Button() {
  return (
    <div className="button_bg rounded">
      <button className="w-[144px] h-[44px] flex items-center justify-center gap-[6px]">
        Register Naw
        <HiArrowNarrowRight className="text-lg" />
      </button>
    </div>
  );
}
