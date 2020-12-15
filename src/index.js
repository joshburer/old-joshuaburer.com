import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

// Components
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// Pages
import Home from "./pages/Home.js";
import Info from "./pages/Info.js";
import Projects from "./pages/Projects";


// Page Routing using React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const pages = ["Home", "Info", "Projects"];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar pages={pages} />
      <Switch>
        {/* Route to most specific first */}
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
