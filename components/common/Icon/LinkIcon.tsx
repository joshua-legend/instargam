import { Link } from "react-router-dom";
import { iconSize, Size } from "../../../styles/sizes";

type LinkIconProps = {
  pageUrl: string;
  iconTag: React.ReactNode;
  size?: Size;
};

const LinkIcon = ({ pageUrl, iconTag, size = "md" }: LinkIconProps) => {
  return (
    <Link
      to={pageUrl}
      className="flex items-center justify-center"
      style={{
        ...iconSize[size],
      }}
    >
      {iconTag}
    </Link>
  );
};

export default LinkIcon;
