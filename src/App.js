import React from "react";
import { Routes,Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Business from './components/Business/Business';
import Entertainment from "./components/Entertainment/Entertainment";
import General from "./components/General/General";
// import { Route } from "react-router";

function App() {
  return (
    <div>
      <Header></Header>
      
      
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="business" element={<Business/>} />
        <Route path="entertainment" element={<Entertainment/>} />
        <Route path="general" element={<General/>} />
      </Routes>
    </div>
  );
}

export default App;
