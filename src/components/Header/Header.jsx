import React, { useState } from "react";
import "./Header.css";
import image1 from "../Images/logo11.svg";
import image2 from "../Images/search.png";
import image3 from "../Images/menu.png";
import image4 from "../Images/account.png";
import image5 from "../Images/close.png";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../helpers/categorie";
import { useContext } from "react";
import { partContext } from "../../partsContext";
import { useEffect } from "react";
import { HeartOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const brands = [
  {
    name: "BMW",
    id: 1,
    link: "/bmw",
  },
  {
    name: "Mersedes - Benz",
    id: 2,
    link: "/mersedes",
  },
  {
    name: "Lexus",
    id: 3,
    link: "/Lexus",
  },
  {
    name: "Toyota",
    id: 4,
    link: "/toyota",
  },
  {
    name: "Mazda",
    id: 5,
    link: "/Mazda",
  },
];

const NAVBAR_ITEMS = [
  {
    title: "Главная",
    link: "/",
    id: 1,
  },
  {
    title: "О нас",
    link: "/about",
    id: 1,
  },
  {
    title: "Категории",
    link: "/categories",
    id: 1,
  },
  {
    title: "Контакты",
    link: "/contacts",
    id: 1,
  },
  {
    title: "Гарантии",
    link: "/guarentees",
    id: 1,
  },
  {
    title: "Maрки",
    link: "/cartModels",
    id: 1,
  },
];

const Header = () => {
  const [features, setFeatures] = useState(false);
  const [all, setAll] = useState(false);
  const [active, setActive] = useState("header2-block4");
  const navToggle = () => {
    active === "header2-block4"
      ? setActive("header2-block4 nav-active")
      : setActive("header2-block4");
  };
  const location = useLocation();
  return (
    <>
      <div className="header">
        <div className="container-header">
          <div className="header1">
            <div className="header1-block1">
              <Link to="/">
                <img className="header-logo" src={image1} alt="" />
              </Link>
            </div>
            <div className="header1-block2">
              <Tooltip placement="bottom" title="Избранное">
                <HeartOutlined className="HeartFilled" />
              </Tooltip>

              <Link to="/#">
                <Tooltip placement="bottom" title="поиск по VIN-code">
                  <Button icon={<SearchOutlined />} size="large">
                    Поиск
                  </Button>
                </Tooltip>
              </Link>
            </div>
          </div>
          <div className="header2">
            <div
              onClick={() => {
                setAll(!all);
                setFeatures(false);
              }}
              className="header2-block1"
            >
              <h5 className="header-h5">ВСЕ КАТЕГОРИИ</h5>
              <img className="burger" src={image3} alt="" />
              {all ? (
                <div className="all">
                  {categories.map((item) => (
                    <span key={item.id} className="all-link">
                      {item.title}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="header2-block2">
              <div className="header-media">
                <input
                  className="header-input2"
                  type="text"
                  placeholder="Поиск ..."
                />
                <img className="header-search-img2 " src={image2} alt="" />
                <img
                  onClick={navToggle}
                  className="burger-block2"
                  src={image3}
                  alt=""
                />
              </div>
              <div className={active}>
                <img
                  onClick={navToggle}
                  src={image5}
                  alt=""
                  className="close"
                />

                {NAVBAR_ITEMS.map((navLink) => (
                  <Link
                    className={
                      location.pathname === navLink.link
                        ? "header2-active"
                        : "header2-a"
                    }
                    key={navLink.id}
                    to={navLink.link}
                  >
                    {navLink.title}
                  </Link>
                ))}
                {/* <p
                  onClick={() => {
                    setFeatures(!features);
                    setAll(false);
                  }}
                  className="header2-a"
                >
                  Марки
                </p> */}
              </div>
              {features ? (
                <div className="features">
                  <div className="features-block1">
                    {brands.map((item) => (
                      <Link to={item.link}>
                        <h4
                          onClick={() => setFeatures(false)}
                          className="features-h4"
                        >
                          {item.name}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="border__lines-12"></div>
    </>
  );
};

export default Header;
