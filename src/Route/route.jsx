import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import P_Home from "../container/Factory/Pages/Front/P_Home";
export default function AppRoute() {
  return (
    <Router>
        <Routes>
        <Route path="/about" element={<>About</>}/>
        <Route path="/user" element={<>User</>}/>
        <Route path="/" element={<P_Home/>}/>
         
        </Routes>
    </Router>
  );
}
