import React from "react";
import "./ToolsofBmw.css";
import { Card, List } from "antd";
import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const ToolsofBmw = ({ item }) => {
  return (
    <div className="container">
      <div className="main-tool ">
        <Card
          className="card__border"
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <List
              itemLayout="horizontal"
              dataSource={item.good_picture}
              style={{ width: 300, height: 270 }}
              renderItem={(item) => <img alt="example" src={item.picture} />}
            />
          }
          actions={[
            <Link to={`/details/${item.id}`}>
              <SettingOutlined key="setting" />
            </Link>,
            <ShoppingCartOutlined key="shopping" className="shopping-icon" />,
          ]}
        >
          <Meta
            title={item.good_name}
            description={
              <div>
                <h3>{item.description}</h3>
                <h4>{"KGS " + Math.ceil(item.price_kgs)}</h4>
              </div>
            }
          />
        </Card>
      </div>
    </div>
  );
};

export default ToolsofBmw;
