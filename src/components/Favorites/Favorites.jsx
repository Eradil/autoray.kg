import { Button, List } from "antd";
import React, { useContext, useEffect } from "react";
import { favContext } from "../../favContext";
import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import "../ToolsofBmw/ToolsofBmw.css";

const Favorites = () => {
  const { getCart2, fav, deleteFromCart, changeProductCount } =
    useContext(favContext);

  const { favorite } = fav;
  useEffect(() => {
    getCart2();
  }, []);
  return (
    <div className="container">
      <div style={{ display: "flex" }} className="main-tool ">
        <Card
          className="card__border"
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <List
              itemLayout="horizontal"
              dataSource={fav.favorite}
              style={{ width: 300, height: 270 }}
              renderItem={(item) => (
                <div
                  className="last_adaptive"
                  style={{ marginTop: "20px", display: "flex" }}
                >
                  <p
                    onClick={() => deleteFromCart(item.item.id)}
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </p>
                  <div className="list1">
                    <img className="list_img" src={item.item.img} alt="" />
                    <div className="list1_titles">
                      <h1 className="list_h1">{item.item.good_name}</h1>
                      <p className="list_p">{item.item.description}</p>
                      <h1>${item.item.price_kgs}</h1>
                    </div>
                  </div>
                </div>
              )}
            />
          }
        />
      </div>
    </div>
  );
};

export default Favorites;
