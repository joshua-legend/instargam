import { FaCamera, FaTelegramPlane } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { colors } from "../../styles/color";

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: "0px 14px 0px 14px",
        height: "44px",
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <FaCamera />
      <div style={{ width: "105px", height: "28px" }}>
        <img
          className="w-full h-full object-contain"
          src="instargram_logo.png"
          alt=""
        />
      </div>
      <div className="flex gap-1">
        <PiTelevisionSimpleDuotone />
        <FaTelegramPlane />
      </div>
    </div>
  );
};
export default TopBar;
