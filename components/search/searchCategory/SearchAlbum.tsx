import SearchPhoto from "./SearchPhoto";
import { photo } from "../../../constants/photo";
import { Category } from "../../../router/Search";

type SearchAlbumProps = {
  category: Category;
};

const SearchAlbum = ({ category }: SearchAlbumProps) => {
  if (category === "ALL") {
    return (
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "3px",
        }}
      >
        {photo.map((v) => (
          <SearchPhoto {...v} />
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "3px",
      }}
    >
      {photo
        .filter((v) => v.category === category)
        .map((v) => (
          <SearchPhoto {...v} />
        ))}
    </div>
  );
};
export default SearchAlbum;
