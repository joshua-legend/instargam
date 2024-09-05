import { CiCircleMinus, CiSquarePlus } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdHome, IoMdSearch } from "react-icons/io";
import { colors } from "../../../styles/color";
import { sizes } from "../../../styles/sizes";
import LinkIcon from "../Icon/LinkIcon";

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
        <LinkIcon pageUrl="/" iconTag={<IoMdHome />} />
        <LinkIcon pageUrl="/search" iconTag={<IoMdSearch />} />
        <LinkIcon pageUrl="/plus" iconTag={<CiSquarePlus />} />
        <LinkIcon pageUrl="/like" iconTag={<IoMdHeartEmpty />} />
        <LinkIcon pageUrl="/mypage" iconTag={<CiCircleMinus />} />
      </div>
    </footer>
  );
};
export default Navigation;
