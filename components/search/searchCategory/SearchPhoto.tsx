type SearchPhotoProps = {
  src?: string;
};

const SearchPhoto = ({ src }: SearchPhotoProps) => {
  console.log(src);
  return (
    <div style={{ width: "100%", height: "150px" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={src}
        alt=""
      />
    </div>
  );
};
export default SearchPhoto;
