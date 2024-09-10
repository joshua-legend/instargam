import { getLikeMessage } from "../../../../util/message";
import FeedProfileImage from "../FeedTop/FeedProfileImage";

export type FeedLikeContentsProps = {
  people?: { name: string; image: string }[];
};

const FeedLikeContents = ({ people = [] }: FeedLikeContentsProps) => {
  return (
    <div className="flex items-center gap-2">
      {people.length > 0 && <FeedProfileImage src={people[0].image} />}
      <span>{getLikeMessage(people.map((v) => v.name))}</span>
    </div>
  );
};
export default FeedLikeContents;
