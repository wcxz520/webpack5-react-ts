import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const User = lazy(() => import("@/pages/User"));

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <div>
            <Link to="/">go/</Link>
          </div>
          <div>
            <Link to="/home">goHome</Link>
          </div>
          <div>
            <Link to="/user">goUser</Link>
          </div>
          <Route path="/">haha</Route>
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          {/* <Route>无页面</Route> */}
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
