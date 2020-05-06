import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import { Header } from "./components";
import "./style.css";

// see https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
const AutoHeightTextarea = lazy(() =>
  import("./auto-height-textarea/AutoHeightTextarea")
);
const Counter = lazy(() => import("./counter-with-reducer/Counter"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Route path="/auto-height-textarea">
        <AutoHeightTextarea />
      </Route>
      <Route path="/counter-with-reducer">
        <Counter />
      </Route>
    </Suspense>
  </Router>
);

render(<App />, document.getElementById("root"));
