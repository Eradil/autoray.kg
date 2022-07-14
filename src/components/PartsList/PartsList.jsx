import React, { useContext, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import ToolsofBmw from "../ToolsofBmw/ToolsofBmw";

const PartsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { parts, getAllParts } = useContext(partContext);
  const location = useLocation();
  let loc = location.pathname.slice(29, location.pathname.length);

  let lock = location.pathname.slice(8, location.pathname.length);
  let regex = parseInt(lock);

  let local = loc.match(/[0-9]/g);
  let arr = local.join("");
  let arr1 = parseInt(arr);


  useEffect(() => {
    getAllParts();
  }, []);

  useEffect(() => {
    getAllParts();
  }, []);

  return (
    <div>
      {parts?.map((item) =>
        item.category == arr1 && item.car_model == regex ? (
          <ToolsofBmw key={item.id} item={item} />
        ) : null
      )}
    </div>
  );
};

export default PartsList;
