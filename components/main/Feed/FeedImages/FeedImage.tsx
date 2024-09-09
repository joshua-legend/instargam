export type FeedImageProps = {
  src?: string;
};

const FeedImage = ({ src = "v.webp" }: FeedImageProps) => {
  return (
    <div className="w-full h-full">
      <img className="w-full h-full object-cover" src={src} alt="" />
    </div>
  );
};
export default FeedImage;
