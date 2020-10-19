import React, { Suspense } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { checkTokenLoginAdmin } from "../../common/checkToken";
import TranslationBtn from "../../common/translationBtn";
import Waiting from "../../common/waiting";
import MenuAdmin from "./component/menu/menuAdmin";
import routes from "./routes";

function Admin(props) {
  const IsProtected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return checkTokenLoginAdmin() ? (
          (document.title = rest.title) && <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        );
      }}
    />
  );

  const NoIsProtected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return !checkTokenLoginAdmin() ? (
          (document.title = rest.title) && <Component {...props} />
        ) : (
          <Redirect to="/admin/dashboard" />
        );
      }}
    />
  );
  return (
    <Suspense
      fallback={
        <Waiting
          custome={{ position: "relative", top: "300px", left: "40%" }}
        />
      }
    >
      <Router>
        <div className="admin">
          <div style={{ display: "flex" }}>
            <MenuAdmin />
            <div className="admin__content">
              <Switch>
                {routes.map((e, i) => {
                  const component = React.lazy(() => import(`${e.component}`));
                  return e.isProtected ? (
                    <IsProtected
                      key={"routes-admin" + i}
                      exact
                      title={e.title}
                      path={e.path}
                      component={component}
                    />
                  ) : (
                    <NoIsProtected
                      key={"routes-admin" + i}
                      exact
                      title={e.title}
                      path={e.path}
                      component={component}
                    />
                  );
                })}
              </Switch>
              <div style={{ position: "fixed", top: "-5px", right: "20px" }}>
                <TranslationBtn />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default Admin;
