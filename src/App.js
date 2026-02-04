import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Movies from "./components/Movies";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Payment from "./components/Payment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/booking" component={Booking} />
        <Route path="/login" component={Login} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
