import { Route, Switch } from "react-router-dom";

/* --- layouts --- */
// import DefaultLayout from "./layouts/DefaultLayout";
// import AuthLayout from "./layouts/AuthLayout";

import Login from "../pages/Auth/Login";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import Dev from "../pages/Dev/Dev";

export default function RouterView() {
  return (
    <Switch>
      <Route path="/login" render={() => <Login />} />
      <Route exact path="/" render={() => <Index />} />
      <Route path="/dev" render={() => <Dev />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}
