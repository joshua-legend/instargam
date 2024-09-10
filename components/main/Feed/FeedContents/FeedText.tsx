export type FeedTextProps = {
  name?: string;
  contents?: string;
};
const FeedText = ({ contents, name }: FeedTextProps) => {
  return (
    <div>
      <span className="font-bold mr-3">{name}</span>
      <span>{contents}</span>
    </div>
  );
};
export default FeedText;
