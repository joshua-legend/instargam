import FeedImage, { FeedImageProps } from "./FeedImage";

type FeedImagesProps = {
  images: FeedImageProps[];
};

/**
 * @deprecated Use `FeedSwiperImages` instead.
 */
const FeedImages = ({ images }: FeedImagesProps) => {
  return (
    <div className="flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
      {images.map((v) => (
        <FeedImage {...v} />
      ))}
    </div>
  );
};

export default FeedImages;
