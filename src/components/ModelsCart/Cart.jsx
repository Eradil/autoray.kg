import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { brands } from "../../helpers/BrandCar";
import { partContext } from "../../partsContext";

import "./Cart.css";
const Cart = () => {
  const { getAllParts, parts } = useContext(partContext);
  useEffect(() => {
    getAllParts();
  }, []);

  return (
    <section class="container" id="catalog">
      <div className="catalog_wrapper">
        {brands.map((item) =>
          parts.map((brands) =>
            item.id === brands.id ? (
              <Link to={"/nodata"} class="catalog-link" href="#">
                <img width={300} src={item.img} alt="" />
                {/* <h1>{brands.brand_name}</h1> */}
              </Link>
            ) : null
          )
        )}
      </div>
    </section>
  );
};

export default Cart;
