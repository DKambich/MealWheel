import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DineIn from "./pages/DineIn";
import CarryOut from "./pages/CarryOut";
import { routes } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/MealWheel/${routes.HOME}`} component={Home} />
        <Route path={`/MealWheel/${routes.DINE_IN}`} component={DineIn} />
        <Route path={`/MealWheel/${routes.CARRY_OUT}`} component={CarryOut} />
        <Redirect from="/" to={`/MealWheel/${routes.HOME}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
