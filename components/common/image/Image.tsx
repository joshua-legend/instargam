import { imageSize, Size } from "../../../styles/sizes";

type ImageProps = {
  src?: string;
  size?: Size;
};

const Image = ({ src = "default.jpg", size = "md" }: ImageProps) => {
  return (
    <div style={imageSize[size]}>
      <img className="w-full h-full object-contain" src={src} alt="" />
    </div>
  );
};

export default Image;
