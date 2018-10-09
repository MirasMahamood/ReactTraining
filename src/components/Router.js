import React from "react";
import { Route, Switch, exact, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Employee from "./employee/Employee";
import Department from "./department/Department";

function Menu() {
  return (
    <section className="content">
      <Switch>
        {/* <Route path="/" component={Login} /> */}
        <Route path="/login" component={Login} />
        <Redirect from="/" exact to="/login" />
        <Route path="/logout" component={Logout} />
        <Route path="/department" component={Department} />
        <Route path="/employee" component={Employee} />
        <Redirect from="*" to="/login" />
        {/* <Route
          path="*"
          render={() => {
            return <h2>404 - Not Found</h2>;
          }}
        /> */}
      </Switch>
    </section>
  );
}

export default Menu;
