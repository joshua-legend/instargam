import FeedContents from "./FeedContents/FeedContents";
import FeedImages from "./FeedImages/FeedImages";
import FeedInteraction from "./FeedInteraction/FeedInteraction";
import FeedTop from "./FeedTop/FeedTop";

const Feed = () => {
  return (
    <>
      <FeedTop
        src={"jm.webp"}
        name="지민"
        isCeleb={true}
        nation="Japan"
        city="Osaka"
      />
      <FeedImages />
      <FeedInteraction />
      <FeedContents />
    </>
  );
};
export default Feed;
