import Icon from "../../common/Icon/Icon";
import { IoMdQrScanner } from "react-icons/io";
import Search from "./Search";

const SearchBar = () => {
  return (
    <div className="flex gap-4 items-center p-2">
      <Search />
      <Icon icon={<IoMdQrScanner />} />
    </div>
  );
};
export default SearchBar;
