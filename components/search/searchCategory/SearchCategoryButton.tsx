import { Category } from "../../../router/Search";

export type SearchCategoryButtonProps = {
  icon?: React.ReactNode;
  category: Category;
  onClick?: () => void;
};
const SearchCategoryButton = ({
  icon,
  category,
  onClick,
}: SearchCategoryButtonProps) => {
  return (
    <div
      style={{
        padding: "11px 8px",
        border: "1px solid #eaeaea",
        borderRadius: "6px",
        fontWeight: "bold",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{category}</span>
    </div>
  );
};
export default SearchCategoryButton;
