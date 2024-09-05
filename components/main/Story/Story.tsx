import StoryImage, { StoryImageProps } from "./StoryImage";
import StoryName, { StoryNameProps } from "./StoryName";

export type StoryProps = StoryImageProps & StoryNameProps;

const Story = ({ name, src }: StoryProps) => {
  return (
    <div className="flex flex-col items-center">
      <StoryImage src={src} />
      <StoryName name={name} />
    </div>
  );
};

export default Story;
