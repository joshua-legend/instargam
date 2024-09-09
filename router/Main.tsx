import Story, { StoryProps } from "../components/main/Story/Story";
import StoryBoard from "../components/main/Story/StoryBoard";

import Feed from "../components/main/Feed/Feed";
import FeedSwiperImages from "../components/main/Feed/FeedSwiperImages/FeedSwiperImages";

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
    </div>
  );
};
export default Main;
