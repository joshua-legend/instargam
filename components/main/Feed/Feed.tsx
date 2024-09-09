import FeedContents from "./FeedContents/FeedContents";
import FeedImages from "./FeedImages/FeedImages";
import FeedInteraction from "./FeedInteraction/FeedInteraction";
import FeedSwiperImages from "./FeedSwiperImages/FeedSwiperImages";
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
      <FeedSwiperImages
        slides={[{ src: "jhope.webp" }, { src: "jm.webp" }, { src: "v.webp" }]}
      />
      <FeedInteraction />
      <FeedContents />
    </>
  );
};
export default Feed;
