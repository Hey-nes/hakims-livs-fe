import CategoryListItem from "./CategoryListItem";

const Navigation = ({ categories }) => {
  console.log("Categories:", categories);
  return (
    <>
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category._id} categories={category} />
        ))}
      </ul>
    </>
  );
};

export default Navigation;
