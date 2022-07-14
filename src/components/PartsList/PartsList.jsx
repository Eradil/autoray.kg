import React, { useContext, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import ToolsofBmw from "../ToolsofBmw/ToolsofBmw";

const PartsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { parts, getAllParts } = useContext(partContext);
  const location = useLocation();
  useEffect(() => {
    getAllParts();
  }, []);

  useEffect(() => {
    setSearchParams({
      brand: location.pathname.slice(1, location.pathname.length),
      category: "Кузовные запчасти",
      model: "Focus C-MAX 2003-2007",
    });
  }, []);

  useEffect(() => {
    getAllParts();
  }, [searchParams]);

  return (
    <div>
      {parts?.map((item) => (
        <ToolsofBmw key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PartsList;
