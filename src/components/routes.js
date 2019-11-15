import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const routes = (currentUser) => {
  if(currentUser) {
    return (
        <Switch>
          <Route path={'/dashboard'}><Dashboard/></Route>
          <Route path={'/users'}><Users/></Route>
          <Redirect from={'*'} to={"/dashboard"}/>
        </Switch>
    )
  }

  return (
      <Switch>
        <Route path={'/login'}><Login /></Route>
        <Route path={'/register'}><Register/></Route>
        <Redirect from={'*'} to={"/login"}/>
      </Switch>
  );
};

export default routes;
