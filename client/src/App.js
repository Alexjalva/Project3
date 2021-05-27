import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDetail from "./pages/EventDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Events from "./pages/Events"
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import AUTH from "./utils/AUTH";

function App() {
  const [loggedIn, setLoggedIn] = useState([]);
  const [user, setUser]= useState([]);

  useEffect(() => {
    AUTH.getUser().then(res => {
      console.log(res);
      if(!!res.data.user){
        setLoggedIn(true);
        setUser(res.data.user)
        console.log("logged In");
      }
      else{
        setLoggedIn(false);
        setUser(null)
      }
    })
  }, []);
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        {!loggedIn && <Route exact path="/SignUp">
            <SignUp />
<<<<<<< HEAD
          </Route>}
          {loggedIn && <Route exact path="/SignUp">
            <Events />
          </Route>}
        {loggedIn && <Route exact path="/home">
            <Events />
          </Route>}
          {!loggedIn && <Route exact path={["/", "/login"]}>
            <Login />
          </Route>}
          {loggedIn && <Route exact path="/events/:query">
=======
          </Route>
        <Route exact path="/Events">
            <Events />
          </Route>
          <Route exact path={["/", "/Login"]}>
            <Login />
          </Route>
          <Route exact path="/Events/:query">
>>>>>>> 1035f2d611dfed5ed163cc7b78db83bac01412f2
            <EventDetail />
          </Route>}
          {loggedIn && <Route>
            <NoMatch />
          </Route>}
          {!loggedIn && <Route>
            <Login />
          </Route>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;