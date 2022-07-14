import React, { useReducer } from "react";
import axios from "axios";
import { GET_ALL_PARTS, GET_ONE_PART } from "./helpers/API";

export const partContext = React.createContext();

const API = "http://autoray.kg/api/";

const INIT_STATE = {
  parts: [],
  onePart: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PARTS:
      return { ...state, parts: action.payload };
    case GET_ONE_PART:
      return { ...state, onePart: action.payload };
    default:
      return state;
  }
};

const PartsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllParts() {
    let { data } = await axios.get(`http://autoray.kg/api/car_brands/`);
    dispatch({
      type: GET_ALL_PARTS,
      payload: data,
    });
  }
  async function getAllCategories() {
    let { data } = await axios.get(`http://autoray.kg/api/good_categories/`);
    dispatch({
      type: GET_ALL_PARTS,
      payload: data,
    });
  }
  async function getAllGoods() {
    let { data } = await axios.get(
      "http://autoray.kg/api/goods/" + window.location.search
    );
    dispatch({
      type: GET_ALL_PARTS,
      payload: data,
    });
  }

  async function addParts(newParts) {
    await axios.post(API, newParts);
    getAllParts();
  }

  async function deleteParts(id) {
    await axios.delete(`${API}/${id}`);
    getAllParts();
  }

  async function getOnePart(id) {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: GET_ONE_PART,
      payload: data,
    });
  }

  async function updatePart(edited) {
    await axios.patch(`${API}/${edited.id}`, edited);
    getAllParts();
  }

  return (
    <partContext.Provider
      value={{
        parts: state.parts,
        onePart: state.onePart,
        getAllParts,
        addParts,
        deleteParts,
        getOnePart,
        updatePart,
        getAllCategories,
        getAllGoods,
      }}
    >
      {children}
    </partContext.Provider>
  );
};
export default PartsContextProvider;
