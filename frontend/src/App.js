import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/form" exact component={() => <Form />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;