import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./routes/Features";
import Community from "./routes/Community";
import Events from "./routes/Events";
import Catalogue from "./routes/Catalogue";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Catalogue />} />
        <Route path="features" element={<Features />} />
        <Route path="community" element={<Community />} />
        <Route path="catalogue" element={<Catalogue />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
