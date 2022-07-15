import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./SearchCss.css";

const { Meta } = Card;

const SearchCart = ({ item }) => {
  return (
    <Card
      className="card__borderes"
      hoverable
      cover={
        <List
          dataSource={item.good_picture}
          className="list__tools"
          renderItem={(item) => <img alt="example" src={item.picture} />}
        />
      }
      actions={[
        <Link to={`/details/${item.id}`}>
          <SettingOutlined key="setting" />
        </Link>,
        <ShoppingCartOutlined key="shopping" className="shopping-icones" />,
      ]}
    >
      <Meta
        title={item.good_name}
        description={
          <div>
            <h3>{item.description}</h3>
            <h3>{item.vincode}</h3>
            <h4>{"KGS " + Math.ceil(item.price_kgs)}</h4>
          </div>
        }
      />
    </Card>
  );
};

export default SearchCart;
