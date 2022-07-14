import React from "react";
import "./App.css";
import "antd/dist/antd.css"; // import 'antd/dist/antd.css'; //

import Routing from "./components/Routing";
import PartsContextProvider from "./partsContext";
function App() {
  return (
    <PartsContextProvider>
      <Routing />
    </PartsContextProvider>
  );
}

export default App;
