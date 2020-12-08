import './App.css';
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Contact from "./Contact.js"

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
