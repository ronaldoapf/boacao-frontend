import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Donation from "./containers/Donation";
import Register from "./containers/Register";
import PageNotFound from "./containers/PageNotFound";
import Sandbox from "./containers/Sandbox";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/donate">
          <Donation />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/sandbox">
          <Sandbox />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
