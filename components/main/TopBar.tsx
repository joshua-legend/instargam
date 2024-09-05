import { FaCamera, FaTelegramPlane } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { colors } from "../../styles/color";
import Icon from "../common/Icon/Icon";
import Image from "../common/image/Image";

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
      <Icon icon={<FaCamera />} />
      <Image src={"instargram_logo.png"} />
      <div className="flex gap-1">
        <Icon icon={<PiTelevisionSimpleDuotone />} />
        <Icon icon={<FaTelegramPlane />} />
      </div>
    </div>
  );
};
export default TopBar;
