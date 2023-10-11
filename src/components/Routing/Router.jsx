import React from "react";
import { Route } from "react-router-dom";
import { home_route, reward_route, trip_route } from "./Routes";

const Router = () => {
  return (
    <Router>
      <Route path={home_route} />
      <Route path={trip_route} />
      <Route path={reward_route} />
    </Router>
  );
};

export default Router;
