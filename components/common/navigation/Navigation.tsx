import { CiCircleMinus, CiSquarePlus } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdHome, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/color";
import { sizes } from "../../../styles/sizes";

const Navigation = () => {
  return (
    <footer className="w-screen fixed bottom-0 flex justify-center items-center">
      <div
        style={{
          backgroundColor: colors.background.lightGrey,
          padding: sizes.padding.sm,
          height: sizes.height.lg,
          borderTop: colors.border.line,
        }}
        className="w-full max-w-md flex justify-around items-center"
      >
        <Link to={"/"}>
          <IoMdHome />
        </Link>
        <Link to={"/search"}>
          <IoMdSearch />
        </Link>
        <CiSquarePlus />
        <Link to={"/like"}>
          <IoMdHeartEmpty />
        </Link>
        <Link to={"/mypage"}>
          <CiCircleMinus />
        </Link>
      </div>
    </footer>
  );
};
export default Navigation;
