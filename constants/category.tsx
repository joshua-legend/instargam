import { BiSolidTv } from "react-icons/bi";
import { SearchCategoryButtonProps } from "../components/search/searchCategory/SearchCategoryButton";
import { FaShoppingCart } from "react-icons/fa";

export const categoryButtons: SearchCategoryButtonProps[] = [
  { category: "IGTV", icon: <BiSolidTv /> },
  { category: "Shop", icon: <FaShoppingCart /> },
  { category: "Style" },
  { category: "Sports" },
  { category: "Auto" },
  { category: "Fashion" },
  { category: "Food" },
  { category: "News" },
];
