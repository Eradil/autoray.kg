import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Bmw.css";

const bmwModels = [
  {
    model: "3 E36",
    link: "/categories",
    id: 1,
  },
  {
    model: "3 E90",
    link: "/bmw/E90",
    id: 2,
  },
  {
    model: "3 E46",
    link: "/bmw/E46",
    id: 3,
  },
  {
    model: "3 F30",
    link: "/bmw/F30",
    id: 4,
  },
  {
    model: "3 G20",
    link: "/bmw/g20",
    id: 5,
  },
  {
    model: "5 E34",
    link: "/bmw/e34",
    id: 6,
  },
  {
    model: "5 E39",
    link: "/bmw/e39",
    id: 7,
  },
  {
    model: "5 E60",
    link: "/bmw/e60",
    id: 8,
  },
  {
    model: "5 F10, 11",
    link: "/bmw/f10",
    id: 9,
  },
  {
    model: "7 E38",
    link: "/bmw/e38",
    id: 10,
  },
  {
    model: "7 F01",
    link: "/bmw/f01",
    id: 11,
  },
  {
    model: "X3 E83",
    link: "/bmw/e83",
    id: 12,
  },
  {
    model: "X3 G01",
    link: "/bmw/g01",
    id: 13,
  },
  {
    model: "X5 E70",
    link: "/bmw/e70",
    id: 15,
  },
  {
    model: "X6 E71",
    link: "/bmw/e71",
    id: 16,
  },
];

const Bmw = () => {
  const location = useLocation();
  console.log(location);
  const loc = location.pathname;
  const arr = loc.split("");
  arr.splice(0, 1);
  const locations = arr.join("");
  return (
    <div className="container">
      <h1 className="model__title">Каталог {locations}</h1>
      <div className="model__block">
        {bmwModels.map((item) => (
          <div className="model__item">
            <Link className="model__link" to={item.link}>
              Серия {item.model}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bmw;
