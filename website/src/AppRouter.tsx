import React from "react";
import useIsSignedIn from "./Firebase/linkAuth/useIsSignedIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/home";
import Login from "./Pages/login";

const AppRouter = () => {
  const signedIn = useIsSignedIn();
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home isLoggedIn={signedIn} />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
