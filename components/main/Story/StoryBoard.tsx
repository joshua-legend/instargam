import Story, { StoryProps } from "./Story";

type StoryBoardProps = {
  data: StoryProps[];
};
const StoryBoard = ({ data }: StoryBoardProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-scroll">
      {data.map((v) => (
        <Story {...v} />
      ))}
    </div>
  );
};
export default StoryBoard;
