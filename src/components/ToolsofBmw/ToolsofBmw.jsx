import React from "react";
import "./ToolsofBmw.css";
import undefined from "../Images/image-not-found-scaled-1150x647.png";
import { Card } from "antd";
import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
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
            <img
              style={{ width: 300, height: 270 }}
              alt="example"
              src={item.img ? item.img : undefined}
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <ShoppingCartOutlined key="shopping" className="shopping-icon" />,
          ]}
        >
          <Meta title={item.title} description={"$" + item.category} />
        </Card>
      </div>
    </div>
  );
};

export default ToolsofBmw;
