export type StoryLiveProps = {
  isLive?: boolean;
};

const StoryLive = ({ isLive = false }: StoryLiveProps) => {
  if (!isLive) return <div></div>;
  return (
    <div
      className="absolute font-bold text-white border-2 border-white rounded-lg"
      style={{
        padding: "3px 4px",
        fontSize: "8px",
        backgroundColor: "#D91A46",
        bottom: "18px",
      }}
    >
      LIVE
    </div>
  );
};
export default StoryLive;
