import React, { useContext, useState } from "react";
import "./ToolsofBmw.css";
import fav from "../Images/fav.png";
import heart from "../Images/icons8-сердце-100.png";
import { Card, List } from "antd";
import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { favContext } from "../../favContext";
import { partContext } from "../../partsContext";
import { useEffect } from "react";
const { Meta } = Card;

const ToolsofBmw = ({ item }) => {
  console.log(item.good_picture);
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const { getAllCategories, category } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
  }, []);
  console.log(category);
  const params = useParams();
  console.log(params.id + "params");
  console.log(category.id);
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));
  return (
    <div className="container">
      <div className="cards__block">
        <div className="cards">
          <div className="card">
            <div className="card_block">
              <img
                className="card__img"
                src="https://images.prom.ua/2035853805_podvesnoj-podshipnik-mercedes.jpg"
                alt=""
              />
              <img
                src={fav}
                onClick={() => {
                  addProductToCart2(item);
                  setCheckItem2(checkItemInCard2(item.id));
                }}
                key="shopping"
                className="shopping-icon"
              />
              <h1 className="card__name">{item.good_name}</h1>
              <h4 className="card__desc">{item.description}</h4>
              <p className="card__block-vincode">
                Винкод: <span className="vincode">{item.vincode}</span>
              </p>
              <div className="card__block-cat">
                {category.map((elem) =>
                  elem.id == params.id ? (
                    <p className="card__block-category">{elem.category_name}</p>
                  ) : null
                )}
                <div className="card__block-price">
                  <h2 className="card__price-kgs">
                    {Math.ceil(item.price_kgs)} KGZ
                  </h2>
                  <h2 className="card__price-usd">
                    {Math.ceil(item.price_kgs)} $
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsofBmw;
