import StoryBoard from "../components/main/Story/StoryBoard";
import Feed, { FeedProps } from "../components/main/Feed/Feed";
import { bts } from "../constants/bts";
import { feedData } from "../constants/feedData";

const Main = () => {
  return (
    <div>
      <StoryBoard data={bts} />
      {feedData.map((v) => (
        <Feed {...v} />
      ))}
    </div>
  );
};
export default Main;
