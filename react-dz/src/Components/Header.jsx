import React from "react";
import FirstDz from "../Pages/First dz components/FirstDz";
import SecondDz from "../Pages/Second dz components/SecondDz";
import ThirdDz from "../Pages/Third dz components/ThirdDz";
import UploadFile from "../Pages/Third dz components/UpoloadFileComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Router>
      <header>
        <div className="logo">
          <span>REACT DZ</span>
        </div>
        <div className="nav">
          <Link to="/">First dz</Link>
          <Link to="/secondDz">Second dz</Link>
          <Link to="/thirdDz">Third dz</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<FirstDz />} />
        <Route path="/secondDz" element={<SecondDz />} />
        <Route path="/thirdDz" element={<ThirdDz />} />
        <Route path="/thirdDz/:uploadFile" element={<UploadFile />} />
      </Routes>
    </Router>
  );
}
