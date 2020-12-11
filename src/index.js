import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Components
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// Pages
import Home from "./pages/Home.js";
import Info from "./pages/Info.js";

// Page Routing using React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/info">
          {/* Route to the most specific first */}
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
