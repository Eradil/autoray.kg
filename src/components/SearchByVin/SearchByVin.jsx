import { Input } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { partContext } from "../../partsContext";

const SearchByVin = () => {
  const { getAllParts, parts } = useContext(partContext);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getAllParts();
  }, []);
  console.log(parts);
  const products = parts
    .filter((items) => {
      if (
        items.good_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        items.vincode.includes(searchValue)
      ) {
        return true;
      }
      return false;
    })
    .map((item) => (
      <div key={item.id}>
        <h1>{item.good_name}</h1>
        <h3>{item.vincode}</h3>
      </div>
    ));

  return (
    <div className="container">
      <Input.Search
        placeholder="Search"
        value={searchValue}
        style={{ width: "25vw", margin: "20px 0" }}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <div className="block">{products}</div>
    </div>
  );
};

export default SearchByVin;
