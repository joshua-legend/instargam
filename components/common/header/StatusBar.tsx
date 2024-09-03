import { colors } from "../../../styles/color";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";

const StatusBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: "0px 14px 0px 20px",
        height: "44px",
        borderTop: colors.border.line,
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <div>
        <span>9:43</span>
      </div>
      <div className="flex gap-1 ">
        <FaSignal />
        <FaWifi />
        <FaBatteryFull />
      </div>
    </div>
  );
};

export default StatusBar;
