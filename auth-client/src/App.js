import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";

import PrivateRoutes from "./util/PrivateRoutes";




function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes/>}>
          <Route exact path="/" element={<Home/>} />
        </Route>

        {/* old way below now it the new way */}
        {/* <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        /> */}

      </Routes>
    </div>
  );
}

export default App;
