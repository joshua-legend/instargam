import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import Icon from "../../../common/Icon/Icon";
import { useState } from "react";

const FeedInteraction = () => {
  const [isLike, setIsLike] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-4">
        <Icon
          onClick={() => setIsLike((prev) => !prev)}
          icon={isLike ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
        />
        <Icon icon={<FaRegComment />} />
        <Icon icon={<PiTelegramLogo />} />
      </div>
      <div>
        <Icon
          onClick={() => setIsBooked((prev) => !prev)}
          icon={isBooked ? <FaBookmark /> : <FaRegBookmark />}
        />
      </div>
    </div>
  );
};

export default FeedInteraction;
