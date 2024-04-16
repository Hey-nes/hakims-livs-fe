import CategoryListItem from "./CategoryListItem";

const Navigation = ({ categories }) => {
  return (
    <div className="hidden-mobile">
      <h1>Kategorier:</h1>
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category._id} categories={category} />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
