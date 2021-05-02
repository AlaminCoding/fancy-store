import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Shop from "./components/shop";
import AppState from "./context/app-state";
function App() {
  return (
    <React.Fragment>
      <AppState>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
          </Switch>
        </Router>
      </AppState>
    </React.Fragment>
  );
}

export default App;
