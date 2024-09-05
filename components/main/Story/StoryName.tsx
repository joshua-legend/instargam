export type StoryNameProps = {
  name?: string;
};

const StoryName = ({ name = "V" }: StoryNameProps) => {
  return <span className="text-sm">{name}</span>;
};

export default StoryName;
