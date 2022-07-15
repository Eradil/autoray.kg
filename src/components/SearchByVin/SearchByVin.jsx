import { Input } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import SearchCart from "./SearchCart";

const SearchByVin = () => {
  const { parts, getAllParts } = useContext(partContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getAllParts();
  }, []);

  useEffect(() => {
    setSearchParams({
      search: searchValue,
      vincode: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getAllParts();
  }, [searchParams]);

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input.Search
          className="search__input"
          placeholder="Поиск по VIN-коду..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="esesse">
        {parts.map((item) => (
          <SearchCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchByVin;
