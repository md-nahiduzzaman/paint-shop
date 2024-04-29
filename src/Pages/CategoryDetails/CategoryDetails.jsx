import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategoryCard from "../../components/SubCategoryCard/SubCategoryCard";

const CategoryDetails = () => {
  const { subCategory } = useParams();
  console.log(subCategory);

  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${subCategory}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  useEffect(() => {
    document.title = "CraftBD | Product Details";
  }, []);

  return (
    <div className="container mx-auto">
      {/* section title */}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold  lg:w-[40%] md:w-[70%] mb-6">
          Welcome to: {subCategory} Collection
        </h1>
        <p>Item Found: {items.length}</p>
      </div>
      {/* cards */}
      <div className=" ">
        {items.map((item) => (
          <SubCategoryCard key={item._id} item={item}></SubCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
