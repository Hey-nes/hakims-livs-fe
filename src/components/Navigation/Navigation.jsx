import { Link } from "react-router-dom";

const Navigation = ({ categories }) => {
  return (
    <div className="hidden-mobile">
      <h1>Kategorier:</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <Link to={`/category/${category._id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
