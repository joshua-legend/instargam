import { BsThreeDots } from "react-icons/bs";
import Icon from "../../../common/Icon/Icon";
import FeedProfileImage, { FeedProfileImageProps } from "./FeedProfileImage";
import FeedProfileName, { FeedProfileNameProps } from "./FeedProfileName";
import FeedProfilePlace, { FeedProfilePlaceProps } from "./FeedProfilePlace";

export type FeedTopProps = FeedProfileImageProps &
  FeedProfileNameProps &
  FeedProfilePlaceProps;

const FeedTop = ({ src, name, isCeleb, city, nation }: FeedTopProps) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex gap-1 items-center">
        <FeedProfileImage src={src} />
        <div className="flex flex-col">
          <FeedProfileName name={name} isCeleb={isCeleb} />
          <FeedProfilePlace city={city} nation={nation} />
        </div>
      </div>
      <Icon icon={<BsThreeDots />} />
    </div>
  );
};
export default FeedTop;
