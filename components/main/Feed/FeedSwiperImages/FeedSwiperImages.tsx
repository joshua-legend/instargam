// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FeedImage, { FeedImageProps } from "../FeedImages/FeedImage";
import { useState } from "react";
import FeedPhotoNumber from "./FeedPhotoNumber";

export type FeedSwiperImagesProps = {
  slides: FeedImageProps[];
};

const FeedSwiperImages = ({ slides }: FeedSwiperImagesProps) => {
  const [nowPage, setNowPage] = useState<number>(1);

  return (
    <div style={{ position: "relative" }}>
      <FeedPhotoNumber nowPage={nowPage} slidesLength={slides.length} />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(x: any) => setNowPage((prev) => x.activeIndex + 1)}
        pagination={true}
        modules={[Pagination]}
        className="w-full h-96"
      >
        {slides.map((v) => (
          <SwiperSlide>
            <FeedImage {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default FeedSwiperImages;
