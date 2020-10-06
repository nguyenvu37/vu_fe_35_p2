import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import Waiting from "../../common/waiting";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import routes from "../../config/routeUserPages";

const AddTitle = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (document.title = rest.title) && <Component {...props} />;
    }}
  />
);

function UserPage(props) {
  return (
    <Suspense
      fallback={
        <Waiting custom={{ position: "relative", top: "300px", left: "50%" }} />
      }
    >
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => {
            const component = lazy(() => import(`${route.component}`));
            return (
              <AddTitle
                key={"routes" + i}
                exact
                title={route.title}
                path={route.path}
                component={component}
              />
            );
          })}
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default UserPage;
