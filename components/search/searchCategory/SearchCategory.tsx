import SearchCategoryButton, {
  SearchCategoryButtonProps,
} from "./SearchCategoryButton";
import { BiSolidTv } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const SearchCategory = () => {
  const arr: SearchCategoryButtonProps[] = [
    { category: "IGTV", icon: <BiSolidTv /> },
    { category: "Shop", icon: <FaShoppingCart /> },
    { category: "Style" },
    { category: "Sports" },
    { category: "Auto" },
    { category: "Fashion" },
    { category: "Food" },
    { category: "News" },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-scroll">
      {[arr.map((v) => <SearchCategoryButton {...v} />)]}
    </div>
  );
};
export default SearchCategory;
