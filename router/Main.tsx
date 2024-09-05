import Icon from "../components/common/Icon/Icon";
import FeedProfileImage from "../components/main/Feed/FeedTop/FeedProfileImage";
import Story, { StoryProps } from "../components/main/Story/Story";
import StoryBoard from "../components/main/Story/StoryBoard";
import { LuBadgeCheck } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import FeedProfileName from "../components/main/Feed/FeedTop/FeedProfileName";
import FeedProfilePlace from "../components/main/Feed/FeedTop/FeedProfilePlace";
import FeedTop from "../components/main/Feed/FeedTop/FeedTop";
import Feed from "../components/main/Feed/Feed";

const Main = () => {
  const bts: StoryProps[] = [
    { src: "jhope.webp", name: "김호석", isLive: true },
    { src: "rm.webp", name: "김남준" },
    { src: "jin.webp", name: "김석진" },
    { src: "jm.webp", name: "박지민", isLive: true },
    { src: "jhope.webp", name: "김호석" },
    { src: "rm.webp", name: "김남준" },
    { src: "jin.webp", name: "김석진" },
    { src: "jm.webp", name: "박지민" },
    { src: "jhope.webp", name: "김호석" },
    { src: "rm.webp", name: "김남준" },
    { src: "jin.webp", name: "김석진" },
    { src: "jm.webp", name: "박지민" },
  ];

  return (
    <div>
      <StoryBoard data={bts} />
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
};
export default Main;
