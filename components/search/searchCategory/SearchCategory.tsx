import SearchCategoryButton from "./SearchCategoryButton";
import { categoryButtons } from "../../../constants/category";
import { Category } from "../../../router/Search";

type SearchCategoryProps = {
  onClick: (e: Category) => void;
};

const SearchCategory = ({ onClick }: SearchCategoryProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-scroll">
      {categoryButtons.map((v) => (
        <SearchCategoryButton {...v} onClick={() => onClick(v.category)} />
      ))}
    </div>
  );
};
export default SearchCategory;
