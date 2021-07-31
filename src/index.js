import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
const Info = React.lazy(() => import("./pages/Info"));
const Projects = React.lazy(() => import("./pages/Projects"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <React.Suspense fallback={null}>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/info" exact component={Info} />
        </React.Suspense>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
