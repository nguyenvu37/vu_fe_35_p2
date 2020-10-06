import React, { lazy, Suspense } from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Waiting from "./common/waiting";
import "./sass/styles.scss";

function App() {
  return (
    <Suspense
      fallback={
        <Waiting custom={{ position: "relative", top: "300px", left: "50%" }} />
      }
    >
      <Router>
        <Switch>
          {routes.map((config, i) => {
            const component = lazy(() => import(`${config.component}`));
            return (
              <Route
                key={"routes" + i}
                exact
                title={config.title}
                path={config.path}
                component={component}
              />
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
