import Story, { StoryProps } from "../components/main/Story/Story";
import StoryBoard from "../components/main/Story/StoryBoard";

const Main = () => {
  const bts: StoryProps[] = [
    { src: "jhope.webp", name: "김호석" },
    { src: "rm.webp", name: "김남준" },
    { src: "jin.webp", name: "김석진" },
    { src: "jm.webp", name: "박지민" },
    { src: "jhope.webp", name: "김호석" },
    { src: "rm.webp", name: "김남준" },
    { src: "jin.webp", name: "김석진" },
    { src: "jm.webp", name: "박지민" },
    { src: "jhope.webp", name: "김호석" },
    { src: "rm.webp", name: "김남준" },
    { src: "jin.webp", name: "김석진" },
    { src: "jm.webp", name: "박지민" },
  ];

  return (
    <div>
      <StoryBoard data={bts} />
    </div>
  );
};
export default Main;
