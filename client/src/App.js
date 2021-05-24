import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDetail from "./pages/EventDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Events from "./pages/Events"

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  render () {
    return (

        <Router>
          <Container component="main" maxWidth="lg">
            <div className="mainPage">
              {/* <NavBar /> */}
              {/* <Header /> */}
              <Wrapper>
                <Route exact path="/" component={LoginPage}/>

                <Route exact path="/teacher" component={EventPage}/>

                <Route exact path="/parent" component={EventDetailsPage}/>

                <Route exact path="/noMatch" component={NoMatch}/>
              </Wrapper>
              {/* <Footer /> */}
            </div>
          </Container>
        </Router>
    )
  }
}
export default App;