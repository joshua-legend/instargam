type FeedPhotoNumberProps = {
  nowPage: number;
  slidesLength: number;
};

const FeedPhotoNumber = ({ nowPage, slidesLength }: FeedPhotoNumberProps) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        top: "5px",
        zIndex: "2",
        fontSize: "12px",
        color: "white",
        backgroundColor: "rgba(18,18,18,0.7)",
        borderRadius: "9999px",
        padding: "6px 8px",
      }}
    >
      {nowPage} / {slidesLength}
    </div>
  );
};

export default FeedPhotoNumber;
