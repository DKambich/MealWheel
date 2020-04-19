import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DineIn from "./pages/DineIn";
import CarryOut from "./pages/CarryOut";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/MealWheel/home" component={Home} />
        <Route path="/MealWheel/dinein" component={DineIn} />
        <Route path="/MealWheel/carryout" component={CarryOut} />
        <Redirect from="/" to="/MealWheel/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
