// import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";

const SearchByVin = () => {
  const { getAllGoods, parts } = useContext(partContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [vincode, setVincode] = useState([]);
  useEffect(() => {
    getAllGoods();
  }, []);

  useEffect(() => {
    setSearchParams({
      searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getAllGoods();
  }, [searchParams]);
  console.log(searchValue);
  return (
    <div>
      <Input.Search
        placeholder="Search"
        value={(searchValue, vincode)}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setVincode(e.target.value);
        }}
      />

      <div className="block">
        {parts.map((item) =>
          searchValue || vincode == item.searchValue || item.good_name ? (
            <div>
              <h1>{item.vincode}</h1>
              <h1>{item.good_name}</h1>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchByVin;
