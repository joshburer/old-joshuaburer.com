import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Routing
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
const Info = React.lazy(() => import("./pages/Info"));
const Projects = React.lazy(() => import("./pages/Projects"));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" exact element={<Info />} />
        </Routes>
      </React.Suspense>
    </Router>
    <Footer />
  </React.StrictMode>
);
