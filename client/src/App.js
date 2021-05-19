import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDetail from "./pages/EventDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Events from "./pages/Events"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/events"]}>
            <Events />
          </Route>
          <Route exact path="/events/:query">
            <EventDetail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;