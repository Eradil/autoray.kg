import React, { useContext } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import { categories } from "../../helpers/categorie";
import { partContext } from "../../partsContext";
import { useEffect } from "react";

const Categories = () => {
  const navigate = useNavigate();
  const { getAllCategories, parts } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
  }, []);
  console.log(categories);

  return (
    <div className="categories_wrapper">
      <div className="categories_inner">
        <h2>Категории</h2>
        <div className="categories__card-wrapper">
          {categories.map((item) =>
            parts.map((category) =>
              category.id === item.id ? (
                <>
                  <div className="categories_card-item">
                    <img
                      onClick={() => navigate(`${category.link}`)}
                      className="categories_card-img"
                      src={item.img}
                      alt=""
                    />
                    <h3 className="category-item">{category.category_name}</h3>
                  </div>
                </>
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
