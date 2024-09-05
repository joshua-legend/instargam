import { LuBadgeCheck } from "react-icons/lu";
import Icon from "../../../common/Icon/Icon";

export type FeedProfileNameProps = {
  name?: string;
  isCeleb?: boolean;
};

const FeedProfileName = ({
  name = "Unnamed",
  isCeleb = false,
}: FeedProfileNameProps) => {
  return (
    <div className="flex gap-1 items-center">
      <span className="text-lg font-bold">{name}</span>
      {isCeleb && <Icon icon={<LuBadgeCheck style={{ color: "#3897F0" }} />} />}
    </div>
  );
};
export default FeedProfileName;
