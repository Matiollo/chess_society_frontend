import React from "react";
import Navbar from "./components/Navbar/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
