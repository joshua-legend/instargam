import { useState } from "react";
import SearchBar from "../components/search/searchbar/SearchBar";
import SearchAlbum from "../components/search/searchCategory/SearchAlbum";
import SearchCategory from "../components/search/searchCategory/SearchCategory";

export type Category =
  | "IGTV"
  | "Shop"
  | "Style"
  | "Sports"
  | "Auto"
  | "Fashion"
  | "Food"
  | "News"
  | "ALL";

const Search = () => {
  const [category, setCategory] = useState<Category>("ALL");
  const changeCategory = (data: Category) => setCategory((prev) => data);

  return (
    <div className="min-w-full">
      <SearchBar />
      <SearchCategory onClick={changeCategory} />
      <SearchAlbum category={category} />
    </div>
  );
};

export default Search;
