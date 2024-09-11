import { IoSearchOutline } from "react-icons/io5";
import Icon from "../../common/Icon/Icon";

const Search = () => {
  return (
    <div
      style={{
        backgroundColor: "#eaeaea",
        padding: "11px",
        borderRadius: "10px",
      }}
      className="flex flex-1 gap-2"
    >
      <Icon icon={<IoSearchOutline />} />
      <input
        style={{
          backgroundColor: "#eaeaea",
          border: "none",
          outline: "none",
          width: "100%",
        }}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};
export default Search;
