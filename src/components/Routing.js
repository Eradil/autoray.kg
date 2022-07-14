import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Guearentees from "./Guarantees/Guearantees";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Bmw from "./Models/Bmw/Bmw";
import Forma from "./Forma/Forma";
import ToolsofBmw from "./ToolsofBmw/ToolsofBmw";
import Categories from "./Categories/Categories";
import Details from "./Details/Details";
import HeaderTop from "./HeaderTop/HeaderTop";
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import AdminPage from "./AdminPage/AdminPage";
import PartsList from "./PartsList/PartsList";
import Support from "./Support/Support";
import Cart from "./ModelsCart/Cart";
import NoData from "./Empty/NoData";
import SearchByVin from "./SearchByVin/SearchByVin";
import ResultError from "./Result/ResultError";

const Routing = () => {
  const links = [
    {
      link: "/ford",
      element: <PartsList />,
      id: 1,
    },
    // {
    //   link: "/list",
    //   element: <PartsList />,
    //   id: 2,
    // },
    // {
    //   link: "/CHEVROLET",
    //   element: <PartsList />,
    //   id: 3,
    // },
  ];
  return (
    <BrowserRouter>
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/bmw" element={<Bmw />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="/searchby" element={<SearchByVin />} /> */}
        <Route path="/cartModels" element={<Cart />} />
        <Route path="/*" element={<ResultError />} />
        <Route path="/login" element={<Forma />} />
        <Route path="/tools" element={<ToolsofBmw />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/guarentees" element={<Guearentees />} />
        <Route path="/nodata" element={<NoData />} />
        {links.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
      </Routes>
      <Support />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
