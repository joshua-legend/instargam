import FeedDate from "./FeedDate";
import FeedLikeContents, { FeedLikeContentsProps } from "./FeedLikeContents";
import FeedText, { FeedTextProps } from "./FeedText";

export type FeedContentsProps = FeedLikeContentsProps & FeedTextProps;
const FeedContents = (props: FeedContentsProps) => {
  return (
    <div>
      <FeedLikeContents {...props} />
      <FeedText {...props} />
      <FeedDate />
    </div>
  );
};

export default FeedContents;
