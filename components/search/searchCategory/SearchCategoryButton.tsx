export type SearchCategoryButtonProps = {
  icon?: React.ReactNode;
  category?: string;
};
const SearchCategoryButton = ({
  icon,
  category,
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
    >
      <span>{icon}</span>
      <span>{category}</span>
    </div>
  );
};
export default SearchCategoryButton;
