import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import "./style.css";

// see https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
const AutoHeightTextarea = lazy(() => import("./auto-height-textarea"));
const CounterWithReducer = lazy(() => import("./counter-with-reducer"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <article className="main-content">
        <Switch>
          <Route path="/auto-height-textarea" component={AutoHeightTextarea} />
          <Route path="/counter-with-reducer" component={CounterWithReducer} />
        </Switch>
      </article>
    </Suspense>
  </Router>
);

render(<App />, document.getElementById("root"));
